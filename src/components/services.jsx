


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
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} >
                  {' '}

                    <h3 className=' text-danger'>{d.name}</h3>
                    <p>{d.text}</p>

                  </div>
                
              ))
            : 'loading'}
        </div>
        </div>
      </div>
    </div>
    </div>
    
   

       
    
  )
}
