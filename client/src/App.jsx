import {useState} from 'react'
import Chat from './components/chat/Chat'
//import './index.css'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
function App() {

  return (
    <div>
     <BrowserRouter>
        <Routes>
          <Route path='/chat' element={<Chat />} />
        </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
