import { Route, Routes } from 'react-router-dom'
import '../CSS/App.css'
import UserFile from './UserFile'


function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<UserFile/>}/>
      </Routes>
    </div>
  )
}

export default App
