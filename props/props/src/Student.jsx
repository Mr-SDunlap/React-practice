// props =  read only properties that are shared between components
//          A parent component can send data to a child component.
//          <Component key=value />
//propTypes = a mechanism that ensures the passed values are the correct type
//            age: PropTypes.number
import PropTypes from "prop-types";
function Student({ name = "Guest", age = 0, isStudent = false }) {
  return (
    <div className="student">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

export default Student;
