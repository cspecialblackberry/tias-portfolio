import { Outlet } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import BackToTop from './components/backToTop';


function App() {
  return (
    <>
    <header>
      <Header />
    </header>
    <main className='mainBody'>
      <Outlet />
      <BackToTop /> 
    </main>
    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default App
