import React from 'react'
import images from '../../constants/images';
import {motion} from 'framer-motion';

import './About.scss'

const About = () => {
  return (
    <section className='app__about'>
      <div className='app__about-config'>
          <motion.div 
          className='app__about-content'
          whileInView={{y:[50,0]}}
            transition={{duration:0.85, ease:'easeOut'}} 
          >
            <figure>
              <img src={images.luis} alt='Luis Carlos'></img>
            </figure>
            <motion.div 
            className='app__about-description'
            whileInView={{y:[50,0]}}
            transition={{duration:0.85, ease:'easeOut'}}    
            >
              <h1>Luís Carlos Santos Silvestre</h1>
              <h2>Engenheiro Eletricista e Desenvolvedor Web Front-end</h2>
            </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About