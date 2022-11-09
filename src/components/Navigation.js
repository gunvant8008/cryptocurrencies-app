import React from "react"
import { NavLink } from "react-router-dom"

const Navigation = () => {
  return (
    <nav className="lg:w-[40%] sm:w-[80%] w-[90%] flex justify-around align-middle lg:mt-16 sm:mt-24 mt-20 border border-solid border-cyan sm:rounded-lg rounded-md">
      <NavLink
        to="/"
        end
        className={({ isActive }) => {
          return `w-full text-base font-nunito text-center m-2.5 
          ${isActive ? "bg-cyan text-gray-300" : "bg-gray-200 text-gray-100 hover:text-cyan active:bg-cyan active:text-gray-300  "}
          border-0  cursor-pointer capitalize font-semibold rounded
          `
        }}
      >
        Crypto
      </NavLink>
      <NavLink
        to="/trending"
        className={({ isActive }) => {
          return `w-full text-base font-nunito text-center m-2.5 border-0  cursor-pointer capitalize font-semibold rounded
          ${isActive ? "bg-cyan text-gray-300" : "bg-gray-200 text-gray-100 hover:text-cyan active:bg-cyan active:text-gray-300  "}
          `
        }}
      >
        Trending
      </NavLink>
      <NavLink
        to="/saved"
        className={({ isActive }) => {
          return `w-full text-base font-nunito text-center m-2.5 border-0  cursor-pointer capitalize font-semibold rounded
          ${isActive ? "bg-cyan text-gray-300" : "bg-gray-200 text-gray-100 hover:text-cyan active:bg-cyan active:text-gray-300  "}
          `
        }}
      >
        Saved
      </NavLink>
    </nav>
  )
}

export default Navigation
