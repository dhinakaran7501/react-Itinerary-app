import React, { useState } from "react";
import "./list.css";
import Products from "../product list/products";

const List = ({ objects, handleClose, handleChecked, handleClear }) => {
  let [orders, setorders] = useState("input");

  function handleArrangements(e) {
    setorders(e.target.value);
  }

  let sortItems;

  if (orders === "input") handleInput();
  if (orders === "description") handleDescription();
  if (orders === "packed") handlePacked();

  function handleInput() {
    sortItems = objects;
  }

  function handleDescription() {
    sortItems = objects
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  function handlePacked() {
    sortItems = objects
      .slice()
      .sort((a, b) => Number(a.packedstatus) - Number(b.packedstatus));
  }

  return (
    <div className="list">
      <div className="items">
        <ul>
          {sortItems.map((values) => (
            <Products
              key={values.id}
              id={values.id}
              description={values.description}
              quantity={values.quantity}
              packedStatus={values.packedstatus}
              handleClose={handleClose}
              handleChecked={handleChecked}
            />
          ))}
        </ul>
      </div>
      <div className="buttons">
        <select onChange={handleArrangements} value={orders}>
          <option value="input">Sort By Input Order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleClear}>Clear List</button>
      </div>
    </div>
  );
};

export default List;
