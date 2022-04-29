

export const Services = (props) => {
  
  return (
    <div>

    
    <div id='services' className=' '>
      <div className='container '>
        <div className='section-title text-center '>
          <h2>Productos Nuevos</h2>
          
        </div>
        <div className='row'>
        <div className='portfolio-items'>
             
                
                  
                <div id='row'>
            {props.data
            
              ? props.data.map((d, i) => (
                
                  <div key={`${d.name}-${i}`} className='col-md-3 col-sm-6 team hover visible'>
                    
                    <div className='thumbnail'>
                      <div className={d.dispo === 'Disponible' ? 'disponible': 'demanda' }>
                      <span >{d.dispo}</span>
                      </div>
                      {' '}
                      <img src={d.img} alt='...' className= 'team-img' />
                      <div className='caption'>
                        <h4>{d.name}</h4>
                        <p className="price">PRECIO: {d.price}$</p>
                        <p>{d.job}</p>
                        <a href="/catalogo" className='btn btn-compartir '>MAS INFORMACION</a>
                      </div>
                    </div>
                    
                  </div>
                ))
              : 'loading'}
          </div>
                
        </div>
        </div>
      </div>
    </div>
    </div> 
  )
}
