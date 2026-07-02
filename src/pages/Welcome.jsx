import { useNavigate } from 'react-router-dom'
import './auth.css'

export default function Welcome() {
  const navigate = useNavigate()

  return (
    <div className="auth-page">
      <div className="welcome-copy">
        <h1 className="auth-title">Welcome to PopX</h1>
        <p className="auth-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <button className="btn-primary" onClick={() => navigate('/signup')}>
          Create Account
        </button>
        <button className="btn-secondary" onClick={() => navigate('/login')}>
          Already Registered? Login
        </button>
      </div>
    </div>
  )
}
