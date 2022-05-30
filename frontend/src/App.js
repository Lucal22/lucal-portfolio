import React from 'react';

import { Home, Footer, Header, Work, About, Form } from './container';
import './App.scss'


const App = () => {
  return (

    <div className='app'>
      <React.StrictMode>
        <Header />
        <Home />
        <About />
        <Work />
        <Form />
        <Footer />
      </React.StrictMode>
    </div>

  )
}

export default App