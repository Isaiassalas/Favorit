export const Features = (props) => {
  return (
    <div id='features' >
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title text-center'>
          <h2>FAVORIT - MORE THAN 15 YEARS OF PERFECT QUALITY!</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-12'>
                  {' '}
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                  <p>{d.text}</p>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                  <h3>{d.title}</h3>
                  <p>{d.text2}</p>
                  <h3>{d.title}</h3>
                  <p>{d.text2}</p>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
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
              <h2>About Us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
