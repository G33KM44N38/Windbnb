import React from 'react';
import {RiStarSFill} from 'react-icons/ri';
import './Modal.css';

function Modal({setModal, modal, ModalImage, ModalSuperHost, ModalType, ModalNumberOfStars, ModalDescription}) {
  return (
      <div id='modal' onClick={() => setModal(!modal)}>
          <div className='modal-content' onClick={e => e.stopPropagation()}>

            <img className='modal-image' src={ModalImage} alt="stays" />
            <div className="modal-footer">

                {ModalSuperHost ? <div id='super-host'>SUPER HOST</div>: ""}
                <div style={{display: 'flex', justifyContent: "space-between"}}>
                    <p>{ModalType}</p>
                    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <RiStarSFill className='star-icon'/>
                        {ModalNumberOfStars}
                    </div>
                </div>
                {ModalDescription}
            </div>
          </div>
      </div>
  )
}

export default Modal