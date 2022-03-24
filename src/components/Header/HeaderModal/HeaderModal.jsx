import React, { useRef, useState} from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import HeaderModalLocation from './HeaderModalLocation/HeaderModalLocation'
import HeaderModalGuest from './HeaderModalGuest/HeaderModalGuest'
import getAllCountries from '../../../library/Search'
import './HeaderModal.css'

function HeaderModal({showModal, setShowModal, place, numberGuest, setNumberGuest, placeChoice, setPlaceChoice}) {

  const modalRef = useRef();

  const [menu, setMenu] = useState('locationList');
  const [numberAdult, setNumberAdult] = useState(0)
  const [numberChildren, setNumberChildren] = useState(0)

  const closeModal = e => {
    if(modalRef.current === e.target) {
      setShowModal(false)
    }
  }
  
  const Search = (e) => {
    setPlaceChoice(e.target.value) 
    console.log(place.data.indexOf(placeChoice));
  }

  return (
    <div>
      {showModal?
        <div className='header-overlay'  ref={modalRef} onClick={closeModal}>
          <div className='header-overlay-contents'>
            <div className='header-overlay-location' onClick={() => setMenu('locationList')}>
              <p>LOCATION</p>
              <input type="text" id="select-location" placeholder='choose a place' onChange={(e) => Search(e)} value={placeChoice}/>
              {
                menu === 'locationList' ? <HeaderModalLocation place={place} setPlaceChoice={setPlaceChoice}/> : null
              }
            </div>
            <div className='header-overlay-guests' onClick={() => setMenu('guestList')}>
              <p>GUESTS</p>
              <div id="guest-input">
                {numberGuest + ' guests'}
              </div>
              {
                menu === 'guestList' ? 
                  <HeaderModalGuest 
                  numberGuest={numberGuest} setNumberGuest={setNumberGuest}
                  numberAdult={numberAdult} setNumberAdult={setNumberAdult} 
                  numberChildren={numberChildren} setNumberChildren={setNumberChildren}
                  />
                : null
              }
            </div>
            <div className='header-overlay-button'>
              <button className='search-button' onClick={() => setShowModal(false)}>
                <AiOutlineSearch/>
                SEARCH
             </button>
            </div>
          </div> 
        </div>
      : null}
    </div>
  )
}

export default HeaderModal