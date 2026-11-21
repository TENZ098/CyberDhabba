
import meals from "../data/meals";
import { useState, useEffect } from "react";
import "./planner.css";

function Planner() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

const [weeklyPlan, setWeeklyPlan] = useState(() => {
  const savedPlan = localStorage.getItem("weeklyPlan");
  return savedPlan ? JSON.parse(savedPlan) : {};
});

useEffect(() => {
  localStorage.setItem("weeklyPlan", JSON.stringify(weeklyPlan));
}, [weeklyPlan]);

  // Update the meal selected for a particular day
  function handleMealChange(day, mealId) {
    setWeeklyPlan((previousPlan) => ({
      ...previousPlan,
      [day]: mealId,
    }));
  }

  // Remove the meal from a particular day
  function removeMeal(day) {
    setWeeklyPlan((previousPlan) => ({
      ...previousPlan,
      [day]: "",
    }));
  }

  // Calculate the total price of all selected meals
  const totalPrice = days.reduce((total, day) => {
    const meal = meals.find(
      (meal) => meal.id === Number(weeklyPlan[day])
    );

    return total + (meal ? meal.price : 0);
  }, 0);

  // Count how many days have a selected meal
  const plannedDays = days.filter((day) => weeklyPlan[day]).length;

  return (
    <main className="planner-page">
      <section className="planner-header">
        <p className="section-label">PLAN AHEAD & EAT BETTER</p>
        <h1>Your Weekly Meal Planner</h1>
        <p>
          Choose your meals for the week and see your estimated total.
        </p>
      </section>

      {/* Weekly Meal Selection */}
      <section className="planner-grid">
        {days.map((day) => {
          const selectedMeal = meals.find(
            (meal) => meal.id === Number(weeklyPlan[day])
          );

          return (
            <div className="planner-day-card" key={day}>
              <h3>{day}</h3>

              <select
                value={weeklyPlan[day] || ""}
                onChange={(e) => handleMealChange(day, e.target.value)}
              >
                <option value="">Select a meal</option>

                {meals.map((meal) => (
                  <option key={meal.id} value={meal.id}>
                    {meal.name} - Rs. {meal.price}
                  </option>
                ))}
              </select>

              {selectedMeal && (
                <div className="selected-meal">
                  <p>{selectedMeal.name}</p>
                  <strong>Rs. {selectedMeal.price.toLocaleString()}</strong>

                  <button onClick={() => removeMeal(day)}>
                    Remove
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* Weekly Summary */}
      <section className="planner-summary">
        <div className="summary-info">
          <p className="section-label">YOUR WEEKLY SUMMARY</p>
          <h2>Your plan is taking shape!</h2>
          <p>
            You have planned meals for {plannedDays} out of 7 days.
          </p>
        </div>

        <div className="summary-total">
          <span>Total Weekly Cost</span>
          <h2>Rs. {totalPrice.toLocaleString()}</h2>
          <p>{plannedDays} meals selected</p>
        </div>

        <button
          className="clear-plan-btn"
          onClick={() => setWeeklyPlan({})}
        >
          Clear Weekly Plan
        </button>
      </section>
    </main>
  );
}

export default Planner;
