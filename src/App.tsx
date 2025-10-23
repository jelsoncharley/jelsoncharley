import { Route, Routes } from 'react-router'
import './App.css'
import { Experience } from './components/experience'
import { Achievements } from './components/achievements'
import { Intro } from './components/introduction/intro'
import { Education } from './components/education/education'

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/achievements" element={<Achievements />} />
        </Routes>
      </div>
    </>
  )
}

export default App
