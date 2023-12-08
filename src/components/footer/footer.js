import React from "react";
import "./footer.css";

const Footer = ({ itemStore }) => {
  let length = itemStore.length;
  let packed = itemStore.filter((values) => values.packedstatus).length;
  let percentage = Math.round((packed / length) * 100);

  if (!itemStore.length)
    return (
      <div className="footer">
        <h4>Start adding some items to your packing list 🚀</h4>
      </div>
    );
  return (
    <div className="footer">
      <h4>
        {percentage === 100
          ? `You got everything! Ready to go ✈️`
          : `💼 You have ${length} items on your list, and you already packed ${packed}
        (${percentage}%)`}
      </h4>
    </div>
  );
};

export default Footer;
