import { AuthProvider } from './context/authContext'
import { useRoutes } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
import Home from './pages/home'
import SignUp from './pages/Signup'
import SignIn from './pages/Signin'
import Board from './pages/Board'
import CreateBoard from './pages/CreateBoard'
import Practice from './pages/Practice/Practice'

function App() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/signup', element: <SignUp /> },
    { path: '/login', element: <SignIn /> },
    { path: '/Home', element: <Home /> },
    { path: '/dashboard', element: <Dashboard /> },
    { path: '/board/:id', element: <Board /> },
    { path: '/createboard', element: <CreateBoard /> },
    { path: '/practice', element: <Practice /> },
  ])

  return (
    <AuthProvider>
      <Header />
      {routes}
      <Footer />
    </AuthProvider>
  )
}

export default App
