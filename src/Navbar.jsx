import React, { useState } from 'react';
import './assets/navbar.scss';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import RedeemIcon from '@mui/icons-material/Redeem';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar = () => {
    // UseState
    const [navColor, setNavColor] = useState(false);
    const [menu, setMenu] = useState(false);

    //Function
    const navTransition = () => {
        window.scrollY > 100 ? setNavColor(true) : setNavColor(false);
    };
    const clickMenu = () => {
        menu ? setMenu(false) : setMenu(true);
    };

    //Javascript
    useState(() => {
        document.addEventListener("scroll", navTransition);
    });

    return (
        <div className={`navbar ${navColor || menu ? "navbar--bg" : "navbar_transparent"} ${menu && "show"}`}>
            <button className='navbar_burger' onClick={clickMenu}>
                <MenuIcon />
            </button>
            <img src='/src/assets/images/flouflix.png' alt='Flouflix' className='navbar_logo' />
            <nav className='navbar_nav'>
                <a href='/' className='navbar_link'>
                    Accueil
                </a>
                <a href='/' className='navbar_link'>
                    Séries
                </a>
                <a href='/' className='navbar_link'>
                    Films
                </a>
            </nav>
            <div className='navbar_actions'>
                <a href='/' className='navbar_action'>
                    <SearchIcon />
                </a>
                <a href='/' className='navbar_action'>
                    <RedeemIcon />
                </a>
                <a href='/' className='navbar_action'>
                    <NotificationsIcon />
                </a>
                <a href='/' className='navbar_action'>
                    <img src='/src/assets/images/icon.jpg' alt='User Picture' className='navbar_usericon' />
                </a>
            </div>
        </div>
    )
}

export default Navbar