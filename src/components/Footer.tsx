import { Button, Container, IconButton, InputBase } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { facebook, footerLogo, linkedin, twitter } from '../assets/images'
import gsap from 'gsap';

export const Footer = () => {

    const cusTimeline8 = useRef(null);
    useEffect(() => {
        const footerAnimation = cusTimeline8.current;
        let t7 = gsap.timeline({
            scrollTrigger: {
                trigger: footerAnimation,
                start: "center bottom",
            }
        });
        t7.from(".footer-top .MuiContainer-root > *", {
            opacity: 0,
            y: 40,
            duration: .8,
            ease: "ease",
            stagger: 0.2
        });
        t7.from(".footer-copy p", {
            opacity: 0,
            y: 10,
            ease: "ease",
        });
        
    }, []);
    return (
        <>
            <footer ref={cusTimeline8}>
                <div className='footer-top'>
                    <Container>
                        <div className='about-company'>
                            <img src={footerLogo} alt="company logo" className='footer-logo' />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry Lorem Ipsum has been the industry's standard.
                            </p>
                        </div>
                        <div className='links'>
                            <h6 className='footer-subtitle'>Quick links</h6>
                            <Link to="#" title='Home'>Home</Link>
                            <Link to="#" title='Service'>Services</Link>
                            <Link to="#" title='Gallery'>Gallery</Link>
                            <Link to="#" title='Blog'>Blog</Link>
                            <Link to="#" title='About Us'>About Us</Link>
                        </div>
                        <div className='footer-features'>
                            <h6 className='footer-subtitle'>Explore</h6>
                            <Link to="#" title='Resources'>Resources</Link>
                            <Link to="#" title='Careers'>Careers</Link>
                            <Link to="#" title='Community'>Community</Link>
                            <Link to="#" title='Help'>Help</Link>
                            <Link to="#" title='Chat with us'>Chat with us</Link>
                        </div>
                        <div className='resources'>
                            <h6 className='footer-subtitle'>More</h6>
                            <Link to="#" title='Terms &amp; Condition'>Terms &amp; Condition</Link>
                            <Link to="#" title='Privacy Policy'>Privacy Policy</Link>
                            <Link to="#" title='FAQ'>FAQ</Link>
                            <Link to="#" title='Sitemap'>Sitemap</Link>
                            <Link to="#" title='Help'>Help</Link>
                        </div>
                        <div className='footer-signup'>
                            <h6 className='footer-subtitle'>Signup to  Our Newsletter</h6>
                            <div className='sign-up'>
                                <InputBase type='email' size='small' placeholder='Full Name' />
                                <Button variant='contained' size='small' title='Subscribe'>Subscribe</Button>
                            </div>
                            <h6 className='footer-subtitle'>Let’s Connect</h6>
                            <div className='social'>
                                <IconButton title='Facebook' size='small'><img src={facebook} alt="Facebook" /></IconButton>
                                <IconButton title='Twitter' size='small'><img src={twitter} alt="Twitter" /></IconButton>
                                <IconButton title='Instagram' size='small'><img src={linkedin} alt="Linkedin" /></IconButton>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className='footer-copy'>
                    <p>Copyright &#169; 2021 Company All Rights Reserved</p>
                </div>
            </footer>
        </>
    )
}
