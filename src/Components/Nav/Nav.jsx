import React, { useState } from 'react'
import "./Nav.css"
import logo from "../../assets/images/p.jpg"
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWhatshot } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { PiFarm } from "react-icons/pi";
import { MdOutlinePool } from "react-icons/md";
import { LuTentTree } from "react-icons/lu";
import { GiWoodCabin } from "react-icons/gi";
import { MdBedroomParent } from "react-icons/md";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaTreeCity } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';


function Nav() {
    let [visible , setvisible] = useState(false);
  return (
     <div id='Nav'>
         {visible?<div className="hamburger">
            <Link to={"/Login"}><div className="ham1">Login</div></Link>
            <Link to={"/Signup"}><div className="ham1">Sign up</div></Link>
            <Link to={"/Listing"}><div className="ham1">List your Home</div></Link>
            <Link to={"/Contact"}><div className="ham1">help Centre</div></Link>
         </div>:<div></div>}
         <div className="nav1">
             <Link to={""}><div className="logo">
                 <img src={logo} alt=""  width={50}/>
                 <h1>Private Property Rental</h1>
            </div></Link>

             <div className="search">
                 <input type='text' placeholder='search destination'></input>
                 <button><span>Search</span><CiSearch /></button>
             </div>
             <div className="ham">
                  <Link to={"/Listing"}><button id='btn1'>List your Home</button></Link>
                 <button id='btn2' onClick={() => {
                    setvisible(prev => !prev)
                 }}><GiHamburgerMenu id='svg1'/><CgProfile id='svg2'/></button>
             </div>
         </div>
         <div className="nav2">
            <NavLink to={""}><div className="svg11"><MdOutlineWhatshot /><h3>Trending</h3></div></NavLink>
            <NavLink to={"/Houses"}><div className="svg11"><GiFamilyHouse /><h3>Houses</h3></div></NavLink>
            <div className="svg11"><MdBedroomParent /><h3>Rooms</h3></div>
            <div className="svg11"><PiFarm /><h3>Farm Houses</h3></div>
            <div className="svg11"><MdOutlinePool /><h3>Pool Houses</h3></div>
            <div className="svg11"><LuTentTree /><h3>Tent Houses</h3></div>
            <div className="svg11"><GiWoodCabin /><h3>Cabins</h3></div>
            <div className="svg11"><SiHomeassistantcommunitystore /><h3>shops</h3></div>
            <div className="svg11"><FaTreeCity /><h3>Forest Houses</h3></div>
         </div>
     </div>
  )
}

export default Nav
