import Footer from "../page-components/footer"
import Header from "../page-components/header"

import PigWithTgLogo from "../assets/PigWithTgLogo.svg"
import FullPig from "../assets/FullPig.svg"

import "../css/scoreboard.css"
import getPretendentArray from "../modules/render-pretendent"
// import { getBalance } from "../api/requests"

const Scoreboard = () => {
  const pretendentsArray = getPretendentArray()
  let isHidden: boolean = false
  function HideOverLay():undefined {
    isHidden = true
    isHidden ? "opacity-100" : "opacity-0"
  }

  return (
    <>
      <Header />
      <main>
        <section className="scoreBoard">
          <article>
            <div className="titleScoreboard">
              <p>Scoreboard</p>
              <div className="quantityPretendents">
                <p>{pretendentsArray.quantityPretendents} pretendents</p>
              </div>
            </div>
            <div className="scoreBoardList mt-5 overflow-hidden">
              {pretendentsArray.Elements.map((pretendent, id) => {
                return <div key={id} className="w-[533px] h-[84px] rounded-[25px] py-[12px] px-[20px] flex flex-col gap-[12px] transition-colors duration-600 hover:bg-[#FFF2FE] ">
                  {pretendent}
                </div>
              })}
            </div>
          </article>

          <article className="info">
            <div className="bank">
              <span className="Text1110">1110</span>
              <span className="TextTonOnBank">TON on bank</span>
            </div>
            <div className="Piggies1000Container">
              <div className="Piggies1000TextContainer">
                <p>1000 piggies</p>
                <p>For subscription on PiggyHODL in telegram</p>
              </div>
              <button id="SubscribeButton" className={isHidden ? "opacity-0" : "opacity-100"} onClick={HideOverLay()}>
                Subscribe
              </button>
              <img className="pigWithTgLogo" src={PigWithTgLogo} />
            </div>
            <div className="bottomInfoContainer">
              <img className="fullPigSvg" src={FullPig} />
              <div className="bottomInfoContainerText">
                <p>Join the game</p>
                <button>Play piggygame</button>
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


