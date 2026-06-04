import Contacts from './components/contacts.jsx'
import Education from './components/education.jsx'
import Experience from './components/experience.jsx'
import Hero from './components/hero.jsx'
import NavBar from './components/navBar.jsx'
import Projects from './components/projects.jsx'
import Techstack from './components/techstack.jsx'


export default function App() {
  return (
    <div>
     <NavBar/>
     <Hero />
     <Projects/>
     <Techstack/>
     <Experience/>
     <Education/>
     <Contacts/>
    </div>
  )
}
