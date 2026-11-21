import { useState } from "react";
import meals from "../data/meals";
import "./Meals.css";

function Meals() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

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

      {/* Search Bar */}
      <div className="meals-search">
        <input
          type="text"
          placeholder="Search meals..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Category Filters */}
      <div className="category-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={
              selectedCategory === category ? "category-btn active" : "category-btn"
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Results Count */}
      <p className="results-count">
        Showing {filteredMeals.length} meals
      </p>

      {/* Meal Cards */}
      <div className="meals-grid">
        {filteredMeals.map((meal) => (
          <div className="meal-card" key={meal.id}>
            <div className="meal-image">
              {meal.category === "Rice"
                ? "🍚"
                : meal.category === "BBQ"
                ? "🍢"
                : meal.category === "Fast Food"
                ? "🍔"
                : meal.category === "Breakfast"
                ? "🥞"
                : meal.type === "Veg"
                ? "🥗"
                : "🍲"}
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