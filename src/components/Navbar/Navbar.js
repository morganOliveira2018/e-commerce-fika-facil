import React, { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../Navbar/Navbar.css';
import { Button } from '../Button/Button';
import "../FontawesomeIcons/Icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect( () => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMenu}>
                        FikaFacil <FontAwesomeIcon icon="shopping-cart" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link 
                            to='/' 
                            className='nav-links' 
                            onClick={closeMenu}>
                                Página inicial
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to='/Login' 
                            className='nav-links' 
                            onClick={closeMenu}>
                                Login
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to='/products' 
                            className='nav-links' 
                            onClick={closeMenu}>
                                Produtos
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to='/signUp' 
                            className='nav-links-mobile' 
                            onClick={closeMenu}>
                                Sign Up
                        </Link>
                    </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</
                    Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
