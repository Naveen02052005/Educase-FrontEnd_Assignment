import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormField from '../components/FormField.jsx'
import './auth.css'

export default function Signup() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes',
  })

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const canSubmit =
    form.fullName.trim() &&
    form.phone.trim() &&
    form.email.trim() &&
    form.password.trim()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!canSubmit) return
    navigate('/account-settings', {
      state: { name: form.fullName, email: form.email },
    })
  }

  return (
    <form className="auth-page signup" onSubmit={handleSubmit}>
      <h1 className="auth-title">
        Create your
        <br />
        PopX account
      </h1>

      <FormField
        label="Full Name"
        required
        name="fullName"
        value={form.fullName}
        onChange={update('fullName')}
        placeholder="Marry Doe"
      />
      <FormField
        label="Phone number"
        required
        name="phone"
        type="tel"
        value={form.phone}
        onChange={update('phone')}
        placeholder="Enter phone number"
      />
      <FormField
        label="Email address"
        required
        name="email"
        type="email"
        value={form.email}
        onChange={update('email')}
        placeholder="Enter email address"
      />
      <FormField
        label="Password"
        required
        name="password"
        type="password"
        value={form.password}
        onChange={update('password')}
        placeholder="Enter password"
      />
      <FormField
        label="Company name"
        name="company"
        value={form.company}
        onChange={update('company')}
        placeholder="Enter company name"
      />

      <div className="radio-group">
        <label className="radio-group-label">
          Are you an Agency?<span className="required">*</span>
        </label>
        <div className="radio-options">
          <label className="radio-option">
            <input
              type="radio"
              name="isAgency"
              value="yes"
              checked={form.isAgency === 'yes'}
              onChange={update('isAgency')}
            />
            Yes
          </label>
          <label className="radio-option">
            <input
              type="radio"
              name="isAgency"
              value="no"
              checked={form.isAgency === 'no'}
              onChange={update('isAgency')}
            />
            No
          </label>
        </div>
      </div>

      <button className="btn-primary" type="submit" disabled={!canSubmit}>
        Create Account
      </button>
    </form>
  )
}
