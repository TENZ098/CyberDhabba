
import { Link } from "react-router-dom";
import meals from "../data/meals";

function Home() {
  const featuredMeals = meals.filter((meal) => meal.popular).slice(0, 4);

  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-label">HOMEMADE DESI FOOD</p>

          <h1>
            Desi meals.
            <br />
            <span>Digital convenience.</span>
          </h1>

          <p className="hero-description">
            Your favourite Pakistani meals, freshly prepared and delivered.
            Enjoy delicious food or plan your meals for the entire week.
          </p>

          <div className="hero-buttons">
            <Link to="/meals" className="primary-btn">
              Explore Meals
            </Link>

            <Link to="/planner" className="secondary-btn">
              Plan Your Week
            </Link>
          </div>

          <div className="hero-note">
            Freshly prepared • Desi flavours • Convenient ordering
          </div>
        </div>

        <div className="hero-food">
          <div className="food-circle">
  <img
    src={meals[0].image}
    alt={meals[0].name}
  />
</div>

          <div className="food-tag">
            <span></span> Made with desi love
          </div>
        </div>
      </section>

      {/* Featured Meals */}
      <section className="featured-section">
        <div className="section-heading">
          <div>
            <p className="section-label">OUR POPULAR PICKS</p>
            <h2>Customer favourites</h2>
          </div>

          <Link to="/meals" className="view-all-link">
            View all meals →
          </Link>
        </div>

        <div className="featured-grid">
          {featuredMeals.map((meal) => (
            <div className="featured-card" key={meal.id}>
              <div className="meal-emoji">
  <img src={meal.image} alt={meal.name} />
</div>

              <div className="featured-card-content">
                <span className="popular-tag">Popular</span>

                <h3>{meal.name}</h3>

                <p>{meal.description}</p>

                <div className="meal-card-bottom">
                  <span className="meal-price">
                    Rs. {meal.price.toLocaleString()}
                  </span>

                  <Link to="/meals" className="small-order-btn">
                    Order
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Weekly Planner Promotion */}
      <section className="planner-promo">
        <div className="planner-promo-content">
          <p className="section-label">PLAN AHEAD, EAT BETTER</p>

          <h2>Your week. Your meals. Your choice.</h2>

          <p>
            Choose your favourite meals for different days of the week.
            Plan ahead, see your total price, and keep your meals organized.
          </p>

          <Link to="/planner" className="primary-btn">
            Create Weekly Plan
          </Link>
        </div>

        <div className="planner-promo-emoji">
          🗓️
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <div>
          <h3> CyberDhabba</h3>
          <p>Desi meals. Digital convenience.</p>
        </div>

        <p>© 2026 CyberDhabba. Student project demonstration.</p>
      </footer>
    </main>
  );
}

export default Home;
