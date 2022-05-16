/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import Modal from "./modal/Modal";

export const Services = (props) => {
  const [modalInsertar, setModalInsertar] = useState(false);
  const [informacion, setInformacion] = useState();

  const toggle = function (e) {
    const info = e.target.id;

    setInformacion(info);
    
    setModalInsertar(!modalInsertar);
  };
  
  return (
    <div>

    
    <div id='services' className=' '>
      <div className='container '>
        <div className='section-title text-center '>
          <h2>Productos Nuevos</h2>
          
        </div>
        <div className='row'>
        <div className='portfolio-items'>
             
                
                  
                <div id='row'>
            {props.data
            
              ? props.data.map((p, i) => (
                
                  <div key={`${p.IdProducto}-${i}`} className='col-md-3 col-sm-6 team hover visible'>
                    
                    <div className='thumbnail'>
                      <div className={p.Disponibilidad === '1' ? 'disponible': 'demanda' }>
                      
                      </div>
                      {' '}
                      <img src={p.Imagen} alt='...' className= 'team-img' />
                      <div className='caption'>
                        <h4>{p.Marca}</h4>
                       
                        <p>{p.Descripcion}</p>
                        <a id={p.IdProducto} onClick={toggle} className='btn btn-compartir '>MAS INFORMACION</a>
                      </div>
                    </div>
                    
                  </div>
                ))
              : 'loading'}
          </div>
                
        </div>
        </div>
      </div>

      {props.productos
        ? props.productos.map((p, i) => (
            <div>
              {informacion === p.IdProducto && (
                <Modal key={i}
                informacion={informacion}
                isOpen={modalInsertar}
                toggle={toggle}
              >
                <h5>Producto</h5>
                <img className="img-modal" src={p.Imagen} alt="producto" />
                <p className="text-center">{p.Nombre}</p>
                <h4>Marca: <br /> {p.Marca}</h4> <br />
                <h4>Fecha: <br /> {p.FEchaCreacion}</h4> <br />
                <h4>Descripción:</h4>
                <p className="p-modal">{p.Descripcion}</p> <br />
                <h4 >Codigo:{" "}"{p.CodigoProducto}"</h4>
                <a href={`https://wa.me/+584124022069?text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20producto%20${p.Nombre}%20Codigo:${p.CodigoProducto}`} className="btn btn-compartir">CONTACTAR</a>
                <a className="btn btn-compartir" onClick={toggle}>CERRAR</a>
              </Modal>
              )}
            </div>
          ))
        : "loading"}
    </div>
    </div> 
  )
}
