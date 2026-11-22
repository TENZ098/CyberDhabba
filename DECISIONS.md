# CyberDhabba – Design Decisions

## 1. Framework
React with Vite was selected to build the website because it supports component-based development and fast development.

## 2. Routing
React Router was used to create separate pages for Home, Meals, Weekly Planner, and Checkout.

## 3. Meal Data
Meal information is stored in a local JavaScript data file instead of using a backend API.

## 4. Weekly Planner
The planner allows a maximum of 7 meals per week. This rule is enforced through a utility function and automated tests.

## 5. Data Persistence
LocalStorage is used to preserve the user's weekly meal selections after refreshing the page.

## 6. Checkout Validation
Required fields and phone-number formatting are validated to prevent invalid form submissions.

## 7. Delivery Fee
A delivery fee of Rs. 150 is charged for orders below Rs. 2,000. Orders of Rs. 2,000 or more receive free delivery.

## 8. Error Handling
A fallback image is displayed when a meal image fails to load. A custom 404 page is displayed for invalid routes.

## 9. Testing
Manual edge cases and automated tests were used to check the weekly meal selection limit and website behaviour.

## 10. Responsive Design
CSS media queries were used to make the website usable on different screen sizes.