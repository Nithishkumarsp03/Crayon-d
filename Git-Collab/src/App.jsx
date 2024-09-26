import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import About from './Pages/About/About'

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/about" element={<About />} /> 
        </Routes>
      </Router>
    </>
  )
}

export default App
