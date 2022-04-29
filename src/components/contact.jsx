/* eslint-disable jsx-a11y/anchor-is-valid */

import face from "../img/face.png";
import insta from "../img/insta.png";
import twit from "../img/gorjeo.png";

export const Contact = (props) => {
  return (
    <div id='testimonials'>
      <div className=''>
        <div className='section-title text-center'>
          <h2>DISTRIBUIDORES AUTORIZADOS</h2>
        </div>
        <div className='row '>
          <div className="container">
            <table class="tabla" >
              <thead >
                <tr>
                  <th>NOMBRE</th>
                  <th>TELEFONOS</th>
                  <th>DIRECCION</th>
                  <th>EMAIL</th>
                  <th>ZONA</th>
                  <th>RRSS</th>
                </tr>
              </thead>
              {props.data
            ? props.data.map((d, i) => (
              <tbody key={`${d.name}-${i}`}>
                
                <tr>
                  <td>{d.name}</td>
                  <td>{d.tel}</td>
                  <td>{d.direction}</td>
                  <td>{d.email}</td>
                  <td>{d.ubicacion}</td>
                  <td >
                    <img src={face} alt="facebook" width="25px"/>
                    <img src={insta} alt="facebook" width="25px"/>
                    <img src={twit} alt="facebook" width="25px"/>                 
                  </td>
                </tr>
                <tr>
                  <td>{d.name}</td>
                  <td>{d.tel}</td>
                  <td>{d.direction}</td>
                  <td>{d.email}</td>
                  <td>{d.ubicacion}</td>
                  <td >
                  <img src={face} alt="facebook" width="25px"/>
                  <img src={insta} alt="facebook" width="25px"/>
                  <img src={twit} alt="facebook" width="25px"/>                 
                  </td>
                </tr>
                       
              </tbody>
                ))
            : 'loading'}        
            </table>
          </div>
        </div>    
      </div>
    </div>
  )
}
