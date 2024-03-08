import React from 'react'
import { useEffect, useState } from 'react';
import TrendingCards from '../Card/TrendingCards';
export const TrendingGraphs = () => {
const [datas, setDatas] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const data = await response.json();
        setDatas(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    // console.log(datas);
  }, []);
  return (
    
    <div className='flex-col justify-between p-2 mx'>
        <div className='flex'>
      {datas &&
        datas.coins.slice(0, 7).map((coin, index) => (
          <TrendingCards
            key={index}
            name={coin.item.name}
            imgurl={coin.item.small}
            change={coin.item.data.price_change_percentage_24h.usd.toFixed(2)}
            currprice={coin.item.data.price}
            graphurl={coin.item.data.sparkline}
          />
        ))}
        </div>
      </div>
  )
}
