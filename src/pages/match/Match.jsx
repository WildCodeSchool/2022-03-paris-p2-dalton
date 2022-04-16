import React from 'react'
import LoveCharactersList from "../../data/LoveCharactersList";


export const Match = ({loveCharacter}) => {
   
 
  return (
    <div className="loveCharacter">
      <LoveCharactersList/>

      
      <button className="loveCharater-button">Let's MATCH</button>
      
      </div>
  )
}

export default Match;