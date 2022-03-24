import React from 'react'
import { IoLocationSharp} from 'react-icons/io5'
import './HeaderModalLocation.css'

function HeaderModalLocation({place, setPlaceChoice}) {

  return (
    <div className='location-place'>
        {
            place?.map(({common}, index) => (
                <div key={index}  className='location-place-list' onClick={() => setPlaceChoice(place[index].name.common)}>
                    <IoLocationSharp className='location-icon'/>{place[index].name.common}
                </div>
        ))}
    </div>
  )
}

export default HeaderModalLocation