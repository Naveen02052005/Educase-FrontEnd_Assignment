import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormField from '../components/FormField.jsx'
import './auth.css'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const canSubmit = email.trim().length > 0 && password.trim().length > 0

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!canSubmit) return
    // Login screen only collects an email, so derive a display name from it
    // (e.g. "marry.doe@gmail.com" -> "Marry.doe")
    const localPart = email.split('@')[0] || 'User'
    const derivedName = localPart.charAt(0).toUpperCase() + localPart.slice(1)

    navigate('/account-settings', {
      state: { name: derivedName, email },
    })
  }

  return (
    <form className="auth-page" onSubmit={handleSubmit}>
      <div>
        <h1 className="auth-title">
          Signin to your
          <br />
          PopX account
        </h1>
        <p className="auth-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <FormField
          label="Email Address"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email address"
        />
        <FormField
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />

        <button className="btn-primary" type="submit" disabled={!canSubmit}>
          Login
        </button>
      </div>
    </form>
  )
}
