
import { useRef, useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";




const calc = (x, y, rect) => [
  -(y - rect.top - rect.height / 2) / 7,
  (x - rect.left - rect.width / 2) / 7,
  1
];
const AnimFeTurbulence = animated('feTurbulence');
const AnimFeDisplacementMap = animated('feDisplacementMap');
const trans = (x, y, s) =>
  `perspective(700px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;


export const Features = (props) => {
  const [open, toggle] = useState(false)
  const [{  opacity }] = useSpring(() => ({
    reverse: open,
    from: {  opacity: 0, },
    to: {  opacity: 1,},
    config: { duration: 3500 },
  }))
  return (
    <div id='features' >
      <div className='container'>
      <div  onClick={() => toggle(!open)}>
            <animated.div  style={{  opacity }} viewBox="0 0 1278 446">
            
        <div className='col-md-10 col-md-offset-1 section-title text-center'>
          <h2>FAVORIT - ¡MÁS DE 15 AÑOS DE PERFECTA CALIDAD!</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-12'>
                  {' '}
                  <p>{d.titlep}</p>
                  <p>{d.textp}</p>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                  <h3>{d.title}</h3>
                  <p>{d.text2}</p>
                  <h3>{d.title}</h3>
                  <p>{d.text3}</p>
                  <h3>{d.title}</h3>
                  <p>{d.text4}</p>
                  <h3>{d.title}</h3>
                  <p>{d.text5}</p>
                  <h3>{d.title}</h3>
                  <p>{d.text6}</p>
                  <div className='col-md-10 col-md-offset-1 section-title text-center text-danger'>
                  <p>{d.mensaje}</p>
          
                  </div>

                </div>
              ))
            : 'Loading...'}
        </div>
            </animated.div>
            </div>
      </div>
    </div>
  )
}
export const AboutHome= () => {

  
  const ref = useRef(null);
  const [xys, set] = useState([0, 0, 1]);
  
  const props = useSpring({ xys });

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          
          <div className="col-xs-12 col-md-6" ref={ref}>
          <animated.div 
            className="animated-img"
            style={{ transform: props.xys.to(trans) }} 
            onMouseLeave={() => set([0, 0, 1])} 
            onMouseMove={(e) => { 
              const rect = ref.current.getBoundingClientRect(); set(calc(e.clientX, e.clientY, rect));
            }}
          >
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </animated.div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
            
            <h2>Sobre nosotros</h2>
              <p className="about-p">LLC Eurasia Lubricants: empresa conjunta, cuyo enfoque principal es la producción de aceites y lubricantes para motores. <br /> <br />
                La empresa fabrica productos bajo la marca «FAVORIT». La gama incluye más de 60 artículos: <br />
                - aceites de motor; <br /> 
                - grasa; <br />
                - aceites hidráulicos; <br />
                - aceites de lavado; <br />
                - aceites para engranajes; <br />
                - anticongelante y otros fluidos técnicos. <br /></p>
          
              
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
