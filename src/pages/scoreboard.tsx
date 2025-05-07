import Footer from "../page-components/footer"
import Header from "../page-components/header"

import PigWithTgLogo from "../assets/PigWithTgLogo.svg"
import FullPig from "../assets/FullPig.svg"

import "../css/scoreboard.css"
import getPretendentArray from "../modules/render-pretendent"
// import { getBalance } from "../api/requests"
const Scoreboard = () => {
  const pretendentsArray = getPretendentArray()
  const linkToTgBot = () => document.location = 'tg://resolve?domain=test_piggygame_bot'
  const linkToTgCommunity = () => document.location = 'tg://resolve?domain=piggyhodl_news'
  

  return (
    <>
      <Header />
      <main className="w-360 h-168.5 px-43.75 py-3.75 gap-6 mr-[3.5%] tracking-normal">
        <section className="w-133.25 h-158.5 flex flex-nowrap gap-6 ">
          <article>
            <div className="w-133.25 h-12 flex justify-between shrink-0 items-center pl-[5%] text-[#D874B9]">
              <p className="w-97.75 h-9.5 text-4xl leading-9.5 mr-[13%] uppercase font-semibold sourseSerif4">
                Scoreboard
              </p>
              <div className="w-35.5 h-12 flex shrink-0 justify-center items-center text-[#4B4B4B] px-3.75 gap-1 rounded-3xl bgcPink">
                <p className="w-27.5 h-5 flex font-medium text-[16px] leading-5 content-center hankenGrotesk" >
                  {pretendentsArray.quantityPretendents} pretendents
                </p>
              </div>
            </div>
            <div id="ScoreBoardList" className="w-133.25 h-141 flex flex-col gap-3 mt-5 overflow-scroll">
              {pretendentsArray.Elements.map((pretendent, id) => {
                return <div key={id} className="w-133.25 h-21 rounded-3xl py-3 px-5 flex flex-col gap-3 transition-colors duration-600 hover:bg-[#FFF2FE]">
                  {pretendent}
                </div>
              })}
            </div>
          </article>

          <article className="w-133.25 h-158.5 flex flex-col gap-4 justify-around shrink-0">
            <div className="w-133.25 h-51.5 flex flex-col justify-center items-center text-center bgcPink px-6 rounded-3xl ">
              <span className="w-57.75 h-30 items-center sourseSerif4 font-medium italic text-[120px] leading-30 cPink">
                1110
              </span>
              <span className="w-45 h-9.5 hankenGrotesk font-extralight text-[32px] leading-[120%] tracking-tight text-black">
                TON on bank
              </span>
            </div>
            <div className="w-133.25 h-47.5 flex flex-col flex-wrap overflow-hidden gap-8 rounded-3xl p-6 bgcPink">
              <div className="w-121.25 h-15 flex flex-col gap-3">
                <p className="w-121.25 h-7 sourseSerif4 font-semibold text-2xl leading-7 uppercase cDarkPink">
                  1000 piggies
                </p>
                <p className="w-121.25 h-5 hankenGrotesk font-normal text-[16px] leading-5 text-black">
                  For subscription on PiggyHODL in telegram
                </p>
              </div>
              <button className=" w-45 h-12.5 flex justify-center shrink-0 font-semibold leading-4.5 tracking-[1%] uppercase hover:cursor-pointer text-black py-4 px-8 rounded-[40px] bgcDarkPink hankenGrotesk"
                onClick={linkToTgCommunity}>
                Subscribe
              </button>
              <img className="relative w-42 h-42 top-[29%] right-[47%]" src={PigWithTgLogo} />
            </div>
            <div className="w-133.25 h-50.5 flex pr-6 gap-6 rounded-3xl bg-[#FFBFFB33] ">
              <img className="mt-5.5 w-43 h-44.75 " src={FullPig} />
              <div className="w-78 h-50.5 flex flex-col items-center py-6 gap-12">
                <p className="w-64.5 h-12 sourseSerif4 font-medium italic text-5xl leading-12 items-center cDarkPink">
                  Join the game
                </p>
                <button onClick={linkToTgBot} className="w-53.25 h-14.5 px-10 py-5 gap-1 rounded-[40px] hover:cursor-pointer bgcDarkPink hankenGrotesk font-semibold text-[16px] leading-4.5 tracking-[1%] uppercase text-[#0D0D0D]">
                  Play piggygame
                </button>
              </div>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Scoreboard


