import {  useState } from "react";
import { useSpring, animated } from "@react-spring/web";



// const calc = (x, y, rect) => [
//   -(y - rect.top - rect.height / 2) / 7,
//   (x - rect.left - rect.width / 2) / 7,
//   1
// ];

// const trans = (x, y, s) =>
//   `perspective(700px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;


export const Features = (props) => {
  const [state, toggle] = useState(true)
  const [{  opacity }] = useSpring(() => ({
    
    from: {  opacity: 0 },
    to: {  opacity: 1},
    config: { duration: 7000 },
  }))
  return (
    <div>
    <div id='features' >
      <div className='container'>
      <div  >
        <div className='col-md-10 col-md-offset-1 section-title text-center'onClick={() => toggle(!state)}>
            <animated.div  style={{  opacity }} viewBox="0 0 1278 446">
            
          <h2>FAVORIT - ¡MÁS DE 15 AÑOS DE PERFECTA CALIDAD!</h2>
        </animated.div>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-12'>
                  {' '}
                  <p className="texto">{d.titlep}</p>
                  <p className="texto">{d.textp}</p>
                  {/* <h3>{d.title}</h3>
                  <p className="texto">{d.text}</p>
                  <h3>{d.title}</h3>
                  <p className="texto">{d.text2}</p>
                  <h3>{d.title}</h3>
                  <p className="texto">{d.text3}</p>
                  <h3>{d.title}</h3>
                  <p className="texto">{d.text4}</p>
                  <h3>{d.title}</h3>
                  <p className="texto">{d.text5}</p>
                  <h3>{d.title}</h3>
                  <p className="texto">{d.text6}</p> */}
                  <div className='col-md-10 col-md-offset-1 section-title text-center text-danger'>
                  <p>{d.mensaje}</p>
          
                  </div>

                </div>
              ))
            : 'Loading...'}
        </div>
            
            </div>
      </div>
     
    </div>
    {/* <div className="rrss">
    
</div> */}
</div>
  )
};
// export const AboutHome= () => {
//   const [state, toggle] = useState(true)
//   const [{  opacity }] = useSpring(() => ({
    
//     from: {  opacity: 0 },
//     to: {  opacity: 1},
//     config: { duration: 7000 },
//   }))
  
//   const ref = useRef(null);
//   const [xys, set] = useState([0, 0, 1]);
  
//   const props = useSpring({ xys });

//   return (
//     <div id="about">
       
//       <div className="container">
//         <div className="row">
          
//           <div className="col-xs-12 col-md-6" ref={ref}>
//           <animated.div 
//             className="animated-img"
//             style={{ transform: props.xys.to(trans) }} 
//             onMouseLeave={() => set([0, 0, 1])} 
//             onMouseMove={(e) => { 
//               const rect = ref.current.getBoundingClientRect(); set(calc(e.clientX, e.clientY, rect));
//             }}
//           >
//             {" "}
//             <img src="img/about.jpg" className="img-responsive shadow" alt="" />{" "}
//           </animated.div>
//           </div>
//           <div className="col-xs-12 col-md-6">
//             <div className="about-text">
//             <div onClick={() => toggle(!state)}>
//             <animated.div  style={{  opacity }} viewBox="0 0 1278 446">

//             <h2>Sobre nosotros</h2>
//             </animated.div>
//             </div>
//               <p className="about-p">LLC Eurasia Lubricants: empresa conjunta, cuyo enfoque principal es la producción de aceites y lubricantes para motores. <br /> <br />
//                 La empresa fabrica productos bajo la marca «FAVORIT». La gama incluye más de 60 artículos: <br />
//                 - aceites de motor; <br /> 
//                 - grasa; <br />
//                 - aceites hidráulicos; <br />
//                 - aceites de lavado; <br />
//                 - aceites para engranajes; <br />
//                 - anticongelante y otros fluidos técnicos. <br /></p>
          
              
             
//             </div>
//           </div>
//         </div>
//       </div>
     
//     </div>
//   );
// };
