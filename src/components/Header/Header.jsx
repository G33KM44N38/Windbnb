import React, {useState} from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import HeaderModal from './HeaderModal/HeaderModal';
import './Header.css'
const logo = require("../../assets/logo.png");

var place = [
  {
    name: 'Helsinki, finland',
  },
  {
    name: 'Turkuu, finland',
  },
  {
    name: 'Oulu, finland',
  },
  {
    name: 'Vaasa, finland',
  },
]

function Header() {

  const [showModal, setShowModal] = useState(false)
  const [numberGuest, setNumberGuest]  = useState(0);
  const [placeChoice, setPlaceChoice] = useState('');

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <div>
      <HeaderModal 
      showModal={showModal} 
      setShowModal={setShowModal} 
      place={place} 
      numberGuest={numberGuest} 
      setNumberGuest={setNumberGuest}
      placeChoice={placeChoice}
      setPlaceChoice={setPlaceChoice}
      />
      <div className='header-box'>
        <div className='logo' >
          <img src={logo} alt="logo" />
        </div>
        <div onClick={() => openModal()} className='resaerch-fields'>
          <div id="selected-location">
            {placeChoice? placeChoice: "Choose a place"}
          </div>
          <input type="text" id='input-guest' placeholder="Add guests" value={numberGuest + ' guests'}/>
          <AiOutlineSearch className='loupe'/>
        </div>
      </div>
           
    </div>
  )
}

export default Header