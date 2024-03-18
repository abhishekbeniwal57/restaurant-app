// Menu.js
import React, { useState } from "react";

const Menu = ({ addToCart }) => {
  const [categories, setCategories] = useState([
    {
      name: "Pizza",
      items: [
        { name: "Margherita", price: 8.99 },
        { name: "Pepperoni", price: 9.99 },
        { name: "Vegetarian", price: 7.99 },
      ],
      isOpen: false,
    },
    {
      name: "Burger",
      items: [
        { name: "Classic Burger", price: 6.99 },
        { name: "Cheeseburger", price: 7.99 },
        { name: "Veggie Burger", price: 8.49 },
      ],
      isOpen: false,
    },
    {
      name: "Chinese",
      items: [
        { name: "Fried Rice", price: 5.99 },
        { name: "Chow Mein", price: 6.49 },
        { name: "Spring Rolls", price: 4.99 },
      ],
      isOpen: false,
    },
    {
      name: "Starters",
      items: [
        { name: "Paneer tikka", price: 6.49 },
        { name: "Gobi Manchurian", price: 7.89 },
        { name: "Prawns Tandoori", price: 9.99 },
      ],
      isOpen: false,
    },
    {
      name: "Main Course",
      items: [
        { name: "Kadhai Paneer", price: 12.99 },
        { name: "Chicken Tikka Masala", price: 10.49 },
        { name: "Butter Chicken", price: 13.99 },
      ],
      isOpen: false,
    },
    {
      name: "Deserts",
      items: [
        { name: "Gulab Jamun", price: 3.49 },
        { name: "Rasmalai", price: 4.49 },
        { name: "Gajar Ka Halwa", price: 5.99 },
      ],
      isOpen: false,
    },
  ]);

  const toggleCategory = (index) => {
    setCategories(
      categories.map((category, i) =>
        i === index ? { ...category, isOpen: !category.isOpen } : category
      )
    );
  };

  return (
    <div className="menu">
      {categories.map((category, index) => (
        <div key={category.name} className="menu-category">
          <h3 onClick={() => toggleCategory(index)}>
            {category.name}
            {category.isOpen ? "-" : "+"}
          </h3>
          {category.isOpen && (
            <ul>
              {category.items.map((item, i) => (
                <li key={i} className="menu-item">
                  <span>{item.name}</span>
                  <span>${item.price.toFixed(2)}</span>
                  <button
                    onClick={() =>
                      addToCart({ ...item, category: category.name })
                    }
                  >
                    Add to Cart
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Menu;
