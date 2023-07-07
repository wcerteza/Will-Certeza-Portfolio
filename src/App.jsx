import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Aboutme from './components/Aboutme'
import Experience from './components/Experience'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className="app">
      <main>
        <Header />
        <Aboutme />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </div>
  )
}

export default App
