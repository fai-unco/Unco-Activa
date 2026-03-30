import Navigation from 'components/Layouts/Navigation'
import Footer from './Footer'
import Background from '../background/Background'

const AppLayout = ({ children, resultRef }) => {
    
  return (
    <Background>
      <div className="flex flex-col min-h-screen">
        <Navigation resultRef={resultRef} />
        {/* Page Content */}
        <main className='flex flex-1'>{children}</main>
        <Footer />
      </div>
    </Background>
  )
}

export default AppLayout
