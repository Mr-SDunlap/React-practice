import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("Dnlp");
  };

  const incrementAge = () => {
    setAge(age + 1);
  };
  const decrementAge = () => {
    if (age > 0) {
      setAge(age - 1);
    } else {
      return;
    }
  };

  const toggleEmployment = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Name: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>
      <button onClick={decrementAge}>decrement Age</button>

      <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleEmployment}>Toggle employment</button>
    </div>
  );
}
export default MyComponent;
