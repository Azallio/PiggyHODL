import { NavLink } from "react-router";
import "tailwindcss"

import PigForHeader from "../assets/PigForHeader.svg"
import FourDotsForHeader from "../assets/FourDotsForHeader.svg"

import "../css/index.css"

function Header() {
  return (
    <>
      <header className="w-360 h-22.5 justify-between py-3 px-16 hankenGrotesk bg-[#FFFFF] flex font-semibold" >
        <section className="w-175 h-16 gap-11 flex items-center">
          <NavLink to="/"><img className="h-16.5 w-16.5 top-2 left-1.25" src={PigForHeader} alt="Logo" /></NavLink>
          <NavLink to="/game-rules" className="w-24 h-5 gap-12 leading-5 tracking-0 uppercase text-[#212121] hover:opacity-[50%] hover:border-b duration-150">GAME RULES</NavLink>
        </section>
        <section className="flex w-[262px] h-[66px] p-2 pr-6 gap-3 items-center rounded-[40px] border border-[#F6F6F6]">
          <NavLink to="tg://resolve?domain=test_piggygame_bot" className=" bg-[#FFBFFB] w-[186px] h-[50px] flex justify-center items-center gap-1 rounded-[40px] lending-[18px] tracking-[0.01em] uppercase text-[#212121] hover:opacity-[50%] duration-150">Join the game</NavLink>
          <img className="h-8" src={FourDotsForHeader} alt="FourDots" />
        </section>
      </header>
    </>
  )
} 

export default Header;