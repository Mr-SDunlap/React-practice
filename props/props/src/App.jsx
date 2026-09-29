import Student from "./Student.jsx";

function App() {
  return (
    <>
      <Student name="Stephen" age={30} isStudent={true} />
      <Student name="Ethan" age={20} isStudent={true} />
      <Student name="Vivian" age={28} isStudent={false} />
      <Student />
    </>
  );
}

export default App;
