import React, {  useState } from "react";
import { useSpring, animated } from '@react-spring/web'

export const Header = (props) => {
  const [state, toggle] = useState(true)
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 2300 },
  })
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text '  >
              <div  onClick={() => toggle(!state)} >
              <animated.div style={{
                  opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
                  scale: x.to({
                    range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                  }),
                }}>
                
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
              </animated.div>
               </div>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Leer más
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
