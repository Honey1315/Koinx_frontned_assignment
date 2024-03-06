import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
const Trending = () => {
  const [datas, setDatas] = useState(null);
  const [logourl, setLogourl] = useState([]);
  const [names, setNames] = useState([]);
  const [change24hr, setChange24hr] = useState([]);
  const myHeaders = new Headers();
  myHeaders.append(
    "Cookie",
    "__cf_bm=Uq4phc.cFPLlCrxZs.EKlGBpKWr1AJtK_7.jO4ECWHw-1709658446-1.0.1.1-_p7qvZP6waYUPBjlD2eSvuYO_XR8vFhZwq9MIKLT_oqXaVSOy4nHDVqbyhgJYWERKOC_VV93.MmjjtWMwSbRBQ"
  );
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/search/trending",
          requestOptions
        );
        const data = await response.json();
        setDatas(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  const newNames = [];
  const urls=[];
  const change=[];
  useEffect(() => {
    console.log(datas);
    // console.log("OK");
    if (datas && datas.coins.length > 0) {
      // console.log(datas.coins[0].item.id);
      for (let i = 0; i < 3; i++) {
        newNames.push(datas.coins[i].item.name);
        urls.push(datas.coins[i].item.small);
        const stringValue = datas.coins[i].item.data.price_change_percentage_24h.usd;
        const Value = parseFloat(stringValue);
        const rounded=Value.toFixed(2);
        change.push(rounded);
      }
    }
    setNames(newNames);
    // setChange24hr(change);
    setLogourl(urls);
    console.log(change);
  }, [datas]);

  return (
    <div className="flex flex-col 
    p-4">
      <div className="font-semibold text-2xl">
        Trending Coins (24h)
      </div>
        {names.map((item, index) => (
          <Card key={index} name={item} imgurl={logourl[index]} change={change24hr[index]}/>
        ))}
    </div>
  );
};
export default Trending;
