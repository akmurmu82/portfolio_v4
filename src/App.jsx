import "./App.css";
import Navigation from "./Navigation";
import Contact from "./Section/Contact";
import Education from "./Section/Education";
import Home from "./Section/Home";
import Projects from "./Section/Project";
import Skills from "./Section/Skill";

function App() {
  return (
    <>
      <div className="App">
        <Navigation />
        <div id="home" style={{ position: "relative" }}>
          <Home />
        </div>
        <div id="education" style={{ position: "relative" }}>
          <Education />
        </div>
        <div id="skills" style={{ position: "relative" }}>
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
