import React from 'react'
import { Button, SubTitle } from '../../styles/global-styles'
import { Header } from '../../styles/header-style'
export const HeaderBar = () => {
  return (
    <Header>
      <SubTitle>App-test</SubTitle>
      <Button>Log out</Button>
    </Header>
  )
}
