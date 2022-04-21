import React from 'react';

import {About, Footer, Header, Skills, Work, Formation} from './container';
import './App.scss'


const App = () => {
  return (
    <div className='app'>
      <Header />
      <About />
      <Formation />
      <Work />
      <Skills />
      <Footer />
    </div>
  )
}

export default App