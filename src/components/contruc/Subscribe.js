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
      const url = 'http://localhost/Favorit/api/contact/guardar_datos.php';
     await fetch(url, {
        mode: 'cors',
        credentials: 'same-origin',
        method:"POST",
        body: JSON.stringify(cargar)    
        
      })
      .catch(err => console.log(err))
      
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
