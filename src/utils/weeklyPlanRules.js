// Check if the weekly plan contains any meals
export function isPlanEmpty(weeklyPlan) {
  return Object.values(weeklyPlan).every((mealId) => !mealId);
}

// Count how many meals are selected in the weekly plan
export function countMeals(weeklyPlan) {
  return Object.values(weeklyPlan).filter((mealId) => mealId).length;
}

// Check if the weekly plan has reached the maximum limit
export function isPlanFull(weeklyPlan) {
  return countMeals(weeklyPlan) >= 7;
}

// Calculate delivery charges
export function calculateDeliveryFee(subtotal) {
  if (subtotal >= 2000) {
    return 0;
  }

  return 150;
}
// Check if the weekly plan contains no more than 7 meals
export function isPlanWithinLimit(weeklyPlan) {
  return countMeals(weeklyPlan) <= 7;
}
