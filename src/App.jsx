import './App.css'

import { Routes, Route, Link } from "react-router-dom";

import Portfolio from './sections/Portfolio';

function App() {

  return (
    <>
      <Routes>
      <Route path="/" element={<Portfolio />} />
      </Routes>
     
    </>
  )
}

export default App
