import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Founder } from './pages/Founder'
import { Mission } from './pages/Mission'
import { Press } from './pages/Press'
import { Contact } from './pages/Contact'
import { Donate } from './pages/Donate'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="founder" element={<Founder />} />
        <Route path="mission" element={<Mission />} />
        <Route path="press" element={<Press />} />
        <Route path="contact" element={<Contact />} />
        <Route path="donate" element={<Donate />} />
        <Route path="work" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
