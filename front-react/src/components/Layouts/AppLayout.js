import Navigation from 'components/Layouts/Navigation'
import Footer from './Footer'
import { useAuth } from 'hooks/auth'

const AppLayout = ({ children, resultRef }) => {
    
  return (
    <div className="min-h-screen">
      <Navigation resultRef={resultRef} />
      {/* Page Content */}
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default AppLayout
