import { useEffect, useState } from 'react'
import LandingPage from './pages/LandingPage'
import MyApp from './pages/MyApp'

export default function App() {
  const [path, setPath] = useState(() => window.location.pathname)

  useEffect(() => {
    const onNavigate = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onNavigate)
    return () => window.removeEventListener('popstate', onNavigate)
  }, [])

  const navigate = (to) => {
    window.history.pushState({}, '', to)
    setPath(to)
  }

  if (path === '/myapp' || path === '/myapp/') {
    return <MyApp />
  }

  return <LandingPage onNavigate={navigate} />
}
