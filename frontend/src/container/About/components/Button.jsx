import React from 'react'

const Button = (props) => {
  
  return (
    <div
      className={props.click?'app__about-button-true':'app__about-button'}
      onClick={props.onClick}
      >
      <p>{props.title}</p>
      <div className='app__about-arrow-div'>
        <span className='app__about-arrow'></span>
      </div>
    </div>
  )
}

export default Button