import { useLocation, Navigate } from 'react-router-dom'
import './settings.css'

const AVATAR =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72">
    <rect width="72" height="72" fill="#e4c9b0"/>
    <circle cx="36" cy="28" r="14" fill="#5b3a29"/>
    <path d="M8 72c0-16 12-26 28-26s28 10 28 26" fill="#3a2418"/>
  </svg>
`)

export default function AccountSettings() {
  const location = useLocation()
  const user = location.state

  // If someone lands here directly (refresh, typed URL) with no session
  // data, send them back to sign in rather than showing placeholder info.
  if (!user) {
    return <Navigate to="/login" replace />
  }

  return (
    <div className="settings-page">
      <div className="settings-header">Account Settings</div>
      <div className="settings-body">
        <div className="profile-row">
          <div className="avatar-wrap">
            <img src={AVATAR} alt="Profile" />
            <div className="camera-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 7h3l2-2h6l2 2h3a1 1 0 011 1v11a1 1 0 01-1 1H4a1 1 0 01-1-1V8a1 1 0 011-1z"
                  stroke="#fff"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="13" r="3.2" stroke="#fff" strokeWidth="1.8" />
              </svg>
            </div>
          </div>
          <div>
            <div className="profile-name">{user.name}</div>
            <div className="profile-email">{user.email}</div>
          </div>
        </div>

        <p className="profile-bio">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
          Erat, Sed Diam
        </p>
      </div>
    </div>
  )
}
