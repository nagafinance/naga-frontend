// @ts-nocheck
import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Text as UIKitText, ArrowForwardIcon } from '@naga-uikit/naga-uikit'
import useI18n from 'hooks/useI18n'
import Container from 'components/layout/Container'

const StyledHowItWorks = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.textSubtle};
  padding: 24px 0;
`

const Section = styled.div`
  margin-bottom: 24px;
`

const Icon = styled.div`
  text-align: center;
`

const Text = styled(UIKitText)`
  flex: 1;
  padding: 0 8px;
`

const Row = styled.div`
  align-items: start;
  display: flex;
  margin-bottom: 16px;
`

const HowItWorks = () => {
  const TranslateString = useI18n()

  return <div>.</div>
}

export default HowItWorks
