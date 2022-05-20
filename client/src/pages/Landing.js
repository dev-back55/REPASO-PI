import React from 'react'
import { Link } from 'react-router-dom';
import './Landing.css';


export const Landing = () => {
  return (
    <div className='landing'>
      <div id='titulo'>
        <h1>App Repaso  PI</h1>
      </div>
      <div className='btn-ingresar'>
        <Link to='/home' className='mybutton'>INGRESAR</Link>
      </div>
    
    </div>
  )
}