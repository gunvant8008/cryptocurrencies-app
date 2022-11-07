import React, { useContext, useRef } from "react"
import paginationArrow from "../assets/pagination-arrow.svg"
import { CryptoContext } from "../context/CryptoContext"
import submitIcon from "../assets/submit-icon.svg"

const PerPage = () => {
  const { setPerPage } = useContext(CryptoContext)

  const inputRef = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    let val = inputRef.current.value
    if (val !== 0) {
      setPerPage(val)
      inputRef.current.value = val
    }
  }

  return (
    <form onSubmit={handleSubmit} className=" relative flex items-center font-nunito mr-12">
      <label htmlFor="perpage" className="relative flex items-center justify-center mr-2 font-bold">
        Per Page:
      </label>
      <input ref={inputRef} type="number" min={1} max={250} placeholder="10" name="perpage" className=" w-16 rounded bg-gray-200 placeholder:text-gray-100 pl-2 required ouline-0 border border-transparent focus:border-cyan leading-4" />
      <button className=" ml-1 cursor-pointer">
        <img src={submitIcon} alt="submit" className=" w-full h-auto" />
      </button>
    </form>
  )
}

const Pagination = () => {
  let { page, setPage, totalPages, perPage, cryptoData } = useContext(CryptoContext)

  const TotalNumber = Math.ceil(totalPages / perPage)

  const next = () => {
    if (page === TotalNumber) {
      return null
    } else {
      setPage(page + 1)
    }
  }

  const previous = () => {
    if (page === 1) {
      return null
    } else {
      setPage(page - 1)
    }
  }

  const multiStepNext = () => {
    if (page + 3 >= TotalNumber) {
      setPage(TotalNumber - 1)
    } else {
      setPage(page + 3)
    }
  }

  const multiStepPrev = () => {
    if (page - 3 <= 1) {
      setPage(page - 1)
    } else {
      setPage(page - 2)
    }
  }

  if (cryptoData && cryptoData.length >= perPage) {
    return (
      <div className="flex items-center">
        <PerPage />
        <ul className=" flex items-center justify-end text-sm">
          <li className="flex items-center">
            <button onClick={previous} className="outline-0 hover:text-cyan w-8">
              <img src={paginationArrow} alt="left" className="w-full h-auto rotate-180" />
            </button>
          </li>

          {page - 3 > 0 ? (
            <li>
              <button onClick={multiStepPrev} className="outline-0 hover:text-cyan text-lg w-8 h-8 flex items-center justify-center">
                ...
              </button>
            </li>
          ) : null}

          {page - 1 !== 0 ? (
            <li>
              <button onClick={previous} className="outline-0 hover:text-cyan mx-1.5 bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                {page - 1}
              </button>
            </li>
          ) : null}
          <li>
            <button disabled className="outline-0 mx-1.5 bg-cyan text-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
              {page}
            </button>
          </li>
          <li>
            <button onClick={next} className="outline-0 hover:text-cyan mx-1.5 bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
              {page + 1}
            </button>
          </li>
          {page + 1 !== TotalNumber && page !== TotalNumber ? (
            <li>
              <button onClick={multiStepNext} className="outline-0 hover:text-cyan rounded-full text-lg w-8 h-8 flex items-center justify-center ">
                ...
              </button>
            </li>
          ) : null}
          {page !== TotalNumber && page + 1 !== TotalNumber ? (
            <li>
              <button onClick={() => setPage(TotalNumber)} className="outline-0 hover:text-cyan mx-1.5 bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                {TotalNumber}
              </button>
            </li>
          ) : null}
          <li className="flex items-center">
            <button onClick={next} className="outline-0 hover:text-cyan w-8">
              <img src={paginationArrow} alt="right" className="w-full h-auto" />
            </button>
          </li>
        </ul>
      </div>
    )
  } else {
    return null
  }
}

export default Pagination
