import Footer from "../page-components/footer"
import Header from "../page-components/header"

import PigWithTgLogo from "../assets/PigWithTgLogo.svg"
import FullPig from "../assets/FullPig.svg"

import "../css/scoreboard.css"
import getPretendentArray from "../modules/render-pretendent"

const Scoreboard = () => {
  return (
    <>
      <Header />
      <main>
        <section className="scoreBoard">
          <article>
            <div className="titleScoreboard">
              <p>Scoreboard</p>
              <div className="quantityPretendents">
                <p> pretenders</p>
              </div>
            </div>
            <div className="scoreBoardList">
              {getPretendentArray().map((pretendent, id) => {
                return <div key={id} className="w-[533px] h-[84px] rounded-[25px] py-[12px] px-[20px] flex flex-col gap-[12px]">
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
              <button className="SubscribeButton">
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


