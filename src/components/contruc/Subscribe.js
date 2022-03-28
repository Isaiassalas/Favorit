import React from "react";
import "../../styles/Subscribe.css";

const Subscribe = ({
  placeholder,
  placeholder2,
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
        aria-label="Correo Electronico"
      />
       <input
        className="subscribe-name"
        name="name"
        type="text"
        placeholder={placeholder2}
        aria-label="Nombre"
      />
      <button className="subscribe-button" type="submit">
        {buttonText}
      </button>
    </form>
  );
};


export default Subscribe;
