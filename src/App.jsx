import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import './App.css'
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />

      {/* Unified section spacing via `.section` class in each component */}
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App;
