import "./product.css";

const Products = ({
  id,
  description,
  quantity,
  packedStatus,
  handleClose,
  handleChecked,
}) => {
  return (
    <li>
      <div className="products">
        <input
          type="checkbox"
          value={packedStatus}
          onClick={() => handleChecked(id)}
        />
        <div
          style={
            packedStatus
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          <b>{quantity}</b>
          <b>{description}</b>
        </div>
        <button onClick={() => handleClose(id)}>❌</button>
      </div>
    </li>
  );
};

export default Products;
