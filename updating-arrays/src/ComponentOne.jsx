import { useState } from "react";

function ComponentOne() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  function AddFood() {
    const newFood = document.getElementById("food-input").value;
    document.getElementById("food-input").value = "";

    setFoods((f) => [...foods, newFood]);
  }

  function RemoveFood(index) {
    //filter method takes in a element and an index.
    //we are ignoring element by using "_"
    setFoods(foods.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => RemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="food-input" placeholder="Enter food name" />
      <button onClick={AddFood}>Add Food</button>
    </div>
  );
}
export default ComponentOne;
