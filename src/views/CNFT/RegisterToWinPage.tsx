// @ts-nocheck
import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Text } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import Container from 'components/layout/Container'
import HowItWorks from './components/HowItWorks'
import NftPreview from './components/NftPreview'

const StyledHero = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.textSubtle};
  padding-bottom: 32px;
  padding-top: 32px;
  margin-bottom: 24px;
`

const Cta = styled.div`
  align-items: center;
  display: flex;

  & > a + a {
    margin-left: 16px;
  }
`

const RegisterToWinPage = () => {
  const TranslateString = useI18n()

  return <div></div>
}

export default RegisterToWinPage
