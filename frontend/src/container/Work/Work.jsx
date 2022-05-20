import React from 'react'
import Card from './components/WorkCard'
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
        <div className='app__work-portfolio'>
          {Cards.map((cards, index)=>{
            return(
            <Card
            key = {cards.key}
            title={cards.title}
            link={cards.link}
            img={cards.img}
            background={cards.background}
            githubLink={cards.githubLink}
            />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Work