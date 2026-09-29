//  React Hooks = Special functions that allow functional components to use React
//                features without writing class components
//                (useState, useEffect, useContext, useReducer, useCallback, ...)

//  useState() =  A react hook that allows the creation of a stateful variable
//                AND a setter function to update its value in the virtual DOM.
//                [name, setName]

import MyComponent from "./MyComponent";
import Counter from "./Counter.jsx";

function App() {
  return (
    <>
      <MyComponent />
      <Counter />
    </>
  );
}

export default App;
