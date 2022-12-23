import { Button, Container, Drawer, InputBase, List } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { burger, Logo, mobileLogo, searchIcon } from '../assets/images';
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

    return (
        <>
            <header ref={cusTimeline1}>
                <Container>
                    <div className="overlay" onClick={e => document.body.classList.remove('show-nav', 'show-searchbar')}></div>
                    <Link to='-' title='Company'>
                        <img src={Logo} alt="company logo" className='logo' />
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
                                <ListItem >
                                    <NavLink to="-" onClick={closeSidebar} title='Extra link 1'>Extra link 1</NavLink>
                                </ListItem >
                                <ListItem >
                                    <NavLink to="-" onClick={closeSidebar} title='Extra link 2'>Extra link 2</NavLink>
                                </ListItem >
                                <ListItem >
                                    <NavLink to="-" onClick={closeSidebar} title='Extra link 3'>Extra link 3</NavLink>
                                </ListItem >
                            </List>
                        </Box>
                    </Drawer>

                    <form className="searchbar">
                        <InputBase type='search' placeholder='Search here...' startAdornment={<img src={searchIcon} className='searchbar-icon' alt="icon" />} />
                    </form>
                    <Button className='search-toggle' variant="text" onClick={e => document.body.classList.toggle('show-searchbar')}>
                        <img src={searchIcon} alt="icon" /><p>Search</p>
                    </Button>
                    <Button className='nav-toggle' variant="text" onClick={() => {
                        setIsDrawerOpen(true); 
                        setTimeout(() => {
                            showSidebar();
                        }, 200);
                    }}>
                        <img src={burger} alt="Hem-burger" />
                    </Button>
                </Container>
            </header>
        </>
    )
}
