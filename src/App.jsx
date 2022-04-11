import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { AboutHome } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Contact } from "./components/contact";
import { Team } from "./components/Team";
import { Noticias } from "./components/noticias";
import { News } from "./components/lastnews";
import { Footer } from "./components/footer";
import  {Blog}  from "./components/blog";
import  Construc  from "./components/construc";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { Navconstruc } from "./components/navconstruc";

import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Construction = () => {
  const [landingPageData, ] = useState({});
  

  return (
    
    <div>
        <Navconstruc /> 
      
      <Construc data={landingPageData.Construc}/>
      
     
    </div>
  );
};

const Index = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    
    <div>
      
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <AboutHome data={landingPageData.Features} />
      
      <Services data={landingPageData.Services} />
      <News data={landingPageData.News} />
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
    setLandingPageData(JsonData);
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
      <Team data={landingPageData.Team} />
      <Footer data={landingPageData.Footer} />
    </div>
  );
};


const Noticia = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      {/* <Navigation /> */}
      {/* <Header data={landingPageData.Header} /> */}
      {/* <Features data={landingPageData.Features} /> */}
      <Noticias data={landingPageData.Noticias} />
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
      <Gallery data={landingPageData.Gallery}/> 
      {/* <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} /> */}
     <Footer data={landingPageData.Footer} />
    </div>
  );
};

const Contactanos = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      {/* <Navigation /> */}
      {/* <Header data={landingPageData.Header} /> */}
      {/* <Features data={landingPageData.Features} /> */}
      {/* <About data={landingPageData.About} /> */}
      {/* <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery}/> */}
      <Contact data={landingPageData.Contact} />
      
      {/* <Team data={landingPageData.Team} /> */}
     
     <Footer data={landingPageData.Footer} />
    </div>
  );
};

function App() {
  return (
    <Router>

        <Navigation />

        <Route path="/" exact component={Construction} />
        <Route path="/blog" component={Bloger} />
        <Route path="/inicio" component={Index} />
        <Route path="/about" component={Abouts} />
        <Route path="/catalogo" component={Catalogo} />
        <Route path="/galeria" component={Galeria}/>
        <Route path="/noticias" component={Noticia} />
        <Route path="/contactanos" component={Contactanos} />
      
    </Router>
  );
  }

export default App;
