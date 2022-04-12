import React, {useState} from 'react';
import './Body.css';
import image1 from '../../assets/StaysPicture/image1.jpeg';
import image2 from '../../assets/StaysPicture/image2.jpeg';
import image3 from '../../assets/StaysPicture/image3.jpeg';
import image4 from '../../assets/StaysPicture/image4.jpeg';
import image5 from '../../assets/StaysPicture/image5.jpeg';
import image6 from '../../assets/StaysPicture/image6.jpeg';
import {RiStarSFill} from 'react-icons/ri';
import Modal from '../modal/Modal';

const place = [
  {
    image: image1,
    superHost: true,
    type: 'Entire apartment. 2 beds',
    numberStars: '4.40',
    description: 'Stylist apartment in center of the city',
  },
  {
    image: image2,
    superHost: false,
    type: 'Private room',
    numberStars: '4.25',
    description: 'Cozy, peaceful and private room with...',
  },
  {
    image: image3,
    superHost: false,
    type: 'entire house',
    numberStars: '4.96',
    description: 'Modern House in a remote area',
  },
  {
    image: image4,
    superHost: false,
    type: 'Entire apartment. 2 beds',
    numberStars: '4.85',
    description: 'Stylist room in desing district',
  },
  {
    image: image5,
    superHost: false,
    type: 'Private room',
    numberStars: '4.85',
    description: 'Modern apartment close to nature',
  },
  {
    image: image6,
    superHost: false,
    type: 'Entire house',
    numberStars: '4.54',
    description: 'House in a remote area',
  },
]

function Body() {

  const [modal, setModal] = useState(false)
  const [ModalImage, setModalImage] = useState("");
  const [ModalSuperHost, setModalSuperHost] = useState(false);
  const [ModalType, setModalType] = useState("");
  const [ModalNumberOfStars, setModalNumberOfStars] = useState(0);
  const [ModalDescription, setModalDescription] = useState("");


  const setModalContent = (image, superHost, type, numberStars, description) => {
    setModalImage(image);
    setModalSuperHost(superHost);
    setModalType(type);
    setModalNumberOfStars(numberStars);
    setModalDescription(description);
    setModal(true);
  }

  return (
    <div id='body'>
      <div className="header-body">
        <div className='stay-place-header'>Stays in Finland</div>
        <div className='number-place-header'>12+ stays</div>
      </div>
      <div className="list-stays">
        {
          place?.map(({image, superHost, type, numberStars, description}, index) => {
            return(
              <div className='place-body' key={index}>
                <img className='stays-picture' src={image} alt="stays" onClick={() => setModalContent(image, superHost, type, numberStars, description)}/>
                <div className="stays-footer">
                  <div className='stays-type'>
                    <div className="type-appartment">
                      {superHost ? <div id='super-host'>SUPER HOST</div>: ""}
                      <div className="type-appartment-info">
                        {type}
                      </div>
                    </div>
                    <div className='stars'>
                      <RiStarSFill className='star-icon'/>
                      <div className='numberOfStars'>{numberStars}</div>
                    </div>
                  </div>
                  <p>{description}</p>
                </div>
              </div>
            )
          })
        }
      </div>
      
  {modal? <Modal setModal={setModal} modal={modal} ModalImage={ModalImage} ModalSuperHost={ModalSuperHost} ModalType={ModalType} ModalNumberOfStars={ModalNumberOfStars} ModalDescription={ModalDescription}/> : null}

    </div>
  )
}

export default Body