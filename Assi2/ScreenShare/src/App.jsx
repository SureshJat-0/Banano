import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import ScreenTest from './components/ScreenTest'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/screen-test' element={<ScreenTest />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
