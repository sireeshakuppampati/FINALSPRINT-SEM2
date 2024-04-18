import './Navbar.css';
//import homebanner from '../Assets/homebanner.jpeg'
import ban from '../Assets/ban.webp'
import logo from '../Assets/logo.png'
import { FaSearch } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { FaCanadianMapleLeaf } from "react-icons/fa6";
import { useState } from 'react';
import { GiHearts } from "react-icons/gi";
import { BsFillHeartFill } from "react-icons/bs";
import { BsBalloonHeartFill } from "react-icons/bs";


const Navbar = () => {
const [menu,setMenu] = useState("shop");

//const [scrollPosition,setScrollPosition] = useState("image");
  return (
    <>
    <div className="topsection">
      <div className="smallbar">
        <p>
          Save <span style={{color:'yellow'}}> 30% </span>on select 2024 <br />
          Find trusted brands at unbelievable prices in our Outlet Sale.
        </p>
        <bold>TECH THINKERS</bold>
        <button id='btn1'>SHOP NOW</button>
      </div>
      </div>
        <div className="navbar1">
          <div className="nav-logo">
            <img src={logo} alt=" " />
            <p>SHOPPER</p>
          </div>
          
          <div className="searchbar">
            <input type="search" name="search" placeholder="Search Tech Thinkers"/>
            <button className='bt2'>< FaSearch  style={{color:'red', cursor:'pointer'}}/></button>
          </div> 
          <div >
          < FaCanadianMapleLeaf  style={{color:'red',height:'40px',width:'30px',margin:'5px',}}/>
          <select>
            <option value="english">ENGLISH</option>
            <option value="french">FRENCH</option>
          </select>
          </div>
          <div className="iconSection1">
          <VscAccount />
          <a href="login.jsx">Account</a>
          </div>
          <div className="iconSection2"> 
             < BsCart  />
           
            <a href="cart.jsx">Cart</a>
            <div className="cartCount">0</div>
          </div>
        </div>
      <div className='navbar2'>
        <ul className='nav-menu'>
          <li onClick={ () =>{setMenu("shop")}}>HOME{menu==="shop"?<hr/>:<></>}</li>
          <li onClick={ () =>{setMenu("products")}}>PRODUCTS{menu==="products"?<hr/>:<></>}</li>
          <li onClick={ () =>{setMenu("cart")}}>CART{menu==="cart"?<hr/>:<></>}</li>
          <li onClick={ () =>{setMenu("checkout")}}>CHECK OUT{menu==="checkout"?<hr/>:<></>}</li>
        </ul>
        <div><button id='btn1' style={{float:'right'}}>Login</button></div>
      </div>
      <div className='mainBox1'>
        <img style={{height:'400px',width:'800px'}} src={ban} alt="home" />
        <div className="caption"> 
        <GiHearts  style={{color:'red', height:'60px', width:'30px'}}/>
        <BsFillHeartFill   style={{color:'red', height:'50px',width:'40px'}}/>
        <BsBalloonHeartFill  style={{color:'red', height:'80px',width:'40px'}}/>
        <p style={{float:'right'}}>
          <h1>Discover <span style={{color:'red'}}> Mother's Day</span> gifts at great prices.</h1>
          <h3>Celebrate Mother's Day on Sunday, May 12 with these top picks and more gift ideas below.</h3>
        </p>
        </div>
      </div>
    </>
  )
}

export default Navbar;
