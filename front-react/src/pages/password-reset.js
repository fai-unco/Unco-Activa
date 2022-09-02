import ApplicationLogo from 'components/ApplicationLogo'
import AuthCard from 'components/AuthCard'
import AuthSessionStatus from 'components/AuthSessionStatus'
import AuthValidationErrors from 'components/AuthValidationErrors'
import Button from 'components/Button'
import GuestLayout from 'components/Layouts/GuestLayout'
import Input from 'components/Input'
import Label from 'components/Label'
import { useAuth } from 'hooks/auth'
import { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom';
import AppLayout from 'components/Layouts/AppLayout'

const PasswordReset = () => {
  const params = useParams()
  const { resetPassword } = useAuth({ middleware: 'guest' })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPasswordConfirmation] = useState('')
  const [errors, setErrors] = useState([])
  const [status, setStatus] = useState(null)

  const submitForm = event => {
    event.preventDefault()
    resetPassword({
      email,
      password,
      password_confirmation,
      setErrors,
      setStatus
    })
  }

  useEffect(() => {
    setEmail(params.email || '')
  }, [params.email])

  return (
    <AppLayout>
      <GuestLayout>
        <div className='bg-login'>
          <AuthCard
            logo={
              <Link to="/">
                <img src='/logos/UNCO_activa.svg' alt='logo unco activa' className="py-6"></img>
              </Link>
            }>
            <h1 className='flex justify-center text-sm font-semibold py-5'>Restaurar Contraseña</h1>
            {/* Session Status */}
            <AuthSessionStatus className="mb-4" status={status} />
            {/* Validation Errors */}
            <AuthValidationErrors className="mb-4" errors={errors} />
            <form onSubmit={submitForm}>
              {/* Email Address */}
              <div>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  className="block mt-1 w-full h-[34px]"
                  placeholder='Email'
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
                  className="block mt-1 w-full h-[34px]"
                  placeholder='Compraseña'
                  onChange={event => setPassword(event.target.value)}
                />
              </div>
              {/* Confirm Password */}
              <div className="mt-4">
                <Input
                  id="password_confirmation"
                  type="password"
                  value={password_confirmation}
                  className="block mt-1 w-full h-[34px]"
                  placeholder='Confirmar Compraseña'
                  onChange={event =>
                    setPasswordConfirmation(event.target.value)
                  }
                />
              </div>
              <div className="flex items-center justify-end mt-7">
                <Button className='px-4'>Reset Password</Button>
              </div>
            </form>
          </AuthCard>
        </div>
      </GuestLayout>
    </AppLayout>
  )
}

export default PasswordReset
