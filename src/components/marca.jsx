


export const Marcas = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
        <div className='col-md-6 col-md-offset-3 text-center title-marca'>
          <h2>Representación exclusiva para VENEZUELA</h2>
          
        </div>
        <div className="col-xs-12 col-md-5">
                      {" "}
                      <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
                      
                    </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              
              <p>Presente en más de 40 países, su gama incluye una gama completa de lubricantes de alta calidad: aceites de motor, de transmisión e hidráulicos, grasas y refrigerantes. <br />Los productos de la marca cubren diversos segmentos tanto de la Industria Automotriz como Industria en general. <br />Aceites y lubricantes producidos bajo acuerdos de licencia germano-suizos en estricta conformidad con los procesos de fabricación y normas técnicas aprobadas internacionalmente.</p>
              <div className="img-content">
                <img src="img/marca/iso-9001.png"  className="img-marca" alt="iso" />
                <img src="img/marca/favorit_cover.png"  className="img-marca" alt="iso" />
                <p>Certificado de Sistema de Gerencia de Calidad ISO 9001. Estándard de calidad registrado en Octubre 22, 2019 <br />Número de Registro Internacional emitido por la Organización Mundial de Propiedad Intelectual (WIPO) : <br />1 255 949. <br />Fecha de registro: Febrero 9, 2015</p>
              </div>
            </div>
          </div>
                    

        </div>

        <div className="row b-rojo">
        <div className='col-md-8 col-md-offset-2 text-center title-modelo'>
          <h2>Modelo funcional</h2>
          
        </div>

          {/* <img src="img/Engranajes.png" className="img-responsive" alt="" />{" "} */}
          <div className="col-md-3 col-sm-3  text-center text-funcional "> 
          
          <h3>Representante Exclusivo<br />para VENEZUELA</h3>
        
          </div>
         <div className="col-md-5 col-sm-4" >
        
            {" "}
            <img src="img/Engranajes.png" className="img-responsive" alt="" />{" "}
            
              
          </div>
          <div className="col-md-4 col-sm-3  ">
            
            

            <div className="text-center text-funcional">
              <h3 >Nuestro Modelo de Negocio ofrece una
                 <br />ventaja competitiva importante, su
                 <br />compra es directa con el fabricante.</h3>
              </div>
            
          </div>
          <div className="col-md-4 col-sm-2  ">
            
            <div className="text-funcional  ">
             <h3>Red de Distribuidores</h3>
              </div>
              </div>
              
        </div>
        <br />
        
        <br />

        
        <div className='col-md-8 col-md-offset-2 section-title text-center title-marca'>
          <h2 >ALTA TECNOLOGÍA ESTÁNDARES EUROPEOS</h2>
        </div>

          <div className="content-tecno col-md-4">
           
            <div className="text-center">
            <p >Certificado de Sistema de Gerencia de Calidad   ISO 9001. <br /> Estándard de calidad registrado en Octubre 22, 2019 <br /><a href="img/pdfs/Certificado_de _Sistema_de_Gerencia_ISO_9001.pdf" download="Certificado de Sistema de Gerencia ISO 9001">-DESCARGAR CERTIFICADO-</a></p>
            </div>
          </div>
          <div className=" content-tecno col-md-4 ">
            
            <div className="text-center">
            <p  >Número de Registro Internacional emitdo por la <br /> Organización Mundial de Propiedad Intelectual (WIPO) : <br />1 255 949. <br />Fecha de registro: Febrero 9, 2015 <br /><a href="img/pdfs/WIPO.pdf" download="WIPO">-DESCARGAR CERTIFICADO-</a></p>
            </div>
          </div>
          <div className=" content-tecno  col-md-4 ">
          
            <div className="text-center">
            <p >GOST,es un conjunto de estándares internacionales de la CEI <br />(Central European Initiative), desarrollado en la antigua URSS y mantenido por el Consejo Interestatal para la Estandartización, Meteorología y Certificación <br /><a href="img/pdfs/GOST.pdf" download="GOST">-DESCARGAR CERTIFICADO-</a></p>
            </div>
          </div>
        

        <div className="row">
        <div className='col-md-12  text-center title-marca'>
          <h2 >Cadena de producción básica</h2>
        </div>
        {props.data
              ? props.data.map((d, i) => (
        <div key={`${d.title}-${i}`} className="col-md-2 img-content " >
                
                
            <img src={d.Image}  className="img-cadena" alt={d.title} />
            <p className="text-center">{d.title}</p> 
            
            
          </div>
              ))
              : 'Loading...'}
        
        
        </div>
        
      </div>
    </div>
  );
}
