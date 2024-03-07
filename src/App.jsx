import { useState , useEffect} from "react";
import "./App.css";
import Advertisement from "./Components/Advertisement/Advertisement";
import Navbar from "./Components/Navbar/Navbar";
import TradingViewWidget from "./Components/TradingWidget/TradingViewWidget";
import Panel from "./Components/Panel/Panel";
import Performance from "./Components/Performance/Performance";
import Trending from "./Components/Trending/Trending";
import btc from '../src/assets/pngs/btc.png'
function App() {
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
      <Navbar />
      <div className="mainContainer">
        <div className="col1">
          <div className="flex-col">
            <div className="flex">
            <img src={btc} className="border border-red-500 p-2 my-2"/>
            <div className="flex justify-center items-center">Bitcoin</div>
            </div>
          <TradingViewWidget />
          </div>
          <Panel />
          <Performance />
          <TeamSection/>
        </div>
        <div>
          <Advertisement />
          <Trending />
        </div>
      </div>
    </>
  );
}

export default App;
