import axios from "axios";
import { useEffect, useState } from "react";
import flecha from "../img/catalogo/abajo.png";
import Modal from "./modal/Modal";

const url = "http://localhost:8000";
export const Team = (props) => {
  const [opcioncategorias, setOpcionCategorias] = useState("todos");
  const [opcionsubcategoria, setOpcionSubcategoria] = useState("todos");
  const [dropdown, setDropdown] = useState(false);
  const [subdropdown, setSubdropdown] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [informacion, setInformacion] = useState();
  const [products, setProducts] = useState([]);
  const [categoria, setCategoria] = useState([]);
  const [subcategoria, setSubcategoria] = useState([]);

  const getAllProducts = async () => {
    const response = await axios.get(`${url}/products`);
    setProducts(response.data);
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllCategori = async () => {
    const response = await axios.get(`${url}/categorias`);
    setCategoria(response.data);
  };
  useEffect(() => {
    getAllCategori();
  }, []);

  const getAllSubcategori = async () => {
    const response = await axios.get(`${url}/subcategorias`);
    setSubcategoria(response.data);
  };
  useEffect(() => {
    getAllSubcategori();
  }, []);

  const abrirCerrarDropdow = () => {
    setDropdown(!dropdown);
  };
  const abrirCerrarSubdropdow = () => {
    setSubdropdown(!subdropdown);
  };
  const handlCategorias = function (e) {
    const opcion = e.target.id;

    setOpcionCategorias(opcion);
    setOpcionSubcategoria("todos");

    setDropdown(!dropdown);
  };
  const handlSubcategorias = function (e) {
    const opcionsub = e.target.id;

    setOpcionSubcategoria(opcionsub);

    setSubdropdown(!subdropdown);
  };

  const toggle = function (e) {
    const info = e.target.id;

    setInformacion(info);

    setModalInsertar(!modalInsertar);
  };

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-9 col-md-offset-2 section-title">
          <h2>Catalogo de productos</h2>
          <div className="col-md-3 col-md-offset-10">
            <div className="filter">
              <h5>FILTRAR</h5>
              <div className="dropdown">
                <button onClick={abrirCerrarDropdow} className="dropbtn">
                  CATEGORIAS <img src={flecha} width="13px" />
                </button>
                <div
                  className={
                    dropdown === true ? "dropdown-active" : "dropdown-content"
                  }
                >
                  <a id="todos" onClick={handlCategorias} href="#">
                    TODOS
                  </a>
                  {categoria
                    ? categoria.map((c, i) => (
                        <a
                          key={`${c.Nombre}-${i}`}
                          id={c.IdCategoria}
                          onClick={handlCategorias}
                          href="#top"
                        >
                          {c.Nombre}
                        </a>
                      ))
                    : "loading"}
                </div>
              </div>
              <div className="dropdown">
                <button onClick={abrirCerrarSubdropdow} className="dropbtn">
                  SUBCATEGORIAS <img src={flecha} width="13px" />
                </button>
                <div
                  className={
                    subdropdown === true
                      ? "dropdown-active"
                      : "dropdown-content"
                  }
                >
                  {subcategoria
                    ? subcategoria.map((s, i) => (
                        <a
                          key={`${s.Nombre}-${i}`}
                          id={s.id}
                          onClick={handlSubcategorias}
                          href="#top"
                        >
                          {s.name}
                        </a>
                      ))
                    : "loading"}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="row ">
          {products
            ? products.map((p, i) => (
                <div
                  key={`${p.Nombre}-${i}`}
                  className={`col-md-2 col-sm-5 hover ${
                    opcioncategorias === p.IdCategoria ||
                    opcioncategorias === "todos"
                      ? "visible"
                      : "ocultar"
                  } ${
                    opcionsubcategoria === p.IdSubCategoria
                      ? "visible"
                      : "ocultar"
                  } `}
                >
                  <div
                    id={p.CodigoProducto}
                    className={`thumbnail ${
                      opcionsubcategoria === p.IdSubCategoria ||
                      opcionsubcategoria === "todos"
                        ? "visiblesub"
                        : "ocultar"
                    } `}
                  >
                    <div
                      className={
                        p.Disponibilidad === "1" ? "disponible" : "demanda"
                      }
                    >
                      {/* <img src={disponible} width="35px" />  */}
                    </div>{" "}
                    <img src={`img/team/${p.Imagen}`} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{p.Marca}</h4>

                      <p className="des-producto">{p.Descripcion}</p>
                      <a
                        id={p.IdProducto}
                        onClick={toggle}
                        className="btn btn-compartir "
                      >
                        MAS INFORMACION
                      </a>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>

      {products
        ? products.map((p, i) => (
            <div>
              {informacion === p.IdProducto && (
                <Modal
                  key={`${p.Nombre}-${i}`}
                  informacion={informacion}
                  isOpen={modalInsertar}
                  toggle={toggle}
                >
                  <h5>Producto</h5>
                  <img className="img-modal" src={p.Imagen} alt="producto" />
                  <p>{p.Nombre}</p>
                  <h4>
                    Marca: <br /> {p.Marca}
                  </h4>{" "}
                  <br />
                  <h4>
                    Fecha: <br /> {p.FEchaCreacion}
                  </h4>{" "}
                  <br />
                  <h4>Descripción:</h4>
                  <p className="p-modal">{p.Descripcion}</p> <br />
                  <h4>Codigo: "{p.CodigoProducto}"</h4>
                  <a
                    href={`https://wa.me/+584124022069?text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20producto%20${p.Nombre}%20Codigo:${p.CodigoProducto}`}
                    className="btn btn-compartir "
                  >
                    CONTACTAR
                  </a>
                  <a className="btn btn-compartir" onClick={toggle}>
                    CERRAR
                  </a>
                </Modal>
              )}
            </div>
          ))
        : "loading"}
    </div>
  );
};
