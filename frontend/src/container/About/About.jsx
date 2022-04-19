import React from 'react'
import images from '../../constants/images';

import './About.scss'

const About = () => {
  return (
    <section className='app__about'>
      <div className='app__about-config'>
          <div className='app__about-content'>
            <figure>
              <img src={images.luis} alt='Luis Carlos'></img>
            </figure>
            <div className='app__about-description'>
              <h1>Luís Carlos Santos Silvestre</h1>
              <h2>Engenheiro Eletricista e Desenvolvedor Web Front-end</h2>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About