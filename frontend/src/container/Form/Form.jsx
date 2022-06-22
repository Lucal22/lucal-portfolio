import React from 'react'
import FormField from './components/FormFields'
import SocialMedias from './components/SocialMedias'

import './Form.scss'

const Form = () => {

  return (
    <section id='Contato' className='app__form'>

      <div className='app__form-content'>
        <div className='app__form-title'>
          <h1>CONTATO</h1>
        </div>
        <div className='app__form-grid'>
          <SocialMedias />
          <div className='app__form-fields-settings'>
            <FormField
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Form