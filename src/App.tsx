import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';

import styles from '../src/components/index.module.css'
import About from './components/About';


function App() {


  return (
    <div className={styles.Main}>
      <Header/>
      <div className={styles.projects}>
        <Projects />
      </div>
      <div className={styles.about}>
        < About />
      </div>
      
    </div>
   
  );
}

export default App;
