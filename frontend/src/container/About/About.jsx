import React from 'react'
import Button from './components/Button'

import './About.scss'

const About = () => {
  return (
    <section className='app__about'>
      <div className='app__about-content'>
        <h1>Formação e Tecnologias</h1>
        <div className='app__about-grid'>
          <div className='app__about-topics'>
            {['Sobre mim', 'Graduação', 'Tecnologias'].map((item)=>{
              return(<Button
              title={item}
              />)
            })}
          </div>
          <div className='app__about-text'>
            <h1>Text</h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About