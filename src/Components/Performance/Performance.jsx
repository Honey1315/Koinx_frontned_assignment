import React, { useEffect } from 'react'
import { useState } from 'react'
const Performance = () => {
  const [datas, setDatas] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true"
        );
        const data = await response.json();
        setDatas(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  console.log(datas);
  return (
    <>
    <div>
        
    </div>
    </>
  )
}

export default Performance