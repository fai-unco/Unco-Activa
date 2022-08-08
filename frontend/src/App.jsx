import { useState } from 'react'
import './App.css'
import LoginForm from './components/auth/LoginForm'
import RegisterForm from './components/auth/RegisterForm'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="App">
      <Header />         
      <LoginForm />
      <RegisterForm />
      <Footer />
    </div>
  )
}

export default App
