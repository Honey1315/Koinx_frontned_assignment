import { useState } from "react";
import "./App.css";
import Advertisement from "./Components/Advertisement/Advertisement";
import Navbar from "./Components/Navbar/Navbar";
import TradingViewWidget from "./Components/TradingWidget/TradingViewWidget";
import Panel from "./Components/Panel/Panel";
import Performance from "./Components/Performance/Performance";
import Trending from "./Components/Trending/Trending";
function App() {
  return (
    <>
      <Navbar />
      <div className="mainContainer">
        <div className="col1">
          <TradingViewWidget />
          <Panel />
          <Performance />
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
