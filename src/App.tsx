import { Route, Routes } from 'react-router'
import './App.css'
import { Project } from './components/project/project'
import { Achievements } from './components/achievements'
import { Intro } from './components/introduction/intro'
import { Education } from './components/education/education'
import { Experience } from './components/experience/experience'

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/achievements" element={<Achievements />} />
        </Routes>
      </div>
    </>
  )
}

export default App
