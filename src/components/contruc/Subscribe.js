import React from "react";
import "../../styles/Subscribe.css";

const Subscribe = ({
  placeholder,
  buttonText,
  configureNotification,
  showNotification,
  changeLogoSpeed
}) => {


  return (
    <form className="subscribe" >
      <input
        className="subscribe-email"
        name="email"
        type="email"
        placeholder={placeholder}
        aria-label="Email Address"
      />
      <button className="subscribe-button" type="submit">
        {buttonText}
      </button>
    </form>
  );
};


export default Subscribe;
