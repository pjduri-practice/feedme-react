import React, { useState } from 'react'
import { Button, Input, Label, Form } from 'reactstrap'
import axios from 'axios'

export default function RegisterForm({ bsNavBtnClasses, navBtnStyle }) {
  const btnClass = bsNavBtnClasses + 'btn-sm col col-4'
  const inputStyle = { 
    height: '1.25rem',
    width: '95%'
   }
  const inputClasses = 'bg-light bg-opacity-75 border-dark form-control ms-1 me-1'

  // State variables to store form input values
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [verifyPassword, setVerifyPassword] = useState('')
  const [error, setError] = useState('')

  const handleRegister = async (e) => {
    e.preventDefault()

    // Create the user registration data
    const registrationData = {
      username: username,
      email: email,
      password: password,
    }

    try {
      // Send a POST request to the registration endpoint
      const response = await axios.post('http://localhost:8080/api/auth/signup', registrationData)

      // Handle the response, e.g., show a success message
      alert(response.data.message)

      // Clear form fields
      setUsername('')
      setEmail('')
      setPassword('')
      setVerifyPassword('')
    } catch (error) {
      // Handle errors, e.g., show an error message
      setError('Registration failed: ' + error.response.data.message)
    }
  }

  return (
    <>
      <Form style={{ height: '100%' }} 
        className='d-flex flex-column small text-black bg-transparent'>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Label>Username
          <Input
            type='text'
            className={inputClasses}
            style={inputStyle}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Label>
        <Label>Email
          <Input
            type='email'
            className={inputClasses}
            style={inputStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Label>
        <Label>Password
          <Input
            type='password' // Use type password for password fields
            className={inputClasses}
            style={inputStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Label>
        <Label>Verify Password
          <Input
            type='password'
            className={inputClasses}
            style={inputStyle}
            value={verifyPassword}
            onChange={(e) => setVerifyPassword(e.target.value)}
          />
        </Label>
        <Button type='submit' className={btnClass} style={navBtnStyle} onClick={handleRegister}>Submit</Button>
      </Form>
    </>
  )
}
