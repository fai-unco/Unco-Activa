import AuthCard from 'components/AuthCard'
import AuthSessionStatus from 'components/AuthSessionStatus'
import AuthValidationErrors from 'components/AuthValidationErrors'
import Button from 'components/Button'
import AppLayout from 'components/Layouts/AppLayout'
import GuestLayout from 'components/Layouts/GuestLayout'
import Input from 'components/Input'
import { useAuth } from 'hooks/auth'
import { useState } from 'react'
import { NavLink} from 'react-router-dom';

const Login = () => {

  const { login } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/'
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])
  const [status, setStatus] = useState(null)

  const submitForm = async event => {
    event.preventDefault()
    login({ email, password, setErrors, setStatus })
  }

  return (
    <AppLayout>
      <GuestLayout>
        <AuthCard>
          <img src='logos/UNCO_activa.svg' alt='logo unco activa' className="py-6"></img>
          <h1 className="text-sm font-semibold text-center">
            Iniciar Sesion
          </h1>
          {/* Session Status */}
          <AuthSessionStatus className="mb-4" status={status} />
          {/* Validation Errors */}
          <AuthValidationErrors className="mb-4" errors={errors} />
          <form onSubmit={submitForm}>
            {/* Email Address */}
            <div className='mt-4'>
              <Input
                id="email"
                type="email"
                value={email}
                placeholder="Nombre de Usuario"
                className="block  w-full h-[34px]"
                onChange={event => setEmail(event.target.value)}
                autoFocus
              />
            </div>
            {/* Password */}
            <div className="mt-4">
              <Input
                id="password"
                type="password"
                value={password}
                placeholder="Contraseña"
                className="py-2 mt-1 w-full h-[34px]"
                onChange={event => setPassword(event.target.value)}
                
                autoComplete="current-password"
              />
            </div>
            {/* Remember Me */}
            <div className="block mt-4">
              <label
                htmlFor="remember_me"
                className="inline-flex items-center">
                <input
                  id="remember_me"
                  type="checkbox"
                  name="remember"
                  className="rounded border-gray-300 text-blue-cyan
                  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
                <span className="ml-2 text-sm">
                    Remember me
                </span>
              </label>
            </div>
            <div className="flex justify-center w-full mt-4">
              <NavLink
                to="/forgot-password"
                className="underline text-sm text-gray-dark hover:text-gray-darker"
              >
                  Olvidaste tu contraseña?
              </NavLink>
            </div>
            <div className="flex justify-center w-full">
              <Button className="my-5 w-full">
                  Iniciar Sesion
              </Button>
            </div>
          </form>
        </AuthCard>
      </GuestLayout>
    </AppLayout>
  )
}

export default Login
