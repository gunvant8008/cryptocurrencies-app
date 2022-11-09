import debounce from "lodash.debounce"
import React, { useContext, useState } from "react"
import searchIcon from "../assets/search-icon.svg"
import { CryptoContext } from "../context/CryptoContext"

const SearchInput = ({ handleSearch }) => {
  const [searchText, setSearchText] = useState("")
  let { searchData, setCoinSearch, setSearchData } = useContext(CryptoContext)

  let handleInput = e => {
    e.preventDefault()
    let query = e.target.value
    setSearchText(query)
    handleSearch(query)
  }

  const handleSubmit = e => {
    e.preventDefault()
    handleSearch(searchText)
  }

  const selectCoin = coin => {
    setCoinSearch(coin)
    setSearchText("")
    setSearchData()
  }

  return (
    <>
      <form onSubmit={handleSubmit} className=" xl:w-96 lg:w-60 w-full relative flex items-center lg:ml-7 font-nunito">
        <input onChange={handleInput} value={searchText} type="text" name="search" placeholder="search here..." className=" w-full rounded bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0 border focus:border-cyan border-transparent" />
        <button type="submit" className="absolute right-1 cursor-pointer">
          <img src={searchIcon} alt="search" className="w-full h-auto" />
        </button>
      </form>

      {searchText.length > 0 ? (
        <ul className=" absolute top-11 right-0 w-96 h-96 rounded bg-gray-200 backdrop-blur-sm bg-opacity-50 overflow-x-hidden py-2 scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-gray-200">
          {searchData ? (
            searchData.map(coin => {
              return (
                <li key={coin.id} onClick={() => selectCoin(coin.id)} className="flex items-center ml-4 my-2 cursor-pointer">
                  <img src={coin.thumb} alt={coin.name} className="w-[1rem] h-[1rem] mx-1.5" />
                  <span>{coin.name}</span>
                </li>
              )
            })
          ) : (
            <div className=" w-full h-full flex justify-center items-center">
              <div className=" w-8 h-8 border-4 border-cyan rounded-full border-b-gray-100 animate-spin" role="status" />
              <span className="ml-2">Searching...</span>
            </div>
          )}
        </ul>
      ) : null}
    </>
  )
}

const Search = () => {
  let { getSearchResult } = useContext(CryptoContext)

  // creating a debounce fn for efficiency using lodash library
  const debounceFn = debounce(function (val) {
    getSearchResult(val)
  }, 1000)

  return (
    <div className="relative">
      <SearchInput handleSearch={debounceFn} />
    </div>
  )
}

export default Search
