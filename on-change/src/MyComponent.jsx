//  onChange =  event handler used primarily with form elements
//              ex. <input>, <textarea>, <select>, <radio>
//              Triggers a function everytime the value of the input changes
import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("Delivery");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleQuantityChange(e) {
    setQuantity(e.target.value);
  }
  function handleCommentChange(e) {
    setComment(e.target.value);
  }

  function handlePayment(e) {
    setPayment(e.target.value);
  }

  function handleShipping(e) {
    setShipping(e.target.value);
  }

  return (
    <>
      <div>
        <input type="text" value={name} onChange={handleNameChange} />
        <p>Name: {name}</p>

        <input type="number" value={quantity} onChange={handleQuantityChange} />
        <p>Quantity: {quantity}</p>

        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Delivery instructions"
        ></textarea>
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePayment}>
          <option value="">Select an option</option>
          <option value="Visa">Visa</option>
          <option value="Master Card">Master Card</option>
          <option value="Gift Card">Gift Card</option>
        </select>
        <p>Payment: {payment}</p>

        <label>
          Pick Up
          <input
            type="radio"
            value="Pick Up"
            checked={shipping === "Pick Up"}
            onChange={handleShipping}
          />
        </label>
        <br />
        <label>
          Delivery
          <input
            type="radio"
            value="Delivery"
            checked={shipping === "Delivery"}
            onChange={handleShipping}
          />
        </label>
        <p>Shipping: {shipping}</p>
      </div>
    </>
  );
}

export default MyComponent;
