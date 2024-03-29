import React from "react"
import { useNavigate } from "react-router-dom"

const TrendingCoin = ({ data }) => {
  let navigate = useNavigate()

  const getCoinDetails = id => {
    navigate(`${id}`)
  }

  return (
    <div onClick={() => getCoinDetails(data.item.id)} className=" lg:w-[40%] sm:w-[60%] w-[80%] bg-gray-200 mb-12 last:mb-0 rounded-lg p-4 relative cursor-pointer hover:bg-gray-100 hover:bg-opacity-40">
      {data ? (
        <>
          <h3 className=" text-base flex items-center my-0.5 gap-2">
            <span className=" capitalize text-gray-100">name: </span>
            <span className="text-cyan">{data.item.name}</span>
            <img src={data.item.small} alt={data.name} className=" w-[1.5rem] h-[1.5rem] mx-1.5 rounded-full" />
          </h3>
          <h3 className=" text-base flex items-center my-0.5 gap-2">
            <span className=" capitalize text-gray-100">Market Cap Rank: </span>
            <span className="text-cyan">{data.item.market_cap_rank}</span>
          </h3>
          <h3 className=" text-base flex items-center my-0.5 gap-2">
            <span className=" capitalize text-gray-100">Price: </span>
            <span className="text-cyan">
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "btc",
                maximumSignificantDigits: 3
              }).format(data.item.price_btc)}
            </span>
          </h3>
          <h3 className=" text-base flex items-center my-0.5 gap-2">
            <span className=" capitalize text-gray-100">Score: </span>
            <span className="text-cyan">{data.item.score}</span>
          </h3>
        </>
      ) : (
        <div className=" w-full h-full flex justify-center items-center">
          <div className=" w-8 h-8 border-4 border-cyan rounded-full border-b-gray-100 animate-spin" role="status" />
          <span className="ml-2">Please wait...</span>
        </div>
      )}
    </div>
  )
}

export default TrendingCoin
