import React from 'react'
import './Header.css'
import { AiOutlineSearch } from 'react-icons/ai'
const logo = require("../../assets/logo.png");

function Header() {
  return (
    <div className='header-box'>
      <div className='logo' >
        <img src={logo} alt="logo" />
      </div>
      <div className='resaerch-fields'>
        <select id="selected-location">
          <option value="Helsinki, Finland">Helsinki, Finland</option>
        </select>
        <input type="text" id='input-guest' placeholder="Add guests"/>
        <AiOutlineSearch className='loupe'/>
      </div>
    </div>
  )
}

export default Header