import React from 'react'

import { about, footer, header, skills, testimonial, work} from './container';
import { navbar } from './components';
import './App.scss';

const App = () => {
  return (
   <div className="app">
      <header />
      <about />
      <work />
      <skills />
      <testimonal />
      <footer />
   </div>
  )
}

export default App