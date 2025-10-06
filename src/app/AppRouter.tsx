import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'

const AppRouter: React.FC = () => {
  // Usar basename solo en producción (GitHub Pages)
  const basename = import.meta.env.PROD ? '/PROYECTO-ESPECIAL' : '/'
  
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Aquí puedes agregar más rutas en el futuro */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  )
}

export default AppRouter