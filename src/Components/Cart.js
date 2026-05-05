import React, { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function addToCart(item) {
    setCart([...cart, item]);
  }

  return (
    // This <div> is the SINGLE parent that wraps everything
    <div className={isDarkMode ? "App" : "App light"}>
      <header>
        <h1>Shopping App</h1>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      {/* Your Item List Section */}
      <ul>
        {itemsToDisplay.map((item) => (
          <li key={item.id}>
            {item.name} 
            <button onClick={() => addToCart(item.name)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      {/* Your Cart Display Section */}
      <section className="cart-container">
        <h2>Cart</h2>
        {cart.map((item, index) => (
          <p key={index}>{item} is in your cart.</p>
        ))}
      </section>
    </div>
  );
}

export default App;