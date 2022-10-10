import Navigation from 'components/Layouts/Navigation'
import Footer from './Footer'

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
