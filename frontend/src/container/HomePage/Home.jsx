import React from 'react'
import images from '../../constants/images';
import {motion} from 'framer-motion';

import './Home.scss'

const Home = () => {
  return (
    <section className='app__home'>
      <div className='app__home-config'>
          <motion.div 
          className='app__home-content'
          animate={{y:[50,0]}}
            transition={{duration:0.85, ease:'easeOut'}} 
          >
            <figure>
              <img src={images.luis} alt='Luis Carlos'></img>
            </figure>
            <motion.div 
            className='app__home-description'
            animate={{y:[50,0]}}
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

export default Home