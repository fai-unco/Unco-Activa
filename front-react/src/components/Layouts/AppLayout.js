import Navigation from 'components/Layouts/Navigation'
import Footer from './Footer'
import { useAuth } from 'hooks/auth'

const AppLayout = ({ children }) => {
  const { user } = useAuth()
  
  return (
    <div className="min-h-screen">
      <Navigation user={user} />
      {/* Page Content */}
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default AppLayout
