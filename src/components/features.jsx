

export const Features = (props) => {
  return (
    <div id='features' >
      <div className='container'>
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
      </div>
    </div>
  )
}
export const AboutHome= (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
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
              {/* <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
