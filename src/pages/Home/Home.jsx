import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import { Coincontext } from '../../context/Coincontext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { allcoin, currency } = useContext(Coincontext);
  const [displaycoin, setdisplaycoin] = useState([]);
  const [input, setinput] = useState("");

  const inputhandler = (e) => {
    setinput(e.target.value);
    if (e.target.value === '') {
      setdisplaycoin(allcoin);
    } else {
      const coins = allcoin.filter((data) => {
        return data.name.toLowerCase().includes(e.target.value.toLowerCase());
      });
      setdisplaycoin(coins);
    }
  };

  useEffect(() => {
    setdisplaycoin(allcoin);
  }, [allcoin]);

  return (
    <div className='home'>
      <div className="hero">
        <h1>Largest <br />Crypto Marketplace</h1>
        <p>Welcome to the world's largest cryptocurrency marketplace.</p>
        <form className="search-form">
          <input
            type="text"
            list='coinlist'
            placeholder='Search crypto ..'
            value={input}
            onChange={inputhandler}
            required
          />

          <datalist id='coinlist'>
            {displaycoin.map((data, index) => (
              <option key={index} value={data.name} />
            ))}
          </datalist>

          <button type="button">Search</button>
        </form>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Coins</th>
                <th>Price</th>
                <th>24H Change</th>
                <th>Market Cap</th>
              </tr>
            </thead>
            <tbody>
              {displaycoin.slice(0, 10).map((coin, index) => (
                <tr key={coin.id}>
                  <td>{index + 1}</td>
                  <td>
                    <Link to={`/coin/${coin.id}`} className="coin-link">
                      <img src={coin.image} alt={coin.name} className='coin-image' style={{width:'30px', height:"30px"}} />
                      <p>{coin.name}</p>
                    </Link>
                  </td>
                  <td>{currency.symbol}{coin.current_price}</td>
                  <td className={coin.price_change_percentage_24h > 0 ? 'positive' : 'negative'}>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </td>
                  <td>{currency.symbol}{coin.market_cap.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
