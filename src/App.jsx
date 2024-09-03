import React from 'react'
import Header from './components/header/Header'
/*import About from './components/about/About'*/
import Projects from './components/projects/Projects'
import Cursor from './components/Cursor'

const App = () => {
  return (
    <>
      <Header />
      {/* <About />*/}
      <Projects />
      <Cursor />
    </>
  )
}

export default App