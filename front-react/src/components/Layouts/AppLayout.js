import Navigation from 'components/Layouts/Navigation'
import Footer from './Footer'
import Background from '../background/Background'

const AppLayout = ({ children, resultRef }) => {
    
  return (
    <Background>
      <div className="min-h-screen">
        <Navigation resultRef={resultRef} />
        {/* Page Content */}
        <main>{children}</main>
        <Footer />
      </div>
    </Background>
  )
}

export default AppLayout
