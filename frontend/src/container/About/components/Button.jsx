import React from 'react'

const Button = (props) => {
  return (
            <div className='app__about-button'>
              <p>{props.title}</p>
              <div className='app__about-arrow-div'>
              <span className='app__about-arrow'></span>
              </div>
            </div>
  )
}

export default Button