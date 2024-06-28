import React, { useContext, useEffect, useState } from 'react';
import './Coin.css';
import { useParams } from 'react-router-dom';
import { Coincontext } from '../../context/Coincontext';
import LineChart from '../../components/LineChart/LineChart';

const Coin = () => {
  const { currency } = useContext(Coincontext);
  const { coindId } = useParams();
  const [coinData, setCoinData] = useState();
  const [coinDataChart, setCoinDataChart] = useState();

  const fetchdata = () => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-JBYPLCZ5kfqDqgzonggcoLt5' }
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coindId}`, options)
      .then(response => response.json())
      .then(response => setCoinData(response))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchdata();
  }, [currency, coindId]);

  const fetchdatbychart = () => {
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-JBYPLCZ5kfqDqgzonggcoLt5' }
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coindId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
      .then(response => response.json())
      .then(response => setCoinDataChart(response))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchdatbychart();
  }, [currency, coindId]);

  return (
    <div className="coin-container">
      {coinData && coinDataChart ? (
        <div>
          <div className="coin-header">
            <h3>{coinData.name}</h3>
            <img src={coinData.image.large} alt={coinData.name} className='coin-image' style={{width:'75px' , height:"75px"}}/>
          </div>

          <div className="coin-chart">
            <LineChart coinDataChart={coinDataChart} />
          </div>

          <div className="coin-data">
            <div className="coin-data-item">
              <h3>Market Cap Rank: {coinData.market_cap_rank}</h3>
            </div>
            <div className="coin-data-item">
              <h3>Current Price: {currency.symbol}{coinData.market_data.current_price[currency.name]}</h3>
            </div>
            <div className="coin-data-item">
              <h3>Market Cap: {currency.symbol}{coinData.market_data.market_cap[currency.name].toLocaleString()}</h3>
            </div>
            <div className="coin-data-item">
              <h3>24h High: {currency.symbol}{coinData.market_data.high_24h[currency.name]}</h3>
            </div>
            <div className="coin-data-item">
              <h3>24h Low: {currency.symbol}{coinData.market_data.low_24h[currency.name]}</h3>
            </div>
          </div>
        </div>
      ) : (
        <h3>Data not available</h3>
      )}
    </div>
  );
};

export default Coin;
