import { Button, Container, Drawer, InputBase, List } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { burger, darkModeIC, lightModeIC, Logo, logoWhite, mobileLogo, searchIcon } from '../assets/images';
import ListItem from '@mui/material/ListItem';
import gsap from 'gsap';
import { TweenMax, Power2 } from 'gsap';

export const Header = () => {

    function closeSidebar() {
        document.body.classList.remove('show-nav');
    }
    function showSidebar() {
        document.body.classList.add('show-nav');
    }

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    //GSAP Animatioins 
    const cusTimeline1 = useRef(null);
    useEffect(() => {
        const navLinkAnimation = cusTimeline1.current;
        gsap.from(".navbar li a", 1, {
            opacity: 0,
            x: -40,
            stagger: 0.3,
        });
    }, []);


    // Dark Mode Function
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
    }, [theme]);




    return (
        <>
            <div className={`App ${theme}`}>
                <header ref={cusTimeline1}>
                    <Container>
                        <div className="overlay" onClick={e => document.body.classList.remove('show-nav', 'show-searchbar')}></div>
                        <Link to='-' title='Company' className='logo-link'>
                            <img src={Logo} alt="company logo" className='logo' />
                            <img src={logoWhite} alt="company logo" className='logo dark-mode-logo' />
                            <img src={mobileLogo} alt="company logo" className='mobile-logo' />
                        </Link>
                        <nav className='navbar'>
                            <ul>
                                <li>
                                    <NavLink to="/" onClick={closeSidebar} title='Home'>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="-" onClick={closeSidebar} title='Services'>Services</NavLink>
                                </li>
                                <li>
                                    <NavLink to="-" onClick={closeSidebar} title='Our Team'>Our Team </NavLink>
                                </li>
                                <li>
                                    <NavLink to="-" onClick={closeSidebar} title='About us'>About Us</NavLink>
                                </li>
                                <li>
                                    <NavLink to="-" onClick={closeSidebar} title='Contact us'>Contact Us</NavLink>
                                </li>
                            </ul>
                        </nav>
                        <Drawer
                            anchor='left'
                            open={isDrawerOpen}
                            onClose={() => { setIsDrawerOpen(false); closeSidebar(); }}
                        >
                            <Box className="sidebar-new">
                                <List>
                                    <ListItem className='mobile-nav'>
                                        <NavLink to="/" onClick={closeSidebar} title='Home'>Home</NavLink>
                                    </ListItem>
                                    <ListItem className='mobile-nav'>
                                        <NavLink to="-" onClick={closeSidebar} title='Services'>Services</NavLink>
                                    </ListItem>
                                    <ListItem className='mobile-nav'>
                                        <NavLink to="-" onClick={closeSidebar} title='Our Team'>Our Team </NavLink>
                                    </ListItem>
                                    <ListItem className='mobile-nav'>
                                        <NavLink to="-" onClick={closeSidebar} title='About us'>About Us</NavLink>
                                    </ListItem>
                                    <ListItem className='mobile-nav'>
                                        <NavLink to="-" onClick={closeSidebar} title='Contact us'>Contact Us</NavLink>
                                    </ListItem>
                                </List>
                            </Box>
                        </Drawer>

                        <form className="searchbar">
                            <InputBase type='search' placeholder='Search here...' startAdornment={<img src={searchIcon} className='searchbar-icon' alt="icon" />} />
                        </form>
                        <Button className='search-toggle' variant="text" onClick={e => document.body.classList.toggle('show-searchbar')}>
                            {/* <img src={searchIcon} alt="icon" /> */}
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.0286 10.8786C8.90542 11.7759 7.48128 12.2091 6.04866 12.0892C4.61605 11.9693 3.28372 11.3055 2.3253 10.2339C1.36688 9.16241 0.85512 7.76457 0.895125 6.32751C0.93513 4.89044 1.52386 3.52324 2.54041 2.50669C3.55696 1.49014 4.92416 0.901408 6.36123 0.861403C7.79829 0.821398 9.19613 1.33316 10.2677 2.29158C11.3392 3.25 12.0031 4.58233 12.123 6.01494C12.2429 7.44755 11.8097 8.8717 10.9123 9.99489L15.7097 14.791C15.827 14.9083 15.8929 15.0675 15.8929 15.2335C15.8929 15.3994 15.827 15.5586 15.7097 15.6759C15.5923 15.7933 15.4331 15.8592 15.2672 15.8592C15.1012 15.8592 14.942 15.7933 14.8247 15.6759L10.0299 10.8786H10.0286ZM10.8923 6.48376C10.8923 5.90925 10.7792 5.34036 10.5593 4.80958C10.3395 4.2788 10.0172 3.79652 9.61097 3.39027C9.20472 2.98403 8.72244 2.66178 8.19166 2.44193C7.66088 2.22207 7.09199 2.10891 6.51748 2.10891C5.94297 2.10891 5.37408 2.22207 4.8433 2.44193C4.31252 2.66178 3.83024 2.98403 3.424 3.39027C3.01775 3.79652 2.6955 4.2788 2.47565 4.80958C2.25579 5.34036 2.14263 5.90925 2.14263 6.48376C2.14263 7.64404 2.60355 8.7568 3.424 9.57724C4.24444 10.3977 5.3572 10.8586 6.51748 10.8586C7.67776 10.8586 8.79052 10.3977 9.61097 9.57724C10.4314 8.7568 10.8923 7.64404 10.8923 6.48376Z" fill="#3A3A3A" />
                            </svg>

                            <p>Search</p>
                        </Button>
                        <Button className='theme-toggle' variant="text" onClick={toggleTheme}>
                            <img src={lightModeIC} alt="icon" />
                            <img src={darkModeIC} alt="icon" className='dark-mode-icon' />
                        </Button>
                        <Button className='nav-toggle' variant="text" onClick={() => {
                            setIsDrawerOpen(true);
                            setTimeout(() => {
                                showSidebar();
                            }, 200);
                        }}>
                            {/* <img src={burger} alt="Hem-burger" /> */}
                            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.2262 12.8638C19.2262 13.368 18.8174 13.7759 18.3142 13.7759H10.9717C10.7298 13.7759 10.4978 13.6798 10.3267 13.5087C10.1557 13.3377 10.0596 13.1057 10.0596 12.8638C10.0596 12.6219 10.1557 12.3899 10.3267 12.2189C10.4978 12.0478 10.7298 11.9517 10.9717 11.9517H18.3142C18.8183 11.9517 19.2262 12.3596 19.2262 12.8638Z" fill="#3A3A3A" />
                                <path d="M19.2263 7.35921C19.2263 7.86338 18.8174 8.27129 18.3142 8.27129H1.80503C1.56313 8.27129 1.33114 8.1752 1.16009 8.00415C0.989039 7.8331 0.892944 7.60111 0.892944 7.35921C0.892944 7.11731 0.989039 6.88532 1.16009 6.71427C1.33114 6.54322 1.56313 6.44713 1.80503 6.44713H18.3142C18.8184 6.44713 19.2263 6.85596 19.2263 7.35921Z" fill="#3A3A3A" />
                                <path d="M18.3142 2.76672C18.5561 2.76672 18.7881 2.67062 18.9591 2.49957C19.1302 2.32853 19.2263 2.09653 19.2263 1.85463C19.2263 1.61273 19.1302 1.38074 18.9591 1.20969C18.7881 1.03864 18.5561 0.942551 18.3142 0.942551H7.30503C7.18525 0.942551 7.06665 0.966142 6.95599 1.01198C6.84533 1.05782 6.74478 1.125 6.66009 1.20969C6.57539 1.29439 6.50821 1.39494 6.46237 1.50559C6.41654 1.61625 6.39294 1.73486 6.39294 1.85463C6.39294 1.97441 6.41654 2.09301 6.46237 2.20367C6.50821 2.31433 6.57539 2.41488 6.66009 2.49957C6.74478 2.58427 6.84533 2.65145 6.95599 2.69729C7.06665 2.74313 7.18525 2.76672 7.30503 2.76672H18.3142Z" fill="#3A3A3A" />
                            </svg>
                        </Button>
                    </Container>
                </header>
            </div>
        </>
    )
}
