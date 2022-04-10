import React, { useState } from "react";
import "../../styles/Subscribe.css";

const Subscribe = ({
  placeholder,
  placeholder2,
  buttonText,
  
  
}) => {

  const [state, setState] = useState({
    Nombre:"",
    Correo:""
    
  });
  
  

  const handleChange = e => {
     let value = e.target.value;
     let name = e.target.name;

     setState((prevalue) => {
      return {
        ...prevalue,   // Spread Operator               
        [name]: value
      }
    })
    
  };
  const {Nombre,Correo} = state;

  const handleSubmit = async (e) => {
    e.preventDefault();

      const cargar = { Nombre:Nombre,Correo:Correo};

     await fetch("http://127.0.0.1:3000//Favorit/api/contact/guardar_datos.php/?insertar", {
        method:"POST",
        body: JSON.stringify(cargar)    
        
      })
      
      setState({ Nombre:"", Correo: "" });
     
        alert("Correo enviado correctamente")
      
      
      
    };
    

    
  


  return (
    <form className="subscribe" onSubmit={handleSubmit}>
      
      <input
       className="subscribe-name"
       name="Nombre"
       type="text"
       placeholder={placeholder2}
       onChange={handleChange}
       value={state.Nombre}
       aria-label="Nombre"
       required
     />
      <input
        className="subscribe-email"
        name="Correo"
        type="email"
        placeholder={placeholder}
        onChange={handleChange}
        value={state.Correo}
        aria-label="Correo Electronico"
        required
      />
      <button className="subscribe-button" type="submit">
        {buttonText}
      </button>
    </form>
  );
};


export default Subscribe;
