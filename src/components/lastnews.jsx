export const News = (props) => {
    return (
      <div>
  
      
      
      <div id='servicenew' className=''>
        <div className='container'>
          <div className='section-title text-center'>
            <h2>ÚLTIMAS NOTICIAS</h2>
            
          </div>
          <div className='row'>
            
              {props.data
                ? props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`}>
                     {' '}
                    <h3 className=' text-danger'>{d.titulo}</h3>
                    <p>{d.noticia}</p>
  
                    </div>
                  
                ))
                : 'Loading...'}
            </div>
          </div>
        </div>
  
      </div>
      
     
  
         
      
    )
  }
  