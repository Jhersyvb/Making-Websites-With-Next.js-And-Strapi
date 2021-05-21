import { Box } from 'rebass'
import getConfig from 'next/config'
import styled from '@emotion/styled'
import { useState } from 'react'
import { setCookie } from 'nookies'
import Router from 'next/router'

const { publicRuntimeConfig } = getConfig()

function Register() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleRegister() {
    const registerInfo = {
      username,
      email,
      password,
    }

    const register = await fetch(
      `${publicRuntimeConfig.API_URL}/auth/local/register`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerInfo),
      }
    )
    const registerResponse = await register.json()
    console.log(registerResponse)

    // Router.push('/payed-articles')
  }

  return (
    <>
      <RegisterStyled>
        <Box variant="container">
          <Box as="h2" my={40}>
            Register here
          </Box>

          <form>
            <input
              type="text"
              onChange={e => setUsername(e.target.value)}
              value={username}
            />
            <br />
            <input
              type="email"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
            <br />
            <input
              type="password"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
            <br />
            <button type="button" onClick={() => handleRegister()}>
              Register
            </button>
          </form>
        </Box>
      </RegisterStyled>
    </>
  )
}

const RegisterStyled = styled.div`
  input {
    border: 1px solid #cccccc;
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 10px;
  }
`

export default Register
