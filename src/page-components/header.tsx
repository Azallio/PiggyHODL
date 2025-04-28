import { NavLink } from "react-router";
import "tailwindcss"

import PigForHeader from "../assets/PigForHeader.svg"
import FourDotsForHeader from "../assets/FourDotsForHeader.svg"

function Header() {
  return (
    <>
      <header>
        <section className="GRContainer">
          <NavLink to="/"><img className="Logo" src={PigForHeader} alt="Logo" /></NavLink>
          <NavLink to="game-rules" className="GRNavlinkText">GAME RULES</NavLink>
        </section>
        <section className="JTGContainer">
          <NavLink to="" className="JTGNavlink"><p className="JTGNavlinkText">Join the game</p></NavLink>
          <img className="FourDots" src={FourDotsForHeader} alt="FourDots" />
        </section>
      </header>
    </>
  )
}

export default Header;