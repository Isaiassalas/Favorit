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
// import { News } from "./components/lastnews";
import { Footer } from "./components/footer";
import  { Blog }  from "./components/blog";
import JsonData from "./data/data.json";
import JsonDis from "./data/distribuidores.json";
import JsonProduct from "./data/productos.json";
import JsonCategoria from "./data/categorias.json";
import JsonSubcate from "./data/subcategorias.json";
import SmoothScroll from "smooth-scroll";
import Slider from './components/slider/Slider';
import slides from './data/slides';
import categoriaMarca from './data/categoria-marca';
import SliderMarca from './components/slider/SliderMarca';

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
    setProductos( JsonProduct);
  }, []);
  

  return (
    
    <div>
      
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      {/* <AboutHome data={landingPageData.Features} /> */}
      <Slider slides={slides} />
      <Services data={landingPageData.Services} productos={productos.rows} />
      {/* <News data={landingPageData.News} /> */}
      {/* <Blog data={landingPageData.Blog}/> */}
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
      {/* <Navigation />
      <Header data={landingPageData.Header} /> */}
      <Blog data={landingPageData.Blog} />
      {/* <AboutHome data={landingPageData.Features} />
      <Services data={landingPageData.Services} /> */}
      {/* <Gallery data={landingPageData.Gallery}/> */}
      {/* <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} /> */}
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
      {/* <Header data={landingPageData.Header} /> */}
      {/* <Features data={landingPageData.Features} /> */}
      <About data={landingPageData.About} />
      {/* <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery}/> */}
      {/* <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} /> */}
      <Footer data={landingPageData.Footer} />
    </div>
  );
};

const Catalogo = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData( JsonProduct);
  }, []);
  const [categorias, setCategorias] = useState({});
  useEffect(() => {
    setCategorias( JsonCategoria);
  }, []);
  const [subcategorias, setSubcategorias] = useState({});
  useEffect(() => {
    setSubcategorias( JsonSubcate);
  }, []);

  return (
    <div>
      {/* <Navigation /> */}
      {/* <Header data={landingPageData.Header} /> */}
      {/* <Features data={landingPageData.Features} /> */}
      {/* <About data={landingPageData.About} /> */}
      {/* <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery}/> */}
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      <Team categorias={categorias.rows} subcategorias={subcategorias.rows} productos={landingPageData.rows}  />
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
      {/* <Header data={landingPageData.Header} /> */}
      {/* <Features data={landingPageData.Features} /> */}
      <Marcas data={landingPageData.Marca} />
      <SliderMarca slides={categoriaMarca} />
      {/* <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery}/> */}
      {/* <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} /> */}
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
      {/* <Header data={landingPageData.Header} /> */}
      {/* <Features data={landingPageData.Features} /> */}
      {/* <Noticias data={landingPageData.Noticias} /> */}
      {/* {/* <Services data={landingPageData.Services} /> */}
      {/* <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} /> */}
      <Gallery data={landingPageData.Gallery}/> 
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
      {/* <Header data={landingPageData.Header} /> */}
      {/* <Features data={landingPageData.Features} /> */}
      {/* <About data={landingPageData.About} /> */}
      {/* <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery}/> */}
      
      {/* <Team data={landingPageData.Team} /> */}
      <Contact distribuidores={landingPageData.Contact} />
     <Footer data={landingPageData.Footer} />
    </div>
  );
};

function App() {
  return (
    <Router>

        <Navigation />

        <Route path="/" exact component={Index} />
        <Route path="/blog" component={Bloger} />
        
        <Route path="/about" component={Abouts} />
        <Route path="/catalogo" component={Catalogo} />
        <Route path="/galeria" component={Galeria}/>
        <Route path="/sobre-la-marca" component={Marca} />
        <Route path="/contactanos" component={Contactanos} />
      
    </Router>
  );
  }

export default App;
