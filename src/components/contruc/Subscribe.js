import React, { useState } from "react";
import "../../styles/Subscribe.css";
import Modal from "./Modal";
import axios from 'axios';


const Subscribe = ({
  placeholder,
  placeholder2,
  buttonText,
  
  
}) => {
  const [modalInsertar, setModalInsertar]= useState(false);
  
  const toggle = () => {
    setModalInsertar(!modalInsertar);
  }
  const [state, setState] = useState({
    Nombre:'',
    Correo:''
    
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
  const [data, setData]=useState([]);
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const baseUrl="http://localhost/Favorit/api/";
    var f = new FormData();
    f.append("Nombre", Nombre);
    f.append("Correo", Correo);
    f.append("METHOD", "POST");
    await axios.post(baseUrl, f)
    .then(response=>{
      
      setData(data.concat(response.data));
      setState({ Nombre:"", Correo: "" });
      toggle();
    })
    .catch(error=>{
      console.log(error);
    })

  }
  

    
  


  return (
    <div>
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
      <button className="subscribe-button"  type="submit">
        {buttonText}
      </button>
    
    </form>
    
      
    <Modal  isOpen={modalInsertar} toggle={toggle} >
    

        <h4 style={{textAlign:'center', margin:'13% 0%'}}>Su información fue enviada correctamente </h4>
        
      </Modal>
      
    </div>
    
  );
};


export default Subscribe;
