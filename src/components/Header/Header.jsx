import React, {useState, useEffect} from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import HeaderModal from './HeaderModal/HeaderModal';
import getAllCountries from '../../library/Search';
import './Header.css'

const logo = require("../../assets/logo.png");

function Header() {

  const [showModal, setShowModal] = useState(false)
  const [numberGuest, setNumberGuest]  = useState(0);
  const [placeChoice, setPlaceChoice] = useState('');
  const [place, setPlace] = useState([]);

  const openModal = () => {
    setShowModal(prev => !prev);
  };

  useEffect(() => {
    setPlace(() => getAllCountries())
  }, [])

  return (
    <div>
      <HeaderModal 
      showModal={showModal} setShowModal={setShowModal} 
      place={place}
      numberGuest={numberGuest} setNumberGuest={setNumberGuest}
      placeChoice={placeChoice} setPlaceChoice={setPlaceChoice}
      />
      <div className='header-box'>
        <div className='logo' >
          <img src={logo} alt="logo" />
        </div>
        <div onClick={() => openModal()} className='resaerch-fields'>
          <div id="selected-location">
            {placeChoice? placeChoice: "destination"}
          </div>
          <input type="text" id='input-guest' placeholder="Add guests" value={numberGuest + ' guests'} onChange={(e) => (e.target.value)}/>
          <AiOutlineSearch className='loupe'/>
        </div>
      </div>
           
    </div>
  )
}

export default Header