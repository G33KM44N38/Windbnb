import React, { useRef, useState} from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import HeaderModalLocation from './HeaderModalLocation/HeaderModalLocation'
import HeaderModalGuest from './HeaderModalGuest/HeaderModalGuest'
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

  return (
    <div>
      {showModal?
        <div className='header-overlay'  ref={modalRef} onClick={closeModal}>
          <div className='header-overlay-contents'>
            <div className='header-overlay-location' onClick={() => setMenu('locationList')}>
              <p>LOCATION</p>
              <input type="text" id="select-location" placeholder='choose a place' value={placeChoice} onChange={(e) => (e.target.value)}/>
              <input type="text" value="" onChange={(e) => (e.target.value)}/>
              {
                menu === 'locationList' ? <HeaderModalLocation place={place} setPlaceChoice={setPlaceChoice}/> : null
              }
            </div>
            <div className='header-overlay-guests' onClick={() => setMenu('guestList')}>
              <p>GUESTS</p>
              <input type="text" placeholder='Add Guest' value={numberGuest + ' guests'} onChange={(e) => (e.target.value)}/>
              {
                menu === 'guestList' ? 
                  <HeaderModalGuest 
                  setNumberGuest={setNumberGuest} 
                  numberGuest={numberGuest}
                  numberAdult={numberAdult}
                  setNumberAdult={setNumberAdult} 
                  numberChildren={numberChildren}
                  setNumberChildren={setNumberChildren}
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