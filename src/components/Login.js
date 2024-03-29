import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from 'react-native'
import styled from 'styled-components/native'

import { Input } from './Input'

const Wrapper = styled.View`
  padding: 5px;
`

const Login = () => {
  const formMethods = useForm()

  return (
    <Wrapper>
      <Input label='Username' />
      <Input label='Password' error="Password can't be blank" />
      <Button title='Login' />
    </Wrapper>
  )
}

export default Login