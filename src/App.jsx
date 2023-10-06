// npm imports
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

// data imports
import { articleData } from './data/articleData'

// page imports
import NavBar from './components/NavBar/NavBar'
import Landing from './pages/Landing/Landing'
import Cards from './pages/Cards/Cards'
import SideBySide from './pages/SideBySide/SideBySide'
import OSList from './pages/OSList/OSList'

// CSS
import './App.css'

function App() {
  const [articles, setArticles] = useState(articleData)
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/side-by-side' element={<SideBySide articles={articles} />} />
        <Route path='/card-display' element={<Cards articles={articles} />} />
        <Route path='/os-list' element={<OSList />} />
      </Routes>
    </>
  )
}

export default App
