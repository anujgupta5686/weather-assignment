import './App.css'
import { Button } from './components/ui/button'
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
