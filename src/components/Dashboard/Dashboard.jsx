import React from 'react'
import Card from './Card'


export default function Dashboard() {
  return (
    <>
    {/* <NavLink to={'/home'}>Home</NavLink>
    <NavLink to={'/about'}>About</NavLink>
    <NavLink to={'/contact'}>Contact</NavLink>
    <NavLink to={'/project'}>Project</NavLink> */}

    <div className='dashboard'>Dashboard</div>
    
    <Card text="Home" link="/home"/>
    <Card text="About" link="/about"/>
    <Card text="Contact" link="/contact"/>
    <Card text="Projects" link="/project"/>
    
    
 
    
    </>
  )
}
