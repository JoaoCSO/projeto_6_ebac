import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './styles/GlobalStyles'
import Header from './components/Header'
import Footer from './components/Footer'
import AppRoutes from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App