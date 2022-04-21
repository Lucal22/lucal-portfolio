import React from 'react'
import Card from './props/WorkCard'


import './Work.scss'

const Work = () => {
  return (
    <section className='app__work'>
      <div className='app__work-content'>
        <Card />
      </div>
    </section>
  )
}

export default Work