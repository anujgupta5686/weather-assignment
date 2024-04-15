import './App.css'
import Detailpage from './pages/detailpage'
import Homepage from './pages/homepage'
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/detailpage" element={<Detailpage />} />
      </Routes>
    </>
  )
}

export default App
