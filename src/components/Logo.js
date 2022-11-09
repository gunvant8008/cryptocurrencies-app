import React from "react"
import { Link } from "react-router-dom"
import logoSvg from "../assets/logo.svg"

const Logo = () => {
  return (
    <Link to="/" className=" absolute sm:top-[1.5rem] top-[1rem] sm:left-[1.5rem] left-[1rem] [text-decoration: none] sm:text-lg text-md text-cyan flex cursor-pointer items-center ">
      <img src={logoSvg} alt="Crypto Screener" />
      <span>Crypto-Screener</span>
    </Link>
  )
}

export default Logo
