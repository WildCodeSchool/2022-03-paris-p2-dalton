import React from 'react'
import { Link } from "react-router-dom"

const Shopping = ({ shopping }) => {
  return (
    <div>
        <div>
           <Link to={{ pathname: `/shopping/${shopping.id}`}}>
               <img src={shopping.image} alt={shopping.name} />
           </Link>
        <div>
            <span>{shopping.name}</span>
        </div>
        <div>
            <span>{shopping.race}</span>
        </div>
        </div>
    </div>
  )
}

export default Shopping