

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
                
                  <div key={`${d.IdProducto}-${i}`} className='col-md-3 col-sm-6 team hover visible'>
                    
                    <div className='thumbnail'>
                      <div className={d.Disponibilidad === '1' ? 'disponible': 'demanda' }>
                      
                      </div>
                      {' '}
                      <img src={d.Imagen} alt='...' className= 'team-img' />
                      <div className='caption'>
                        <h4>{d.Marca}</h4>
                       
                        <p>{d.Descripcion}</p>
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
