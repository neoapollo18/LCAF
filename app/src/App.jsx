import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ComingSoonShell } from './components/ComingSoonShell'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Founder } from './pages/Founder'
import { Mission } from './pages/Mission'
import { Press } from './pages/Press'
import { Contact } from './pages/Contact'
import { Donate } from './pages/Donate'
import { Work } from './pages/Work'

const comingSoon = import.meta.env.VITE_COMING_SOON === 'true'

export default function App() {
  if (comingSoon) {
    return <ComingSoonShell />
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="founder" element={<Founder />} />
        <Route path="mission" element={<Mission />} />
        <Route path="work" element={<Work />} />
        <Route path="press" element={<Press />} />
        <Route path="contact" element={<Contact />} />
        <Route path="donate" element={<Donate />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
