import React from 'react'

import './Footer.scss'

const Footer = () => {

  const today = new Date();
  const year = today.getFullYear();
  return (
    <section className='app__footer'>
      <div className='app__footer-content'>
        <div className='app__footer-copyright'>
          <p>Copyright © {year}</p>
          <p>Feito por Lucal. :)</p>
        </div>
      </div>

    </section>
  )
}

export default Footer