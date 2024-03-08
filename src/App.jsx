import { useState , useEffect} from "react";
import "./App.css";
import Advertisement from "./Components/Advertisement/Advertisement";
import Navbar from "./Components/Navbar/Navbar";
import TradingViewWidget from "./Components/TradingWidget/TradingViewWidget";
import Panel from "./Components/Panel/Panel";
import Performance from "./Components/Performance/Performance";
import Trending from "./Components/Trending/Trending";
import btc from '../src/assets/pngs/btc.png'
import TeamSection from "./Components/TeamSection/TeamSection";
import PerformanceSection from "./Components/PerformanceSection/PerformanceSection";
import { TrendingGraphs } from "./Components/TrendingGraphs/TrendingGraphs";
import Sentiment from "./Components/Sentiment/Sentiment";
import About from "./Components/About/About";
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
      <div className="flex mt-10 justify-around bg-bggreen max-xl:flex-col ">
        <div className="col1 ">
          <div className="flex-col">
            <div className="flex">
            <img src={btc} className="p-2 my-2"/>
            <div className="flex justify-center items-center text-2xl
            font-semibold">Bitcoin</div>
            </div>
          <TradingViewWidget />
          </div>
          <Panel />
          <PerformanceSection/>
          <Performance />
          <Sentiment/>
          <About/>
          {/* <Tokenomics/> */}
          <TeamSection/>
        </div>
        <div className="max-lg:justify-center max-lg:items-center">
          <Advertisement />
          <Trending />
        </div>
        
      </div>
      <div className="m-3">
      <div className=' text-2xl font-semibold px-8'>
      You MAy Also Like
      </div>
      <TrendingGraphs/>
      </div>
    <div className="m-3">
      <div className=' text-2xl font-semibold px-8'>
      Trending Coins
      </div>
      <TrendingGraphs/>
      </div>
    </>
  );
}

export default App;
