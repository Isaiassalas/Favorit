/* eslint-disable jsx-a11y/anchor-is-valid */

import face from "../img/face.png";
import insta from "../img/insta.png";
import twit from "../img/gorjeo.png";
import { useState, useEffect } from "react";
import axios from "axios";

const url = "http://127.0.0.1:8000";
export const Contact = (props) => {
  const [distribuidores, setDistribuidores] = useState([])
  const getAllDistri = async () => {
    const response = await axios.get(`${url}/distribuidores`);
    setDistribuidores(response.data);
  };
  useEffect(() => {
    getAllDistri();
  }, []);
  return (
    <div id='testimonials'>
      <div className=''>
        <div className='section-title text-center'>
          <h2>DISTRIBUIDORES AUTORIZADOS</h2>
        </div>
        <div className='row '>
          <div className="container">
            <table className="tabla table-responsive" >
              <thead >
                <tr>
                  <th>NOMBRE</th>
                  <th>CONTACTO</th>
                  <th>TELEFONOS</th>
                  <th>DIRECCION</th>
                  <th>EMAIL</th>
                  <th>RIF</th>
                  <th>RRSS</th>
                </tr>
              </thead>
              <tbody >
              {distribuidores
            ? distribuidores.map((d, i) => (
                
                <tr key={`${d.Contacto}-${i}`}>
                  <td>{d.Nombre}</td>
                  <td>{d.Contacto}</td>
                  <td>{d.phone}</td>
                  <td>{d.Direccion}</td>
                  <td>{d.email}</td>
                  <td>{d.RIF}</td>
                  <td >

                    <a href={d.FbUrl}><img src={face} alt="facebook" width="25px"/></a>
                    <a href={d.IgUrl}><img src={insta} alt="instagram" width="25px"/></a>
                    <a href={d.TtUrl}><img src={twit} alt="twitter" width="25px"/></a>                 
                  </td>
                </tr>
                
                       
                ))
                : 'loading'}        
                </tbody>
            </table>
          </div>
        </div>    
      </div>
    </div>
  )
}
