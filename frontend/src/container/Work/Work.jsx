import React from 'react'
import Card from './components/WorkCard'
import {motion} from 'framer-motion';
import Cards from './components/Cards';

import './Work.scss'

const Work = () => {
  return (
    <section className='app__work'>
      <div className='app__work-content'>
        <div className='app__work-title'>        
          <h1>Projetos</h1>
          <p>Esses são alguns dos <span>projetos</span> que desenvolvi.</p>
        </div>
        <motion.div className='app__work-portfolio'
        whileInView={{y:[200,0]}}
        transition={{duration:0.85, ease:'easeOut'}}
        >
          {Cards.map((cards)=>{
            return(
            <Card
            title={cards.title}
            link={cards.link}
            img={cards.img}
            background={cards.background}
            githubLink={cards.githubLink}
            />
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Work