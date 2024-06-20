import './App.css'
import Navigation from './Navigation'
import About from './Section/About'
import Contact from './Section/Contact'
import Education from './Section/Education'
import Home from './Section/Home'
import Projects from './Section/Project'
import Skills from './Section/Skill'

function App() {

  return (
    <>
      <div className='App'>
      <Navigation />
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="education"><Education /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
      </div>
      
    </>
  )
}

export default App
