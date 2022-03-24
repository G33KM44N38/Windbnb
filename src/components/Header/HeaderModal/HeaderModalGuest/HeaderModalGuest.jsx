import React, {useState, useEffect} from 'react'
import './HeaderModalGuest.css'

function HeaderModalGuest({setNumberGuest, numberGuest, numberAdult, setNumberAdult, numberChildren, setNumberChildren}) {

    const addAdult = () => {
        setNumberAdult(numberAdult + 1);
        setNumberGuest(numberGuest + 1)
    }

    const deleteAdult = () => {
        if (numberAdult > 0){
            setNumberAdult(numberAdult - 1);
            setNumberGuest(numberGuest - 1)
        }
    }
    const addChild = () => {
        setNumberChildren(numberChildren + 1);
        setNumberGuest(numberGuest + 1)
    }

    const deleteChild = () => {
        if (numberChildren > 0) {
            setNumberChildren(numberChildren - 1);
            setNumberGuest(numberGuest - 1)
        }
    }



    return (
        <div className='guest-controllers'>
            <div className='guest-controlers-content'>
                <p className='type-of-guest'>Adults</p>
                <p className='rules-of-guest'>Ages 13 or above</p>
                <div className='controllers'>
                    <button onClick={() => deleteAdult()}>-</button>
                    <div className='numbers-guests'>{numberAdult}</div>
                    <button onClick={() => addAdult()}>+</button>
                </div>
            </div>
            <div className='guest-controlers-content'>
                <p className='type-of-guest'>Children</p>
                <p className='rules-of-guest'>Ages 2-12</p>
                <div className='controllers'>
                    <button onClick={() => deleteChild()}>-</button>
                    <div className='numbers-guests'>{numberChildren}</div>
                    <button onClick={() => addChild()}>+</button>
                </div>
            </div>
        </div>
    )
}

export default HeaderModalGuest