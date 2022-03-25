import React from 'react'
import { IoLocationSharp} from 'react-icons/io5'
import './HeaderModalLocation.css'

function HeaderModalLocation({ArrayOfDestinationFiltered, setPlaceChoice}) {



  return (
    <div className='location-place'>
        {
            ArrayOfDestinationFiltered?.map((ArrayOfDestinationFiltered, index) => (
                <div key={index}  className='location-place-list' onClick={() => setPlaceChoice(ArrayOfDestinationFiltered)}>
                    <IoLocationSharp className='location-icon'/>{ArrayOfDestinationFiltered}
                </div>
        ))}
    </div>
  )
}

export default HeaderModalLocation