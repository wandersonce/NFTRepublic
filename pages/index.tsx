import Header from '../components/Header'
import Hero from '../components/Hero'
import { useWeb3 } from '@3rdweb/hooks'
import { useEffect } from 'react';
import { client} from '../lib/sanityClient'

const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `border border-[#282b2f] bg-[#673D4D] p-[0.8rem] text-xl text-[#fff] font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#fff] font-semibold mt-4`,
}

export default function Home() {
  const { address, connectWallet} = useWeb3();

  useEffect(() => {
    if (!address) return
    ;(async () => {
      const userDoc = {
        _type: 'users',
        _id: address,
        userName: 'Unnamed',
        walletAddress: address,
      }

      const result = await client.createIfNotExists(userDoc)
    })()
  }, [address])

  return (
    <div className={style.wrapper}>
      {address ? (
    <>
    <Header />
    <Hero />
    </>
    ) : (
      <div className={style.walletConnectWrapper}>
      <button
        className={style.button}
        onClick={() => connectWallet('injected')}
        > 
        Connect Wallet
      </button>
      <div className={style.details}>
        You need Chrome to be <br/>
        able to run this app.
      </div>
        </div>
    )}
    </div>
  )
}

//stoped 34:46
//yarn dev
// sanity start