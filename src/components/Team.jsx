/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import flecha from "../img/abajo.png";

export const Team = (props) => {
  const [categoria, setCategoria] = useState("todos");
  const [dropdown, setDropdown] = useState(false);

  const abrirCerrarDropdow=()=>{
    setDropdown(!dropdown);
  }

  const handlCategorias = function (e) {
    const opcion = e.target.id;
    
    setCategoria(opcion);
  }
  console.log(categoria);
  return (
    <div id='team' className='text-center'>
      <div className='container'>
      
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Catalogo de productos</h2>
          <div className='col-md-4 col-md-offset-11'>
          <div className='filter'>
            <h5 >FILTRAR</h5>
            <div className="dropdown">
              <button onClick={abrirCerrarDropdow}  className="dropbtn">CATEGORIAS  <img src={flecha} width="13px" /></button>
              <div className={dropdown === true ? 'dropdown-active': 'dropdown-content' }>
                <div className="trantition">
                <a id="todos"  onClick={handlCategorias} href="#">Todos</a>
                <a id="aceites"  onClick={handlCategorias} href="#">Aceites</a>
                <a id="grasas" onClick={handlCategorias} href="#">Grasas</a>
                <a id="contenedores" onClick={handlCategorias} href="#">Contenedores</a>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
          
          <div id='row'>
            {props.data
            
              ? props.data.map((d, i) => (
                
                  <div key={`${d.name}-${i}`} className='col-md-4 col-sm-6 team hover visible'>
                    <div className={categoria === d.categoria || categoria === "todos" ? '': 'ocultar' }>
                      
                    
                    <div className='thumbnail'>
                      <div className={d.dispo === 'Disponible' ? 'disponible': 'demanda' }>
                      <span >{d.dispo}</span>
                      </div>
                      {' '}
                      <img src={d.img} alt='...' className= 'team-img' />
                      <div className='caption'>
                        <h4>{d.name}</h4>
                        <p className="price">PRECIO: {d.price}$</p>
                        <p>{d.job}</p>
                        <a href="/catalogo" className='btn btn-compartir '>MAS INFORMACION</a>
                      </div>
                    </div>
                    </div>
                  </div>
                ))
              : 'loading'}
          </div>
      </div>
    </div>
  )
}
