import Footer from "../page-components/footer"
import Header from "../page-components/header"

import PigWithTgLogo from "../assets/PigWithTgLogo.svg"
import FullPig from "../assets/FullPig.svg"

import "../css/scoreboard.css"
import getData from "../api/requests"



// async function getUser() {
//   getData()
//     .then((res) => {
//       console.log(res)
//     })
// }
export default function Scoreboard() {
  // getUser()
  return (
    <>
      <Header />
      <main>
        <section className="scoreBoard">
          <article>
            <div className="titleScoreboard">
              <p>Scoreboard</p>
              <div className="quantityPretendents">
                <p></p>
              </div>
            </div>
            <div className="scoreBoardList">
              { }
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


