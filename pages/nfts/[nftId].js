import Header from '../../components/Header'
import { useEffect, useMemo, useState } from 'react'
import { useWeb3 } from '@3rdweb/hooks'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { useRouter } from 'next/router'

const style = {
  wrapper: `flex flex-col items-center container-lg text-[#e5e8eb]`,
  container: `container p-6`,
  topContent: `flex`,
  nftImgContainer: `flex-1 mr-4`,
  detailsContainer: `flex-[2] ml-4`,
}

const Nft = () => {
  const { provider } = useWeb3()
  const [selectedNft, setSelectedNft] = useState()
  const [listings, setListings] = useState([])
  const router = useRouter()

  const nftModule = useMemo(() => {
    if (!provider) return

    const sdk = new ThirdwebSDK(
      provider.getSigner(), //alchemy Key
      'https://eth-rinkeby.alchemyapi.io/v2/59tde_f2ifKSk2CFmHe_sJmEioVRvCQf'
    )
    return sdk.getNFTModule('0x4C2A7061Eedce606a57dE5ac33bCA81fdAD983a0')
  })

  // get all nfts in the collection
  useEffect(() => {
    if (!nftModule) return
    ;(async () => {
      const nfts = await nftModule.getAll()

      const selectedNftArray = nfts.find(
        (nft) => nft.id === router.query.assetId
      )
      setSelectedNft(selectedNftArray)
    })()
  }, [nftModule])

  const marketPlaceModule = useMemo(() => {
    if (!provider) return

    const sdk = new ThirdwebSDK(
      provider.getSigner(), //alchemy Key
      'https://eth-rinkeby.alchemyapi.io/v2/59tde_f2ifKSk2CFmHe_sJmEioVRvCQf'
    )
    return sdk.getMarketplaceModule(
      '0x09045251f5D9F9edCFa9579DA1C1073AAEBeF37f'
    )
  }, [provider])

  useEffect(() => {
    if (!marketPlaceModule) return
    ;(async () => {
      setListings(await marketPlaceModule.getAllListings())
    })()
  }, [marketPlaceModule])

  return <Header />
}

export default Nft
