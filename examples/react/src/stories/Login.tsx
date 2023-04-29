import { useState } from 'react'
import './Login.css'

const LoginForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleFirstNameChange = (event: any) => {
    setFirstName(event.target.value)
  }

  const handleLastNameChange = (event: any) => {
    setLastName(event.target.value)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault()
    const data = { firstName, lastName }
    fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.ok
      })
      .then((responseData) => {
        console.log(responseData)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  return (
    <div className="login-form">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="first-name">First Name:</label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Last Name:</label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default LoginForm
