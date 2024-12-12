import React from 'react'
import '../Dashboard/card.css'
import { NavLink } from 'react-router-dom'



export default function Card(props) {



  return (
    <>
    <div className='card-container'>
    <NavLink className="card-link" to={props.link}>{props.text}</NavLink>
    </div>

    </>
  )
}
