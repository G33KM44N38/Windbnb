import React from 'react';
import {RiStarSFill} from 'react-icons/ri';
import './Modal.css';

function Modal({setModal, modal, ModalImage, ModalSuperHost, ModalType, ModalNumberOfStars, ModalDescription}) {
  return (
      <div id='modal' onClick={() => setModal(!modal)}>
          <div className='modal-content' onClick={e => e.stopPropagation()}>
              <button className='modal-close-button' onClick={() => setModal(false)}>x</button>
            <img className='modal-image' src={ModalImage} alt="stays" />
            <div className="modal-footer">
                <div className='modal-description-header'>
                    <div className='modal-footer-header'>
                        <div className='modal-footer-header-info'>
                            {ModalSuperHost ? <div id='super-host'>SUPER HOST</div>: ""}
                            <p>{ModalType}</p>
                        </div>
                        <div className='modal-number-stars'>
                            <RiStarSFill className='star-icon'/>
                            {ModalNumberOfStars}
                        </div>
                    </div>
                </div>
                {ModalDescription}
            </div>
          </div>
      </div>
  )
}

export default Modal