


export const Contact = (props) => {
  return (
    <div id='testimonials'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>Como Puedes Contactarnos </h2>
        </div>
        <div className='row col-md-6'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`}>
                  <div className='testimonial'>
                    
                    <div className='testimonial-content'>
                      <div className='testimonial-meta'> - {d.name} </div>
                      <p>{d.text}</p>
                      <div className="testimonial-meta">{d.subname}</div>
                      <p>{d.tel}</p>
                      <p>{d.email}</p>
                      <div className="testimonial-meta">{d.info}</div>
                      <p>{d.ubicacion}</p>
                      <iframe src={d.imgubi} width="450" height="350" allowfullscreen="" loading="lazy"></iframe>
                      <p>{d.phone}</p>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
           
          </div>
              <div className='row col-md-6'>
                 
                        <div >
                          <div className='testimonial'>
                            
                            <div className='testimonial-content'>
                            <div className='testimonial-meta'> - Distribuidores </div>
                              <div className='testimonial-meta'> Distribuidor en la República de Bielorrusia </div>
                              <p>tel: +37529 3730366</p> 
                                <p>tel: +37533 3187696</p>
                                <p>e-mail: denis@oem.by</p>
                              <div className="testimonial-meta"> Distribuidor en la Federación de Rusia</div>
                              <p>JSC "NLK" Moscow st. Saltykovskaya d8, office 302 A ind. 111673</p>
                              <p>tel: +7(499) 288-26-48</p>
                              <p>e-mail: russia@mannol.de</p>
                              <div className='testimonial-meta'> Distribuidor en Bulgaria </div>
                              <p>Bulgaria, 4000, Plovdiv city,Central region Lyuben Karavelov str. Number 9, 2 floor, office 10 Krasimir Kotev</p>
                              <p>тел: 359882352280</p>
                              <p>e-mail: discommerce@abv.bg</p>
                                <div className='testimonial-meta'> Distribuidor en USA </div>
                              <p>6760 15th Street East, unit C, Sarasota, FL34243</p>
                              <p>cell phone: +1(941)-726-2063</p>
                              <p> e-mail: mannol.usa.nick@gmail.com</p>
                                <div className='testimonial-meta'> Distribuidor en EAU </div>
                              <p>UAE, Sharjah, Industrial Area 18 behind Al Maliha Street Showroom No: 11
                              P.O. Box: 34713</p>
                              <p>Web: www.mannolgcc.com</p>
                              <p>Email: info@mannolgcc.com</p>
                              <p>Tel mob: +971 52 749 3777</p>
                              <p>WhatsApp: +971 52 955 4777
                              Tel: +971 6 533 98 52</p>
                            </div>
                          </div>
                        </div>
              </div>
    </div>
    </div>
  )
}
