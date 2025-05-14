import { NavLink } from "react-router";
import "tailwindcss"

import PigForHeader from "../assets/PigForHeader.svg"
import FourDotsForHeader from "../assets/FourDotsForHeader.svg"

import "../css/page-components-css/header.css"

function Header() {
  return (
    <>
      <header>
        <section className="GRContainer">
          <NavLink to="/"><img className="Logo" src={PigForHeader} alt="Logo" /></NavLink>
          <NavLink to="/game-rules" className="GRNavlinkText hover:opacity-[50%] hover:border-b duration-150">GAME RULES</NavLink>
        </section>
        <section className="JTGContainer">
          <NavLink to="tg://resolve?domain=test_piggygame_bot" className="JTGNavlink hover:opacity-[50%] duration-150">Join the game</NavLink>
          <img className="FourDots" src={FourDotsForHeader} alt="FourDots" />
        </section>
      </header>
    </>
  )
}

export default Header;