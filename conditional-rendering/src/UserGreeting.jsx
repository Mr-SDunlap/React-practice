import PropTypes from "prop-types";

function UserGreeting({ isLoggedIn = false, username = "Guest" }) {
  // ( 1 )TRADITONAL WAY OF WRITING CONDITIONAL RENDERING ==============================/
  //   if (isLoggedIn) {
  //     return <h2>Welcome {username}</h2>;
  //   } else {
  //     return <h2>Please log in to continue</h2>;
  //   }
  //===============================================================================/

  // ( 2 ) SETTING THE OUTCOMES AS VARIABLES==============================================/
  const welcomeMessage = (
    <h2 className="welcome-message">Welcome {username}</h2>
  );
  const loginPrompt = (
    <h2 className="login-prompt">Please log in to continue</h2>
  );
  //===============================================================================/

  // ( 3 ) TERNARY OPERATOR CONDITIONAL RENDERING==============================================/
  //   return isLoggedIn ? (
  //     <h2 className="welcome-message">Welcome {username}</h2>
  //   ) : (
  //     <h2 className="login-prompt">Please log in to continue</h2>
  //   );
  //===============================================================================/

  // ( 2 ) SETTING THE OUTCOMES AS VARIABLES continuation==============================================/
  return isLoggedIn ? welcomeMessage : loginPrompt;
  //===============================================================================/
}

UserGreeting.PropTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

export default UserGreeting;
