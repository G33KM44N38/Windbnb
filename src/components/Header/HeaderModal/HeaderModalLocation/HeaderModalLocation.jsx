import React from 'react'
import { IoLocationSharp} from 'react-icons/io5'
import './HeaderModalLocation.css'

function HeaderModalLocation({place, setPlaceChoice}) {

  return (
    <div className='location-place'>
        {
            place?.map(({name}) => (
                <div  className='location-place-list' onClick={() => setPlaceChoice(name)}>
                    <IoLocationSharp className='location-icon'/>{name}
                </div>
        ))}
    </div>
  )
}

export default HeaderModalLocation