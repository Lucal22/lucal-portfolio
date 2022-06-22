import React from 'react'
import { LinkedinLogo, Envelope } from "phosphor-react";
import { IoLogoGithub } from 'react-icons/io'


const SocialMedias = () => {
  return (
    <div className='app__form-social-medias'>
      <h2>Links para contato:</h2>
      <ul>
        <li>
          <Envelope
            size={32}
            weight="light"
          />
          <a href='mailto:luiscsilvestre22@gmail.com'>
            luiscsilvestre22@gmail.com</a>

        </li>
        <li>
          <LinkedinLogo
            size={32}
            weight="light"
          />
          <a
            href='https://www.linkedin.com/in/lu%C3%ADs-carlos-723a28165/'
            target='_blank'
            rel='noopener noreferrer'>
            https://www.linkedin.com/in/luis-carlos</a>
        </li>
        <li>
          <IoLogoGithub
            size={32}
          />
          <a href='https://github.com/Lucal22'
            target='_blank'
            rel='noopener noreferrer'>
            https://github.com/Lucal22</a>
        </li>
      </ul>
    </div>
  )
}

export default SocialMedias