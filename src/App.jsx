import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Meals from "./pages/Meals";
import Planner from "./pages/Planner";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;