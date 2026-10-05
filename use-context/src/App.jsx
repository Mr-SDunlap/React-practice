// useContext = React Hook that allows you to share values
//              between multiple layers of components
//              without passing props through each layer

// Provider Component
// 1. import { createContext } from 'react'
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value="value">
//      <Child />
//    </MyContext.Provider>

//Consumer Components
// 1. import 'useContext' from 'react';
//    import { MyContext } from './ComponentA';
// 2. const value = useContext(MyContext);

import ComponentA from "./ComponentA";

function App() {
  return (
    <>
      <ComponentA />
    </>
  );
}

export default App;
