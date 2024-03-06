import React, { useState, useEffect } from "react";
import Card from "../Card/Card";

const Trending = () => {
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
  }, []);

  return (
    <div className="flex flex-col p-4">
      <div className="font-semibold text-2xl">Trending Coins (24h)</div>
      {datas &&
        datas.coins.slice(0, 3).map((coin, index) => (
          <Card
            key={index}
            name={coin.item.name}
            imgurl={coin.item.small}
            change={coin.item.data.price_change_percentage_24h.usd.toFixed(2)}
          />
        ))}
    </div>
  );
};

export default Trending;
