import { useState } from "react";
import meals from "../data/meals";
import "./Meals.css";

function Meals() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [simulateFailure, setSimulateFailure] = useState(false);

  // Get all unique categories from the meals array
  const categories = ["All", ...new Set(meals.map((meal) => meal.category))];

  // Filter meals according to search and selected category
  const filteredMeals = meals.filter((meal) => {
    const matchesSearch = meal.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      meal.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="meals-page">
      {/* Page Heading */}
      <section className="meals-header">
        <p className="section-label">FRESHLY PREPARED FOR YOU</p>
        <h1>Explore Our Meals</h1>
        <p>
          Find your favourite desi food, freshly prepared and full of flavour.
        </p>
      </section>

      {/* Loading Failure Demo */}
<div className="failure-demo">
  <label>
    <input
      type="checkbox"
      checked={simulateFailure}
      onChange={(e) => setSimulateFailure(e.target.checked)}
    />
    Simulate loading failure
  </label>
</div>

    
      {/* Loading Failure Demo Result */}
{simulateFailure ? (
  <div className="loading-error">
    <h3>Unable to load meals</h3>
    <p>Something went wrong while loading meals.</p>
    <button onClick={() => setSimulateFailure(false)}>
      Retry
    </button>
  </div>
) : (
  <div className="meals-grid">
    {filteredMeals.map((meal) => (
      <div className="meal-card" key={meal.id}>
        <div className="meal-image">
          <img
            src={meal.image}
            alt={meal.name}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/600x400?text=Image+Unavailable";
            }}
          />
        </div>

        <div className="meal-content">
          <div className="meal-tags">
            <span className="meal-category">{meal.category}</span>
            <span className="meal-type">{meal.type}</span>
          </div>

          <h3>{meal.name}</h3>
          <p className="meal-description">{meal.description}</p>

          <div className="meal-bottom">
            <span className="meal-price">
              Rs. {meal.price.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
)}

      {/* Empty Search Result */}
      {filteredMeals.length === 0 && (
        <div className="no-meals">
          <span>🔍</span>
          <h3>No meals found</h3>
          <p>Try a different search or category.</p>

          <button
            onClick={() => {
              setSearch("");
              setSelectedCategory("All");
            }}
          >
            Clear Filters
          </button>
        </div>
      )}
    </main>
  );
}

export default Meals;