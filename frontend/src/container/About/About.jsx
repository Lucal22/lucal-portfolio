import React from 'react'
import {motion} from 'framer-motion';
import images from '../../constants/images';

import './About.scss'

const About = () => {
  return (
    <div className='app__about'>
      <div className='app__about-description'>
      <motion.div
      whileInView={{x:[0,300]}}
      transition={{duration:0.85, ease:'easeOut'}}
      >
        <h1>Bem vindo!</h1>
        <h2>Me chamo Luís Carlos e esse é meu portifólio.</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Aspernatur ex delectus suscipit inventore excepturi, et voluptas debitis est! 
          Fugit nihil cupiditate illum, reprehenderit ipsa consequatur quo animi consectetur 
          perferendis modi!</p>

      </motion.div>
      </div>
      
      <div className='app__about-img'>
         <img src={images.luis} alt='Luis Carlos'></img>
      </div>
    </div>
  )
}

export default About