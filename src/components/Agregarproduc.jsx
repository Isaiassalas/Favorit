import axios from "axios";
import { useEffect, useState } from "react";


const url = "http://localhost:8000/api";
export const Agregarproduc = (props) => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const response = await axios.get(`${url}/products`);
    setProducts(response.data);
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div id="agregarproduc">
      <div className='section-title text-center'>
          <h2>Productos Favorit</h2>
        </div>
        <div className='row '>
          <div className="container">
            <div className="nuevo-pro">
              <a href="">Agregar nuevo producto</a>
            </div>
            <table className="tabla table-responsive" >
              <thead >
                <tr>
                  <th>NOMBRE</th>
                  <th>CODIGO</th>
                  <th>ACCIONES</th>
                </tr>
              </thead>
              <tbody >
     
        {products
          ? products.map((p, i) => 
          <tr key={`${p.Nombre}-${i}`}>
             <td>{p.Nombre}</td>
                 
                  <td>{p.CodigoProducto}</td>
                  <td > <a href="">Editar</a>
                                   
                  </td>
                </tr>
          )
          : "loading"}
          </tbody>
          </table>
          </div>
      </div>
    
    </div>
  );
};
