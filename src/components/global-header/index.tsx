import { useState } from 'react'
import './styles.css'

import 'bootstrap/dist/css/bootstrap.css';

function Header() {

  return (
    <>
        <div className="container">
            <p className='title text'>
                THE <span className='blue-t'>BANK</span> OF THE <span className='blue-t'>FUTURE</span>
            </p>
            <p className='subtitle text'>Let's build the future together, one euro at a time.</p>
        </div>
    </>
  )
}

export default Header
