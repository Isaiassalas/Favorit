import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Spring, config, animated} from "react-spring";

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
    <Spring 
    from={{opacity: 0, marginTop: -200}}
    to={{ opacity: 1, marginTop: 0 }}
    
    config={config.molasses	}
    >
      {styles => (
              <animated.div style={styles}>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className=' page-scroll ' href='#page-top'>
          <img src="img/logo.png" className=""   alt="" />
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        > 
        
            <ul className='nav navbar-nav navbar-right'>
              <li>
              <Link to="/" className="page-scroll">Inicio</Link>
              
              </li>
              <li>
              <Link to="/about" className="page-scroll">Sobre la empresa</Link>
              </li>
              <li>
              <Link to="/catalogo" className="page-scroll">Catalogo</Link>
              </li>
              <li>
              <Link to="/galeria" className="page-scroll">Galeria</Link>
              </li>
              <li>
              <Link to="/noticias" className="page-scroll">Noticias</Link>
              </li>
              
              <li>
              <Link to="/contactanos" className="page-scroll">Contactanos</Link>
              </li>
            </ul>
          
        </div>
      </div>
        </animated.div>
      )}
    
    </Spring>
    </nav>
  )
}
