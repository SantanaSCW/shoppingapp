import React, { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Sample data - ensure this matches the lab's expected categories
  const items = [
    { id: 1, name: "Apple", category: "Fruits" },
    { id: 2, name: "Carrot", category: "Vegetables" },
  ];

  const handleToggle = () => setIsDarkMode(!isDarkMode);

  const addToCart = (itemName) => {
    setCart([...cart, itemName]);
  };

  const filteredItems = items.filter(item => 
    selectedCategory === "All" || item.category === selectedCategory
  );

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <h1>Shopping App</h1>
      
      {/* 1. Dark Mode Button */}
      <button onClick={handleToggle}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>

      {/* 2. Category Filter (Example) */}
      <select onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
      </select>

      {/* 3. Product List & Empty State Requirement */}
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <li key={item.id}>
              {item.name} 
              <button onClick={() => addToCart(item.name)}>Add to Cart</button>
            </li>
          ))
        ) : (
          <p>No products available.</p> 
        )}
      </ul>

      {/* 4. Cart Display */}
      <h2>Cart</h2>
      {cart.map((item, index) => (
        <p key={index}>{item} is in your cart.</p>
      ))}
    </div>
  );
}

export default App;