import { useCallback, useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import cakeABI from 'config/abi/cake.json'
import { getContract } from 'utils/web3'
import { getTokenBalance } from 'utils/erc1155'
import { getCakeAddress } from 'utils/addressHelpers'
import useRefresh from './useRefresh'
import { useDispatch } from 'react-redux'
import { useEobNft } from './useContract'
import { openLandBox, openSNftBox } from 'utils/callHelpers'

const useEobNftBalance = (tokenAddress: string, tokenId: BigNumber) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account, ethereum }: { account: string; ethereum: provider } = useWallet()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const res = await getTokenBalance(ethereum, tokenAddress, account, tokenId)
      setBalance(new BigNumber(res))
    }

    if (account && ethereum) {
      fetchBalance()
    }
  }, [account, ethereum, tokenAddress, fastRefresh])

  return balance
}

export const useOpenLandBox = (amount: number) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const eobNftContract = useEobNft()

  const handleHarvest = useCallback(async () => {
    const txHash = await openLandBox(eobNftContract, amount, account)
    window.location.reload();
    // dispatch(fetchFarmUserDataAsync(account))
    return txHash
  }, [account, dispatch, amount, eobNftContract])

  return { onReward: handleHarvest }
}

export const useOpenSNftBox = (tokenId: string, amount: number) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const eobNftContract = useEobNft()

  const handleHarvest = useCallback(async () => {
    const txHash = await openSNftBox(eobNftContract, tokenId, amount, account)
    window.location.reload();
    // dispatch(fetchFarmUserDataAsync(account))
    return txHash
  }, [account, dispatch, tokenId, amount, eobNftContract])

  return { onReward: handleHarvest }
}

export default useEobNftBalance;
