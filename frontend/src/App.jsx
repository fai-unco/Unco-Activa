import { useState } from 'react'
import './App.css'
import LoginForm from './components/auth/LoginForm'
import RegisterForm from './components/auth/RegisterForm'
import Header from './components/layout/Header'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="App">
      <Header />         
      <LoginForm />
      <RegisterForm />
    </div>
  )
}

export default App
