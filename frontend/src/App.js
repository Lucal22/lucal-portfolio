import React from 'react';

import { Home, Footer, Header, Work, About, Form } from './container';
import './App.scss'


const App = () => {
  return (
    <div className='app'>
      <Header />
      <Home />
      <About />
      <Work />
      <Form />
      <Footer />
    </div>
  )
}

export default App