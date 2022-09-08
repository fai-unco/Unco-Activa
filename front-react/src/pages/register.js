import AuthCard from 'components/AuthCard'
import AuthValidationErrors from 'components/AuthValidationErrors'
import Button from 'components/Button'
import GuestLayout from 'components/Layouts/GuestLayout'
import Input from 'components/Input'
import { useAuth } from 'hooks/auth'
import { useState } from 'react'
import {NavLink} from 'react-router-dom';
import AppLayout from 'components/Layouts/AppLayout'

const Register = () => {
  const { register } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/'    
  })

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPasswordConfirmation] = useState('')
  const [errors, setErrors] = useState([])

  const submitForm = event => {
    event.preventDefault()
    register({ name, email, password, password_confirmation, setErrors }).then(function (){ 
    });
  }

  return (
    <AppLayout>
      <GuestLayout>
        <div className='bg-login'>
          <AuthCard>
            <img src='logos/UNCO_activa.svg' alt='logo unco activa' className="py-6"></img>
            <h1 className="text-sm font-semibold text-center">
            Registrate
            </h1>
            {/* Validation Errors */}
            <AuthValidationErrors className="mb-4" errors={errors} />
            <form onSubmit={submitForm}>
              {/* Name */}
              <div className="mt-4">
                <Input
                  id="name"
                  type="text"
                  value={name}
                  placeholder="name"
                  className="block w-full h-[34px]"
                  onChange={event => setName(event.target.value)}
                  autoFocus
                />
              </div>
              {/* Email Address */}
              <div className="mt-4">
                <Input
                  id="email"
                  type="email"
                  value={email}
                  placeholder="email"
                  className="block mt-1 w-full h-[34px]"
                  onChange={event => setEmail(event.target.value)}
                />
              </div>
              {/* Password */}
              <div className="mt-4">
                <Input
                  id="password"
                  type="password"
                  value={password}
                  placeholder="password"
                  className="block mt-1 w-full h-[34px]"
                  onChange={event => setPassword(event.target.value)}
                  autoComplete="new-password"
                />
              </div>
              {/* Confirm Password */}
              <div className="mt-4">
                <Input
                  id="password_confirmation"
                  type="password"
                  placeholder="Confirm password"
                  value={password_confirmation}
                  className="block mt-1 w-full h-[34px]"
                  onChange={event =>
                    setPasswordConfirmation(event.target.value)
                  }
                />
              </div>
              <div className="flex justify-center w-full mt-4">
                <NavLink
                  to="/login"
                  className="underline text-sm text-gray-600 hover:text-gray-900"
                >
                ¿Ya estas registrado?
                </NavLink>
              </div>
              <div className="flex justify-center">
                <Button className="my-5 w-full">Registrarse</Button>
              </div>
            </form>
          </AuthCard>
        </div>
      </GuestLayout>
    </AppLayout>
  )
}

export default Register
