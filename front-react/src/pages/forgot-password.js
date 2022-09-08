import AuthCard from 'components/AuthCard'
import AuthSessionStatus from 'components/AuthSessionStatus'
import AuthValidationErrors from 'components/AuthValidationErrors'
import Button from 'components/Button'
import AppLayout from 'components/Layouts/AppLayout'
import GuestLayout from 'components/Layouts/GuestLayout'
import Input from 'components/Input'
import { useAuth } from 'hooks/auth'
import { useState } from 'react'
import {NavLink} from 'react-router-dom';

const ForgotPassword = () => {
  const { forgotPassword } = useAuth({ middleware: 'guest' })

  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState([])
  const [status, setStatus] = useState(null)

  const submitForm = event => {
    event.preventDefault()
    forgotPassword({ email, setErrors, setStatus })
  }

  return (
    <AppLayout>
      <GuestLayout>
        <div className='bg-login px-6 font-Hurme-Geometric-N'>
          <AuthCard
            logo={
              <NavLink to="/">
                <img src='logos/UNCO_activa.svg' alt='logo unco activa' className="py-6"></img>
              </NavLink>
            }>
            <div className="mb-4 text-sm">
            ¿Olvidaste tu contraseña? No hay problema. Simplemente háganos saber su dirección de correo electrónico y le enviaremos un enlace de restablecimiento de contraseña que le permitirá elegir una nueva.
            </div>
            {/* Session Status */}
            <AuthSessionStatus className="mb-4" status={status} />
            {/* Validation Errors */}
            <AuthValidationErrors className="mb-4" errors={errors} />
            <form onSubmit={submitForm} className='font-Hurme-Geometric-R'>
              {/* Email Address */}
              <div>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  placeholder='Correo Electronico'
                  className="block mt-1 w-full h-[34px]"
                  onChange={event => setEmail(event.target.value)}
                  autoFocus
                />
              </div>
              <div className="flex items-center justify-end mt-4">
                <Button className="px-4">Enviar Email de Reestablecimiento</Button>
              </div>
            </form>
          </AuthCard>
        </div>
      </GuestLayout>
    </AppLayout>
  )
}

export default ForgotPassword
