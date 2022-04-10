import React from "react";



export const Navconstruc = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
    
      <div className='container'>
        <div className='navbar-header'>
          {/* <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button> */}
          <a className=' page-scroll ' href='#page-top'>
          <img src="img/logo.png" className=""   alt="" />
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        > 
        
            <ul className='nav navbar-nav navbar-right'>
            
            </ul>
          
        </div>
      </div>
        
    </nav>
  )
}
