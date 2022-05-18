import React, { useState } from 'react';
import Button from './components/Button';
import { motion } from 'framer-motion';
import images from '../../constants/images'



import './About.scss'

const About = () => {
  const [about, setAbout] = useState(false)
  const [formation, setFormation] = useState(false)
  const [tech, setTech] = useState(false)

  function showAbout() {
    setAbout(true);
  }
  function hideAbout() {
    setAbout(false);
  }
  function showFormation() {
    setFormation(true);
  }
  function hideFormation() {
    setFormation(false);
  }
  function showTech() {
    setTech(true);
  }
  function hideTech() {
    setTech(false);
  }


  return (
    <section className='app__about'>
      <div className='app__about-content'>
        <h1>  </h1>
        <div className='app__about-grid'>
          <div className='app__about-topics'>
            <Button
              title='Sobre mim'
              onMouseOver={showAbout}
              onMouseOut={hideAbout}
            />
            <Button
              title='Graduação'
              onMouseOver={showFormation}
              onMouseOut={hideFormation}
            />
            <Button
              title='Tecnologias'
              onMouseOver={showTech}
              onMouseOut={hideTech}
            />
          </div>

          <div className='app__about-text'>
            <motion.div
              whileInView={{ y: [50, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}

              style={about ? { display: 'block' } : { display: 'block' }}
              className='app__about-card'>
              <div className='app__about-text-content'>
                <p>
                  Meu nome é Luís Carlos, tenho 25 anos e um grande interesse por <span> tecnologia</span>.
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
              whileInView={{ y: [50, 0] }}
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
                  Após concluir o curso técnico iniciei o curso de <span>Engenharia Elétrica</span>, que me mostrou outras maneiras de se utilizar programação para simulações e cálculos com <span>Matlab e Python.</span>
                </p>
              </div>
              <div className='app__about-text-content'>
                <p>
                  Fiz estágio na engenharia CAPEX de uma multinacional e meses após o término, trabalhei como <span>auxiliar de projetos elétricos</span> em uma empresa de desenvolvimento de projetos industriais.
                </p>
                <div>
                  <img src={images.autocad} alt='Engenharia elétrica' />
                </div>
              </div>

            </motion.div>

            <motion.div
              whileInView={{ y: [50, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}

              style={tech ? { display: 'block' } : { display: 'none' }}
              className='app__about-card'>
              <div className='app__about-tech' >
                <h1>Tecnologias estudadas:</h1>
                <div className='app__about-tech-img'>
                  <img src={images.engeletrica} alt='Engenharia elétrica' />
                  <img src={images.engeletrica} alt='Engenharia elétrica' />
                  <img src={images.engeletrica} alt='Engenharia elétrica' />

                </div>
              </div>
              <p>
                Em maio do ano passado decidi aprender mais sobre programação e então comecei os meus estudos primeiramente com HTML, CSS e JavaScript.
              </p>
              <p>
                E nos últimos meses tenho estudado e desenvolvido projetos utilizando React.js como framework para o frontend e node.js para backend além de também procurar outras alternativas para estilização como Tailwind CSS, Bootstrap e SCSS.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About