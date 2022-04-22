import React from 'react'
import Card from './props/WorkCard'
import images from '../../constants/images'
import {motion} from 'framer-motion';

import './Work.scss'

const Work = () => {
  return (
    <section className='app__work'>
      <div className='app__work-content'>
        <div 
        className='app__work-title'

        >        
          <h1>Projetos</h1>
          <p>Esses são alguns dos <span>projetos</span> que desenvolvi.</p>
        </div>
        <motion.div className='app__work-portfolio'
        whileInView={{y:[200,0]}}
        transition={{duration:0.85, ease:'easeOut'}}
        >
          <Card
            title='Portfolio'
            link='portfolio.com.br'
            img={[images.html, images.css, images.react]}
            background={images.portfolio}
            githubLink='#'
          />
          <Card
            title='Keeper App'
            link='KeeperApp.com.br'
            img={[images.html, images.css, images.react]}
            background={images.keeper}
            githubLink='https://github.com/Lucal22/Keeper-app'
          />
          <Card
            title='Keeper App'
            link='KeeperApp.com.br'
            img={[images.html, images.css, images.react]}
            background={images.keeper}
            githubLink='https://github.com/Lucal22/Keeper-app'
          />
          <Card
            title='Keeper App'
            link='KeeperApp.com.br'
            img={[images.html, images.css, images.react]}
            background={images.keeper}
            githubLink='https://github.com/Lucal22/Keeper-app'
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Work