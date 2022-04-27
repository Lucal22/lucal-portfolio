import React from 'react';

import { Home, Footer, Header, Work, About } from './container';
import './App.scss'


const App = () => {
  return (
    <div className='app'>
      <Header />
      <Home />
      <About />
      <Work />
      <Footer />
    </div>
  )
}

export default App