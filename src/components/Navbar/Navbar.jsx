import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png';
import icon from '../../assets/arrow_icon.png';
import { Coincontext } from '../../context/Coincontext';
import { Link } from 'react-router-dom';


const Navbar = () => {

    const {setcurrency}=useContext(Coincontext);

    const currencyhandler=(e)=>{
        switch(e.target.value)
        {
            case "usd":{
                setcurrency({name:"usd",symbol:"$"});
                break;
            }
            case "eur":{
                setcurrency({name:"eur",symbol:"E"});
                break;
            }
            case "cad":{
                setcurrency({name:"usd",symbol:"cad"});
                break;
            }
            default:{
                setcurrency({name:"usd",symbol:"$"});
            }
        }
    }

  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className="nav-right">
            <select name="" id="" onChange={currencyhandler}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="cad">CAD</option>
            </select>
            <button>Sign Up
                <img src={icon} alt="" />
            </button>
        </div>
    </div>
  )
}

export default Navbar