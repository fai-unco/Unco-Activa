import Navigation from 'components/Layouts/Navigation'
import Footer from './Footer'
import { useAuth } from 'hooks/auth'

const AppLayout = ({ children, resultRef }) => {
  const { user } = useAuth()
  
  return (
    <div className="min-h-screen">
      <Navigation resultRef={resultRef} user={user} />
      {/* Page Content */}
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default AppLayout
