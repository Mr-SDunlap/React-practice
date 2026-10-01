import { useState } from "react";

function MyComponent() {
  const [car, setCar] = useState({
    year: 2027,
    make: "Kia",
    model: "Telluride",
  });

  function handleYearChange(e) {
    setCar((c) => ({ ...car, year: e.target.value }));
  }
  function handleMakeChange(e) {
    setCar((c) => ({ ...car, make: e.target.value }));
  }
  function handleModelChange(e) {
    setCar((c) => ({ ...car, model: e.target.value }));
  }

  return (
    <>
      <div>
        <p>
          Your favorite car is: {car.year} {car.make} {car.model}
        </p>
        <input type="number" value={car.year} onChange={handleYearChange} />
        <br />
        <input type="text" value={car.make} onChange={handleMakeChange} />
        <br />
        <input type="text" value={car.model} onChange={handleModelChange} />
        <br />
      </div>
    </>
  );
}
export default MyComponent;
