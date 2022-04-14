import React from 'react';
import { Link } from "react-router-dom"

const LoveCharacter = ({loveCharacter}) => {
    return (
        <div className='LoveCharacter'>
            <div className='love-cards'>
                <Link to={{ pathname: `/loveCharacter/${loveCharacter.id}`}}>
                    <img className="loveCharacter" src={loveCharacter.image} alt={loveCharacter.name} />
                </Link>
                <div className='loveCharacter-content'>
                    <h2>{loveCharacter.name}</h2>
                </div>
            </div>
        </div>
      )
    }

export default LoveCharacter;