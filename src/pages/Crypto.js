import React from "react"
import { Outlet } from "react-router-dom"
import Filter from "../components/Filter"
import TableComponent from "../components/TableComponent"

const Crypto = () => {
  return (
    <section className="xs:w-[80%] w-[90%] h-full flex flex-col lg:mt-16 mt-8 mb-24 relative ">
      <Filter />
      <TableComponent />
      <Outlet />
    </section>
  )
}

export default Crypto
