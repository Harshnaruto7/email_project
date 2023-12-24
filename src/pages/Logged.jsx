import React from "react";
import "./logged.css";

export default function Logged(props) {
  return (
    <div>
      <h2 id="login_text">You have suceessfully logged in!</h2>

      <p>This is the email{props.name}</p>
    </div>
  );
}

// export default Logged;
