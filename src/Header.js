import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <nav className='header'>

           {/* Logo on the left */}
           <Link to="/login">
                <img 
                className="header__logo" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                alt=""
                    />
            </Link>
            <div>
                <input type="text" className="header__searchInput"></input>
                <SearchIcon className="header__searchIcon" />
            </div>

           {/* Search box */}
           {/* 3 Links */}
           {/* Basket icon with number */} 

        </nav>
    )
}

export default Header
