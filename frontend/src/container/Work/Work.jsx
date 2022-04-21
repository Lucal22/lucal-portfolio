import React from 'react'
import Card from './props/WorkCard'
import images from '../../constants/images'


import './Work.scss'

const Work = () => {
  return (
    <section className='app__work'>
      <div className='app__work-content'>
        <div className='app__work-title'>        
          <h1>Projetos</h1>
          <p>Esses são alguns dos projetos que desenvolvi.</p>
        </div>
        <div className='app__work-portfolio'>
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
        </div>
      </div>
    </section>
  )
}

export default Work