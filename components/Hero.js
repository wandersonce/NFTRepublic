import React from 'react'

const style = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s250')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
  copyContainer: `w-1/2`,
  title: `relative text-white text-[46px] font-semibold`,
  description: `text-[#ffff] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#110d0e] rounded-lg mr-5 text-white hover:bg-[#8a939b] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#673D4D] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#a06987] cursor-pointer`,
  cardContainer: `rounded-[3rem]`,
  infoContainer: `h-20 bg-[#673D4D] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#fff] text-3xl font-bold`,
}

function Hero() {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.copyContainer}>
            <div className={style.title}>
              Discover, collect, and sell extraordinary NFTs
            </div>
            <div className={style.description}>
              NFT Republic is the world&apos;s first and largest NFT marketplace
            </div>
            <div className={style.ctaContainer}>
              <button className={style.accentedButton}>Explore</button>
              <button className={style.button}>Create</button>
            </div>
          </div>
          <div className="rounded-t-lg">
            <img
              src="https://lh3.googleusercontent.com/aoZYvjIAhmxVNfUr7-pwhCZBYzYiEoMI23DtLwpoaq_OmMLqiSdQ_gAuwJtmesuDqCdnlbeUPBtYyTdzAt_T0F0nT3pldHxgNzjp-ec=s550"
              alt="Hero Image"
            />
            <div className={style.infoContainer}>
              <img
                className="h-[2.25rem] rounded-full"
                src="https://lh3.googleusercontent.com/9G_SbzGpWnId_ouP-rsTfv1UIeSaaayelyZVyo7eVETYp2uDXDXeH82Yvw4AchRHuKSrixHhGQ7ri5UUepQLaK9BpwhMH1yjImnXHA=s130"
                alt=""
              />
              <div className={style.author}>
                <div className={style.name}>Justin</div>
                <a
                  className="text-[#1868b7]"
                  href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/25904909721345378695781540710917280912424441640456853830352847639701723545601"
                >
                  hola-justin
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
