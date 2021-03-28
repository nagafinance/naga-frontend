import React, { useContext } from 'react'
import styled from 'styled-components'
import { NftProviderContext } from '../contexts/NftProvider'
import NftProgress from './NftProgress'
import NftProgressSimple from './NftProgressSimple'
import StatusCard from './StatusCard'

const StyledNtfInfo = styled.div`
  align-items: start;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`

const NftInfo = () => {
  return (
    <div style={{
      color: "white",
      textAlign: "center",
    }}>
      <div>Total sNFT Box: 3</div>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <div style={{
          padding: 12,
          marginTop: 16,
          marginBottom: 16,
          backgroundColor: "#9A6AFF",
          borderRadius: 10,
          fontSize: 24,
          flexBasis: 320,
        }}>Open Now!</div>
      </div>
    </div>
  )
}

export default NftInfo
