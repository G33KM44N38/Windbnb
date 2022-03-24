import React from 'react'
import { IoLocationSharp} from 'react-icons/io5'
import './HeaderModalLocation.css'

function HeaderModalLocation({place, setPlaceChoice}) {

  return (
    <div className='location-place'>
        {
            place?.map((place, index) => (
                <div key={index}  className='location-place-list' onClick={() => setPlaceChoice(place)}>
                    <IoLocationSharp className='location-icon'/>{place}
                </div>
        ))}
    </div>
  )
}

export default HeaderModalLocation