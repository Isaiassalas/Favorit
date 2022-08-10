import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
// import { AboutHome } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Contact } from "./components/contact";
import { Team } from "./components/Team";
import { Marcas } from "./components/marca";
import { Footer } from "./components/footer";
import { Blog } from "./components/blog";
import { Agregarproduc } from "./components/Agregarproduc";
import JsonData from "./data/data.json";
import JsonDis from "./data/distribuidores.json";
import JsonProduct from "./data/productos.json";
import SmoothScroll from "smooth-scroll";
import Slider from "./components/slider/Slider";
import slides from "./data/slides";
import categoriaMarca from "./data/categoria-marca";
import SliderMarca from "./components/slider/SliderMarca";

import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Index = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  const [productos, setProductos] = useState({});
  useEffect(() => {
    setProductos(JsonProduct);
  }, []);

  return (
    <div>
       {/* <Navigation />*/}
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <Slider slides={slides} />
      <Services data={landingPageData.Services} productos={productos.rows} />
      <Footer data={landingPageData.Footer} />
    </div>
  );
};

const Bloger = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      {/* <Navigation />*/}
      <Blog data={landingPageData.Blog} />
      <Footer data={landingPageData.Footer} />
    </div>
  );
};

const Abouts = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      {/* <Navigation /> */}

      <About data={landingPageData.About} />
      <Footer data={landingPageData.Footer} />
    </div>
  );
};

const Marca = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      {/* <Navigation /> */}
      <Marcas data={landingPageData.Marca} />
      <SliderMarca slides={categoriaMarca} />
      <Footer data={landingPageData.Footer} />
    </div>
  );
};

const Catalogo = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonProduct);
  }, []);
  // const [categorias, setCategorias] = useState({});
  // useEffect(() => {
  //   setCategorias( JsonCategoria);
  // }, []);
  // const [subcategorias, setSubcategorias] = useState({});
  // useEffect(() => {
  //   setSubcategorias( JsonSubcate);
  // }, []);

  return (
    <div>
      {/* <Navigation /> */}
      <Team productos={landingPageData.rows} />
      <Footer data={landingPageData.Footer} />
    </div>
  );
};

const Contactanos = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonDis);
  }, []);

  return (
    <div>
      {/* <Navigation /> */}
      <Contact distribuidores={landingPageData.Contact} />
      <Footer data={landingPageData.Footer} />
    </div>
  );
};

const Galeria = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      {/* <Navigation /> */}
      <Gallery data={landingPageData.Gallery} />
      <Footer data={landingPageData.Footer} />
    </div>
  );
};
const Agregar = () => {
  

  return (
    <div>
      {/* <Navigation /> */}
      <Agregarproduc/>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Navigation />
      <Route path="/" exact component={Index} />
      <Route path="/blog" component={Bloger} />
      <Route path="/sobre-la-empresa" component={Abouts} />
      <Route path="/sobre-la-marca" component={Marca} />
      <Route path="/catalogo" component={Catalogo} />
      <Route path="/distribuidores" component={Contactanos} />
      <Route path="/galeria" component={Galeria} />
      <Route path="/agregarproducto" component={Agregar} />
    </Router>
  );
}

export default App;
