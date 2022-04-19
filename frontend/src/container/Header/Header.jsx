import React, { useState } from 'react';
import {motion} from 'framer-motion';
import {HiMenuAlt4, HiX} from 'react-icons/hi';

import './Header.scss'


const Header = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='app__navbar'>
      <ul className='app__navbar-links'>
        {['Home', 'Projetos', 'Formação', 'contato'].map((item)=>(
          <li className='app__flex p-text' key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={()=>setToggle(true)}/>

        {
          toggle && (
            <motion.div
            whileInView={{x:[300,0]}}
            transition={{duration:0.85, ease:'easeOut'}}
            >
              <HiX onClick={()=>setToggle(false)}/>
              <ul>
              {['home', 'Projetos', 'Habilidades', 'contato'].map((item)=>(
          <li key={item}>
            <a href={`#${item}`}  onClick={()=>setToggle(false)}>{item}</a>
          </li>
        ))}
        </ul>
            </motion.div>
          )
        }
      </div>
    </nav>
  )

}

export default Header