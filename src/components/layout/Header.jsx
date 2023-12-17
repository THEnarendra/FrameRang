import React from 'react';
import './Header.css'

const Header = () => { 
  return (
    <>
    <div className="upperNav">
        <div>Narendra</div>
        <div>
        <a href=""><i className="searchIcon fa-solid fa-magnifying-glass"></i></a>
          <input type="text" placeholder='Search Products'/></div>
        <div>
          <button className='buttons'>Login/Signup</button>
          
          
          <div className=""></div>
        </div>
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
