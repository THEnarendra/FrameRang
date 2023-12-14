import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <>
    <div className="upperNav">
        <div>Narendra</div>
        <div><input type="text" placeholder='Search Products'/></div>
        <div><button>Login/Signup</button></div>
    </div>

    <div className="bottomNav">
        <ul>
          <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        </ul>
    </div>
    </>
  )
}

export default Header
