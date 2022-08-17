import React from "react";

const Error = () => {
  return (
    <div className="errorPage">
      <p className="errorMessage">
        Wrong username or password! <br />
        Please try again
      </p>
      <button
        className="refreshBtn"
        onClick={() => window.location.reload(false)}
      >
        Back to login
      </button>
    </div>
  );
};

export default Error;
