import React, { useState } from "react";
import "./form.css";

const Form = ({ handleaddItems }) => {
  let [description, setdescription] = useState("");
  let [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();

    if (!description) return;

    let obj = {
      id: Date.now(),
      description,
      quantity,
      packedstatus: false,
    };

    handleaddItems(obj);

    setQuantity(1);
    setdescription("");
  }
  function handleInpuval(e) {
    setdescription(e.target.value);
  }

  function handleCount(e) {
    setQuantity(Number(e.target.value));
  }
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="formText">
          <h3>What do you need for your 😍 trip?</h3>
        </div>
        <div className="count">
          <select value={quantity} onChange={handleCount}>
            {/* It returns array values */}
            {Array.from({ length: 20 }, (_, i) => i + 1).map(
              (values, index) => (
                <option key={index} value={values}>
                  {values}
                </option>
              )
            )}
          </select>
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="item..."
            value={description}
            onChange={handleInpuval}
          />
        </div>
        <div className="button">
          <button>ADD</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
