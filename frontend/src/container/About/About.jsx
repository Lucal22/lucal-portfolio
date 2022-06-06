import React, { useState } from 'react';
import Button from './components/Button';
import { motion } from 'framer-motion';
import images from '../../constants/images'
import { techIcons, techIconsRight } from './components/TechIcons';

import './About.scss'

const About = () => {
  const [about, setAbout] = useState(true)
  const [formation, setFormation] = useState(false)
  const [tech, setTech] = useState(false)

  return (
    <section id='Sobre' className='app__about'>
      <div className='app__about-content'>
        <div className='app__about-grid'>
          <div className='app__about-topics'>
            <Button
              title='Sobre mim'
              onClick={()=>setAbout(!about)}
              click={about}
            />
            <Button
              title='Graduação'
              onClick={() => setFormation(!formation)}
              click={formation}
            />
            <Button
              title='Tecnologias'
              onClick={() => setTech(!tech)}
              click={tech}
            />
          </div>

          <div className='app__about-text'>
            <motion.div
              animate={{ y: about ? [50, 0] : [0, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
              style={about /*|| !formation & !tech*/? { display: 'block' } : {display: 'none'}}
              className='app__about-card'>
            <div className='app__about-text-content'>
              <p>
                Meu nome é Luís Carlos, tenho 25 anos e um grande interesse por <span>tecnologia.</span>
              </p>
            </div>
            <div className='app__about-text-content'>
              <p>
                Alguns dos meus hobbies são assistir séries e filmes, ir ao cinema, jogos online e pelo último ano está sendo programar.
              </p>
              <div>
                <img src={images.horde} alt='Símbolo da horda' />
              </div>
            </div>
            <div className='app__about-text-content'>
              <div>
                <img src={images.minas} alt='Mapa de Minas Gerais' />
              </div>
              <p>
                Sou de Conselheiro Lafaiete, Minas Gerais e no momento estou a procura de uma oportunidade como <span>desenvolvedor web.</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: formation ? [50, 0] : [0, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}

            style={formation ? { display: 'block' } : { display: 'none' }}
            className='app__about-card'>
            <div className='app__about-text-content'>
              <p>
                Minha primeira formação profissional foi um curso <span>técnico em eletrônica</span> e foi onde eu tive o primeiro contato com programação, onde utilizei arduino para simular uma <span>automação residencial</span> para o projeto de conclusão de curso.
              </p>
              <div>
                <img src={images.arduino} alt='Arduino' />
              </div>

            </div>
            <div className='app__about-text-content'>
              <div>
                <img src={images.engeletrica} alt='Engenharia elétrica' />
              </div>
              <p>
                Após concluir o curso técnico iniciei o curso de <span>Engenharia Elétrica,</span> que me mostrou outras maneiras de se utilizar programação para simulações e cálculos com <span>Matlab e Python.</span>
              </p>
            </div>
            <div className='app__about-text-content'>
              <p>
                Fiz <span>estágio</span> na engenharia CAPEX de uma multinacional e meses após o término, trabalhei como <span>auxiliar de projetos elétricos</span> em uma empresa de desenvolvimento de projetos industriais.
              </p>
              <div>
                <img src={images.autocad} alt='Engenharia elétrica' />
              </div>
            </div>

          </motion.div>

          <motion.div
            animate={{ y: tech ? [50, 0] : [0, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}

            style={tech ? { display: 'block' } : { display: 'none' }}
            className='app__about-card'>
            <div className='app__about-text-content'>
              <div className='app__about-tech-img app__about-tech-img-grid'>
                {techIcons.map((icons, index) => {
                  return <img key={index} src={icons.image} alt={icons.alt} />
                })}
              </div>
              <p>
                Em maio de 2021 decidi aprender mais sobre programação e então comecei os meus estudos primeiramente com <span>HTML, CSS e JavaScript,</span> através de cursos, documentação e praticando.
              </p>
            </div>
            <div className='app__about-text-content'>

              <p>
                E nos últimos meses tenho estudado e desenvolvido projetos utilizando frameworks como <span>React.js</span> para o frontend e <span>Node.js</span> para backend além de também procurar outras alternativas para estilização como <span>Tailwind CSS, Bootstrap e SASS.</span>
              </p>
              <div className='app__about-tech-img app__about-tech-img-grid'>
                {techIconsRight.map((icons, index) => {
                  return <img key={index} src={icons.image} alt={icons.alt} />
                })}
              </div>

            </div>


          </motion.div>

        </div>
      </div>
    </div>
    </section >
  )
}

export default About