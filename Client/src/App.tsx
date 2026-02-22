import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { ResetPassword } from './pages/ResetPassword'
import UpdatePassword from './pages/UpdatePassword'
import { SingleCardPage } from './pages/singleCardPage'
import { Cart } from './pages/Cart'
import './App.css'

function App() {
  

  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/singlecardpage" element={<SingleCardPage/>}/>
          <Route path="/update-password" element={<UpdatePassword/>}/>
          <Route path="/reset-password" element={<ResetPassword/>}/>
        </Routes>  
      </div>
    </>
  )
}

export default App
