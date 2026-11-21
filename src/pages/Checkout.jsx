
import { useState } from "react";
import meals from "../data/meals";
import "./Checkout.css";

function Checkout() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [weeklyPlan] = useState(() => {
    try {
      const savedPlan = localStorage.getItem("weeklyPlan");
      return savedPlan ? JSON.parse(savedPlan) : {};
    } catch {
      return {};
    }
  });

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const [error, setError] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Get selected meals from the weekly plan
  const orderItems = days
    .map((day) => {
      const selectedId = Number(weeklyPlan[day]);

      const meal = meals.find((meal) => meal.id === selectedId);

      if (!meal) return null;

      return {
        day,
        ...meal,
      };
    })
    .filter(Boolean);

  // Calculate subtotal
  const subtotal = orderItems.reduce(
    (total, meal) => total + meal.price,
    0
  );

  // Business rule: free delivery on orders of Rs. 2000 or more
  const deliveryFee = subtotal >= 2000 ? 0 : orderItems.length > 0 ? 150 : 0;

  const total = subtotal + deliveryFee;

  // Update customer form values
  function handleChange(e) {
    const { name, value } = e.target;

    setCustomer((previousCustomer) => ({
      ...previousCustomer,
      [name]: value,
    }));
  }

  // Place order
  function handleSubmit(e) {
    e.preventDefault();

    if (orderItems.length === 0) {
      setError("Please select meals in your Weekly Planner first.");
      return;
    }

    setError("");
    setOrderPlaced(true);
  }

  return (
    <main className="checkout-page">
      <section className="checkout-header">
        <p className="section-label">ALMOST READY</p>
        <h1>Complete Your Order</h1>
        <p>Enter your delivery details and review your weekly meals.</p>
      </section>

      {orderPlaced ? (
        <section className="order-success">
          <div className="success-icon">✓</div>
          <h2>Order Submitted Successfully!</h2>
          <p>
            Thank you, {customer.name}! Your order has been recorded
            for this demonstration.
          </p>

          <div className="success-total">
            <span>Order Total</span>
            <h3>Rs. {total.toLocaleString()}</h3>
          </div>

          <p className="success-note">
            Delivery details: {customer.address}
          </p>
          <p className="success-note">
            Contact: {customer.phone}
          </p>
        </section>
      ) : (
        <div className="checkout-layout">
          {/* Customer Form */}
          <section className="checkout-form-section">
            <h2>Delivery Information</h2>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={customer.name}
                  onChange={handleChange}
                  required
                  minLength={3}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="03XXXXXXXXX"
                  value={customer.phone}
                  onChange={handleChange}
                  pattern="03[0-9]{9}"
                  title="Enter a valid Pakistani mobile number starting with 03"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Delivery Address</label>
                <textarea
                  id="address"
                  name="address"
                  placeholder="Enter your complete delivery address"
                  value={customer.address}
                  onChange={handleChange}
                  required
                  minLength={10}
                  rows={4}
                />
              </div>

              {error && <p className="checkout-error">{error}</p>}

              <button className="place-order-btn" type="submit">
                Place Order — Rs. {total.toLocaleString()}
              </button>
            </form>
          </section>

          {/* Order Summary */}
          <section className="order-summary">
            <h2>Your Order</h2>

            {orderItems.length === 0 ? (
              <div className="empty-order">
                <p>You haven't selected any meals yet.</p>
                <p>Go to Weekly Planner to select your meals.</p>
              </div>
            ) : (
              <div className="order-items">
                {orderItems.map((item) => (
                  <div className="order-item" key={item.day}>
                    <div>
                      <strong>{item.name}</strong>
                      <span>{item.day}</span>
                    </div>

                    <p>Rs. {item.price.toLocaleString()}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="summary-line">
              <span>Subtotal</span>
              <span>Rs. {subtotal.toLocaleString()}</span>
            </div>

            <div className="summary-line">
              <span>Delivery Fee</span>
              <span>
                {deliveryFee === 0 && subtotal > 0
                  ? "FREE"
                  : `Rs. ${deliveryFee.toLocaleString()}`}
              </span>
            </div>

            {subtotal > 0 && subtotal < 2000 && (
              <p className="delivery-hint">
                Add Rs. {(2000 - subtotal).toLocaleString()} more
                to get free delivery!
              </p>
            )}

            <div className="summary-line summary-final">
              <span>Total</span>
              <span>Rs. {total.toLocaleString()}</span>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}

export default Checkout;
