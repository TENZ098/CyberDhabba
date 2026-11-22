# CyberDhabba 🍽️

A React-based food ordering website where users can browse meals, search and filter dishes, create a weekly meal plan, and proceed to checkout.

## Features

- Browse available meals
- Search meals by name
- Filter meals by category
- View meal details and prices
- Add meals to a weekly planner
- Maximum of 7 meals in the weekly plan
- Save weekly selections using LocalStorage
- Checkout form with input validation
- Delivery fee calculation
- Responsive user interface
- Custom 404 page for invalid routes
- Fallback image for unavailable meal images

## Technologies Used

- React
- Vite
- JavaScript
- CSS
- React Router
- Node.js
- LocalStorage

## Business Rules

- A maximum of 7 meals can be selected for the weekly plan.
- Orders below Rs. 2,000 have a delivery fee of Rs. 150.
- Orders of Rs. 2,000 or more receive free delivery.

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/TENZ098/CyberDhabba.git
   ```

2. Navigate into the project folder:

   ```bash
   cd CyberDhabba
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

## Testing

Run the automated business-rule tests using:

```bash
node --test
```

## Project Structure

```text
CyberDhabba/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── pages/
│   └── utils/
├── package.json
├── package-lock.json
├── README.md
└── DECISIONS.md
```

## Repository

GitHub: https://github.com/TENZ098/CyberDhabba