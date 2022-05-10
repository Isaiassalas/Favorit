/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import flecha from "../img/abajo.png";
import Modal from "./contruc/Modal";

export const Team = (props) => {
  const [categoria, setCategoria] = useState("todos");
  const [subcategoria, setSubcategoria] = useState("todos");
  const [dropdown, setDropdown] = useState(false);
  const [subdropdown, setSubdropdown] = useState(false);
  const [modalInsertar, setModalInsertar]= useState(false);
  const [informacion, setInformacion] = useState();

  const abrirCerrarDropdow= () => {
    setDropdown(!dropdown);
  }
  const abrirCerrarSubdropdow= () => {
    setSubdropdown(!subdropdown);
  }
  const handlCategorias = function (e) {
    const opcion = e.target.id;
    
    setCategoria(opcion);
    setSubcategoria("todos");

    setDropdown(!dropdown);
  }
  const handlSubcategorias = function (e) {
    const opcionsub = e.target.id;
    
    setSubcategoria(opcionsub);
console.log(subcategoria);
    setSubdropdown(!subdropdown);
  }
  
  const toggle = function (e)  {
    const info = e.target.id;

    setInformacion(info);
    console.log(informacion);
    setModalInsertar(!modalInsertar);
  }
  



  
  return (
    <div id='team' className='text-center'>
      <div className='container'>
      
        <div className='col-md-9 col-md-offset-2 section-title'>
          <h2>Catalogo de productos</h2>
          <div className='col-md-3 col-md-offset-10'>
          <div className='filter'>
            <h5 >FILTRAR</h5>
            <div className="dropdown">
              <button onClick={abrirCerrarDropdow}  className="dropbtn">CATEGORIAS  <img src={flecha} width="13px" /></button>
              <div className={dropdown === true ? 'dropdown-active': 'dropdown-content' }>
                <a id="todos"  onClick={handlCategorias} href="#">TODOS</a>
              {props.categorias ? props.categorias.map((c, i) => (
                <a key={i} id={c.IdCategoria}  onClick={handlCategorias} href="#">{c.Nombre}</a>
                 ))
                 : 'loading'}
                  <div className="dropdown">
                <button onClick={abrirCerrarSubdropdow}  className="dropbtn">SUBCATEGORIAS  <img src={flecha} width="13px" /></button>
                <div className={subdropdown === true ? 'dropdown-active': 'dropdown-content' }>
                {props.subcategorias ? props.subcategorias.map((s, i) => ( 
                  <a key={i} id={s.id}  onClick={handlSubcategorias} href="#">{s.name}</a>
                   ))
                   : 'loading'}
                   </div>
                   </div>
              </div>
            </div>
          </div>
          </div>
        </div>
          
          
          <div id='row ' >

            {props.productos
            
              ? props.productos.map((p, i) => (

                

                <div key={`${p.Nombre}-${i}`} className={`col-md-2 col-sm-5 hover ${categoria === p.IdCategoria || categoria === "todos" ? 'visible' : 'ocultar'} ${subcategoria === p.IdSubCategoria ? 'visible' : 'ocultar'} ` }>
                    

                    <div id={p.IdProducto} className={`thumbnail ${subcategoria === p.IdSubCategoria || subcategoria === "todos"  ? 'visiblesub' : 'ocultar'} `}>
                      <div className={p.Disponibilidad === '1' ? 'disponible': 'demanda' }>
                          {/* <img src={disponible} width="35px" />  */}
                      </div>
                      {' '}
                      <img src={p.Imagen} alt='...' className= 'team-img' />
                      <div  className='caption'>
                        <h4>{p.Marca}</h4>
                       
                        <p className="des-producto">{p.Descripcion}</p>
                        <a  id={p.IdProducto} onClick={toggle} className='btn btn-compartir '>MAS INFORMACION</a>
                      </div>
                    </div>
                    
                  </div>
                ))
                : 'loading'}
             
          </div>
         
      </div>

     
        <Modal  isOpen={modalInsertar} toggle={toggle} >
        {/* {props.productos.filter(p => p.includes('J')).map(p => (
          <div  className='caption'>
            <h4>{p.Marca}</h4>
                       
            <p className="des-producto">{p.Descripcion}</p>
            <a  id={p.IdProducto} onClick={toggle} className='btn btn-compartir '>ENVIAR MENSAJE</a>
          </div>
            ))} */}
        
        </Modal>
        
        
    </div>
  )
}
