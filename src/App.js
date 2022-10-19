import React, { useState, useEffect } from "react";
import axios from "axios";
import {Routes, Route} from 'react-router-dom'
import Coins from './components/Coins'
import Coin from   './route/Coin'
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [coins, setCoins] = useState([]);
 const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false";   
  useEffect(() => {
    async function data(){
      let resp = await axios.get(url);
      setCoins(resp.data);
      console.log(resp.data);
    };
    data()
  }, []);

  return(
   <>
  <Navbar />
      <Routes>
        <Route path='/' element={<Coins coins={coins} />} />
        <Route path='/coin' element={<Coin />}>
          <Route path=':coinId' element={<Coin />} />
        </Route>
      </Routes>
  </>
  )
}

export default App;
