import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import AccountSettings from './pages/AccountSettings.jsx'

export default function App() {
  return (
    <div className="page-shell">
      <div className="mobile-frame">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account-settings" element={<AccountSettings />} />
        </Routes>
      </div>
    </div>
  )
}
