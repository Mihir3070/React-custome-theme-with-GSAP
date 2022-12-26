
import { Button, Card, CardContent, Container, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material'
import { arrowDown, balloon, callIcon, curvedDown, curvedUp, discussinIcon, frame1, frame2, frame3, frameMain, happy, heroImage, heroVector1, heroVector11, heroVector2, heroVector22, heroVector3, locationIcon, mailIcon, reportingIcon, rightTriangleImage, saveVector1, saveVector2, strategyIcon, trophy, users, workVectorLeft, workVectorRight } from '../../assets/images';
import Slider from "react-slick";
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import React, { useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { TweenMax, Power2 } from 'gsap';
import { useRef, useEffect } from 'react';
import CountUp, { useCountUp } from 'react-countup';
gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(ScrollSmoother);



function NewIcon() {
    return (
        <img src={arrowDown} className='dropdown-arrow' alt="arrow" />
    );
}
export const Home = () => {

    const [subject, setSubject] = React.useState('');

    const selectHandleChange = (event: SelectChangeEvent) => {
        setSubject(event.target.value);
    };
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        cssEase: "linear",
        appendDots: (dots: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => (
            <div
                style={{
                    padding: "10px",
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: (i: number) => (
            <div
                style={{
                    fontWeight: "500", fontSize: "15px", lineHeight: "18px",
                }}
            >
                {i + 1}
            </div>
        )
    };

    //GSAP Animatioins
    const cusTimeline2 = useRef(null);
    useEffect(() => {
        const heroAnimation = cusTimeline2.current;
        gsap.from(".hero p", 1, { opacity: 0, y: 40 })
        gsap.from(".hero h2", 1, { opacity: 0, y: 40, delay: .5 })
        gsap.from(".hero .hero-btn", 1, { opacity: 0, y: 40, delay: .8 })


        const parallaxContainer = document.getElementById('parallax-container');
        const parallaxItems = document.getElementsByClassName('parallax');
        const fixer = 0.0030;

        document.addEventListener("mousemove", function (event) {
            if (parallaxContainer) {
                const pageX = event.pageX - (parallaxContainer.getBoundingClientRect().width * 0.5);
                const pageY = event.pageY - (parallaxContainer.getBoundingClientRect().height * 0.5);


                for (let i = 0; i < parallaxItems.length; i++) {
                    const item = parallaxItems[i];
                    const speedX = parseInt(item.getAttribute("data-speed-x") as string);
                    const speedY = parseInt(item.getAttribute("data-speed-y") as string);

                    if (speedX && speedY) {
                        TweenMax.set(item, {
                            x: ((item as HTMLElement).offsetLeft + pageX * speedX) * fixer,
                            y: ((item as HTMLElement).offsetTop + pageY * speedY) * fixer
                        });
                    }
                }
            }
        }
        );
    }, []);

    const cusTimeline3 = useRef(null);
    useEffect(() => {
        const bestOfUsAnimation = cusTimeline3.current;

        let t3 = gsap.timeline({
            scrollTrigger: {
                trigger: bestOfUsAnimation,
                start: "top center",
                end: "+=600",
            }
        });
        t3.from(".best-of-us .overline", {
            opacity: 0,
            y: 40,
            duration: 0.3,
            ease: "ease"
        });
        t3.from(".best-of-us h2", {
            opacity: 0,
            y: 40,
            duration: 0.3,
            ease: "ease"
        });
        t3.from(".best-of-us p", {
            opacity: 0,
            y: 40,
            duration: 0.3,
            ease: "ease"
        });
        t3.from(".best-of-us ul", {
            opacity: 0,
            y: 40,
            duration: 0.3,
            ease: "ease"
        });
        t3.from(".best-of-us button", {
            opacity: 0,
            y: 40,
            duration: 0.5,
            ease: "ease"
        });

        // Image Animation
        let scrubImg = gsap.timeline({
            scrollTrigger: {
                trigger: bestOfUsAnimation,
                scrub: 1,
                pin: false,
                start: "-80%",
                end: "0",
            },
        });
        scrubImg.fromTo(".best-of-us .animation-first", { borderRadius: 100 }, {borderRadius:0 }, "<");
        scrubImg.fromTo(".best-of-us .animation-second", {  borderRadius: 100 }, {  borderRadius: 0,delay:.2 }, "<");
        scrubImg.fromTo(".best-of-us .animation-third", {  borderRadius: 100 }, {  borderRadius: 0,delay:.4 }, "<");
    }, []);


    const cusTimeline4 = useRef(null);
    useEffect(() => {
        const statisticsAnimation = cusTimeline4.current;
        let t4 = gsap.timeline({
            scrollTrigger: {
                trigger: statisticsAnimation,
                start: "top center",
                end: "+=400",
            }
        });
        t4.from(".statistics .overline", {
            opacity: 0,
            y: 40,
            duration: 1,
            ease: "ease"
        });
        t4.from(".statistics > h2", {
            opacity: 0,
            y: 40,
            duration: 1,
            ease: "ease"
        });

    }, []);

    const cusTimeline5 = useRef(null);
    useEffect(() => {
        const workProcessAnimation = cusTimeline5.current;
        let t5 = gsap.timeline({
            scrollTrigger: {
                trigger: workProcessAnimation,
                start: "top center",
                end: "+=300",
            }
        });
        t5.from(".work-process .overline", {
            opacity: 0,
            y: 40,
            duration: 0.3,
            ease: "ease"
        });
        t5.from(".work-process > h2", {
            opacity: 0,
            y: 40,
            duration: 0.3,
            ease: "ease"
        });
        t5.from(".work-process .MuiGrid-root > *", {
            opacity: 0,
            y: 40,
            ease: "ease",
            duration: 0.6,
            stagger: 0.2,
        });
    }, []);

    const cusTimeline6 = useRef(null);
    useEffect(() => {
        const pricingContainerAnimation = cusTimeline6.current;
        let t6 = gsap.timeline({
            scrollTrigger: {
                trigger: pricingContainerAnimation,
                start: "top center",
                end: "+=700",
                // markers: true
            }
        });
        t6.from(".pricing-container .overline", {
            opacity: 0,
            y: 40,
            duration: .3,
            ease: "ease"
        });
        t6.from(".pricing-container h2", {
            opacity: 0,
            y: 40,
            duration: .3,
            ease: "ease"
        });
        t6.from(".pricing-container .MuiCard-root", {
            opacity: 0,
            y: 40,
            duration: .5,
            ease: "ease",
            stagger: .3,
        });
    }, []);

    const cusTimeline7 = useRef(null);
    useEffect(() => {
        const contactUsAnimation = cusTimeline7.current;
        let t7 = gsap.timeline({
            scrollTrigger: {
                trigger: contactUsAnimation,
                start: "top center",
                end: "+=400",
            }
        });
        t7.from(".contact-us .overline", {
            opacity: 0,
            y: 40,
            duration: .8,
            ease: "ease"
        });
        t7.from(".contact-us h2", {
            opacity: 0,
            y: 40,
            duration: .5,
            ease: "ease"
        });
        t7.from(".contact-us .questions p", {
            opacity: 0,
            y: 40,
            duration: .5,
            ease: "ease"
        });
        t7.from(".contact-us .questions ul li", {
            opacity: 0,
            y: 40,
            duration: .5,
            ease: "ease",
            stagger: .3,
        });
    }, []);





    return (
        <>
            <section className='wrapper'>
                {/* --------------- wrapper start ---------------------- */}
                <Header />
                <Slider {...settings}>
                    <div className='hero' ref={cusTimeline2} id="parallax-container">
                        {/* --------------- hero start ---------------------- */}
                        <img src={heroVector11} alt="Blob" className='vector-left parallax' data-speed-x="5" data-speed-y="10" />
                        <img src={heroVector22} alt="Blob" className='vector-right parallax' data-speed-x="5" data-speed-y="10" />
                        <Container className='hero-block'>
                            <div>
                                <p>Advance Technology</p>
                                <h2><strong>Smart Solutions</strong> for Your Financial.</h2>
                                <Button variant='contained' className='hero-btn' title="Get Started">Get Started</Button>
                            </div>
                            <div className='hero-images'>
                                <img src={heroImage} alt="hero" className='main-image parallax' data-speed-x="3" data-speed-y="3"/>
                                <img src={heroVector1} alt="Blob" className='top parallax' data-speed-x="10" data-speed-y="10" />
                                <img src={heroVector2} alt="Blob" className='middle parallax' data-speed-x="8" data-speed-y="8" />
                                <img src={heroVector3} alt="Blob" className='last parallax' data-speed-x="6" data-speed-y="6" />
                            </div>
                        </Container>
                    </div>
                    <div className='hero' id="parallax-container">
                        {/* --------------- hero start ---------------------- */}
                        <img src={heroVector11} alt="Blob" className='vector-left parallax' data-speed-x="5" data-speed-y="10" />
                        <img src={heroVector22} alt="Blob" className='vector-right parallax' data-speed-x="5" data-speed-y="10" />
                        <Container className='hero-block'>
                            <div>
                                <p>Advance Technology</p>
                                <h2><strong>Smart Solutions</strong> for Your Financial.</h2>
                                <Button variant='contained' className='hero-btn' title="Get Started">Get Started</Button>
                            </div>
                            <div className='hero-images'>
                                <img src={heroImage} alt="hero" className='main-image parallax' data-speed-x="3" data-speed-y="3"/>
                                <img src={heroVector1} alt="Blob" className='top parallax' data-speed-x="10" data-speed-y="10" />
                                <img src={heroVector2} alt="Blob" className='middle parallax' data-speed-x="8" data-speed-y="8" />
                                <img src={heroVector3} alt="Blob" className='last parallax' data-speed-x="6" data-speed-y="6" />
                            </div>
                        </Container>
                    </div>
                    <div className='hero' id="parallax-container">
                        {/* --------------- hero start ---------------------- */}
                        <img src={heroVector11} alt="Blob" className='vector-left parallax' data-speed-x="5" data-speed-y="10" />
                        <img src={heroVector22} alt="Blob" className='vector-right parallax' data-speed-x="5" data-speed-y="10" />
                        <Container className='hero-block'>
                            <div>
                                <p>Advance Technology</p>
                                <h2><strong>Smart Solutions</strong> for Your Financial.</h2>
                                <Button variant='contained' className='hero-btn' title="Get Started">Get Started</Button>
                            </div>
                            <div className='hero-images'>
                                <img src={heroImage} alt="hero" className='main-image parallax' data-speed-x="3" data-speed-y="3"/>
                                <img src={heroVector1} alt="Blob" className='top parallax' data-speed-x="10" data-speed-y="10" />
                                <img src={heroVector2} alt="Blob" className='middle parallax' data-speed-x="8" data-speed-y="8" />
                                <img src={heroVector3} alt="Blob" className='last parallax' data-speed-x="6" data-speed-y="6" />
                            </div>
                        </Container>
                    </div>
                </Slider>
                {/* --------------- hero end ---------------------- */}

                {/* --------------- advisor section start---------------------- */}
                <section className='best-of-us' ref={cusTimeline4}>
                    <Container>
                        <Grid container>
                            <Grid item xl={5} xs={12}>
                                <div className='showcase'>
                                    <h3 ref={cusTimeline3}>
                                        <img src={saveVector1} alt="blob" className='pup-vector' />
                                        <span>
                                            <img src={frame3} alt="user with prop" className='animation-second'/>
                                        </span>
                                        <span>
                                            <img src={frame1} alt="user with prop" className='animation-first'/>
                                            <img src={frame2} alt="user with prop" className='animation-third'/>
                                        </span>
                                    </h3>
                                </div>
                            </Grid>
                            <Grid item xl={7} xs={12}>
                                <div className='advisor'>
                                    <h6 className='overline'>Saving Money</h6>
                                    <h2>Best Financing Advisor To Save Your Money</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard.
                                    </p>
                                    <p>
                                        Dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the industry's standard dummy text ever since.
                                    </p>
                                    <Grid container>
                                        <Grid item xs={6}>
                                            <ul>
                                                <li>Fully Responsive</li>
                                                <li>Multiple Layouts</li>
                                                <li>Suits Your Style</li>
                                            </ul>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <ul>
                                                <li>Fully Responsive</li>
                                                <li>Multiple Layouts</li>
                                                <li>Suits Your Style</li>
                                            </ul>
                                        </Grid>
                                    </Grid>
                                    <Button variant='contained' title="Download App">Download App</Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                    <img src={saveVector2} alt="vector" className='section-vector' />
                </section>
                {/* --------------- advisor section end---------------------- */}

                {/* ----------------- card section start ---------- */}
                <section className='statistics' ref={cusTimeline4}>
                    <h6 className='overline'>Awards &amp; Achivements</h6>
                    <h2>Milestones Achived</h2>
                    <Container>
                        <Grid container spacing={3}>
                            <Grid item md={3} xs={6}>
                                <div className='data-block'>
                                    <img src={happy} alt="emoji" />
                                    <h2>
                                        <CountUp end={10} suffix="K" enableScrollSpy >
                                            {({ countUpRef, start }) => (
                                                <>
                                                    <span ref={countUpRef} />
                                                </>
                                            )}
                                        </CountUp>
                                    </h2>
                                    <p>Happy Client</p>
                                </div>
                            </Grid>
                            <Grid item md={3} xs={6}>
                                <div className='data-block'>
                                    <img src={trophy} alt="emoji" />
                                    <h2>
                                        <CountUp end={15} suffix="+" enableScrollSpy >
                                            {({ countUpRef, start }) => (
                                                <>
                                                    <span ref={countUpRef} />
                                                </>
                                            )}
                                        </CountUp>
                                    </h2>
                                    <p>Awards</p>
                                </div>
                            </Grid>
                            <Grid item md={3} xs={6}>
                                <div className='data-block'>
                                    <img src={balloon} alt="emoji" />
                                    <h2>
                                        <CountUp end={10} suffix="+" enableScrollSpy >
                                            {({ countUpRef, start }) => (
                                                <>
                                                    <span ref={countUpRef} />
                                                </>
                                            )}
                                        </CountUp>
                                    </h2>
                                    <p>Glory Years</p>
                                </div>
                            </Grid>
                            <Grid item md={3} xs={6}>
                                <div className='data-block'>
                                    <img src={users} alt="emoji" />
                                    <h2>
                                        <CountUp end={50} suffix="K" enableScrollSpy >
                                            {({ countUpRef, start }) => (
                                                <>
                                                    <span ref={countUpRef} />
                                                </>
                                            )}
                                        </CountUp>
                                    </h2>
                                    <p>Active Users</p>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
                {/* ----------------- card section end ---------- */}

                {/* ----------------- work process start ---------- */}
                <section className='work-process' ref={cusTimeline5}>
                    <img src={workVectorLeft} alt="vector" className='vector-left' />
                    <img src={workVectorRight} alt="vector" className='vector-right' />
                    <h6 className='overline'>Work Process</h6>
                    <h2>How do we works ?</h2>
                    <Container>
                        <Grid container spacing={4}>
                            <Grid item lg={4} xs={12}>
                                <div className='work-block'>
                                    <img src={discussinIcon} alt="icon" />
                                    <h3>Discussion</h3>
                                    <p>The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated</p>
                                </div>
                            </Grid>
                            <img src={curvedDown} alt="curved-aarow" className='curved-left' />
                            <Grid item lg={4} xs={12}>
                                <div className='work-block'>
                                    <img src={strategyIcon} alt="icon" />
                                    <h3>Strategy &amp; Analysis</h3>
                                    <p>Generators convallis odio, vel pharetra quam malesuada vel. Nam porttitor malesuada.</p>
                                </div>
                            </Grid>
                            <img src={curvedUp} alt="curved-aarow" className='curved-right' />
                            <Grid item lg={4} xs={12}>
                                <div className='work-block'>
                                    <img src={reportingIcon} alt="icon" />
                                    <h3>Reporting</h3>
                                    <p>Internet Proin tempus odio, vel pharetra quam malesuada vel. Nam porttitor malesuada.</p>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
                {/* ----------------- work process end ---------------- */}

                {/* -------------------- pricing cards start ------------------- */}
                <section className='pricing-container' ref={cusTimeline6}>
                    <Container>
                        <h6 className='overline'>Best in Market</h6>
                        <h2>Our Pricing List</h2>
                        <Grid container spacing={{ sm: "31px", xs: "15px" }}>
                            <Grid item lg={4} md={6} xs={12}>
                                <Card className='pricing-card'>
                                    <h5>Lite Plan</h5>
                                    <CardContent>
                                        <ul>
                                            <li>Unlimited Read only User</li>
                                            <li>5 Contacts Per Client</li>
                                            <li>100 Mail Previews</li>
                                        </ul>
                                        <h3>
                                            <CountUp end={9} enableScrollSpy >
                                                {({ countUpRef, start }) => (
                                                    <>
                                                        <span ref={countUpRef} className="bold-span" />
                                                    </>
                                                )}
                                            </CountUp>
                                            <span>/month</span>
                                        </h3>
                                        <Button variant='outlined' title="Subscribe">Subscribe</Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item lg={4} md={6} xs={12}>
                                <Card className='pricing-card'>
                                    <div className='ribbon'><span>New</span></div>
                                    <h5>Standard Plan</h5>
                                    <CardContent>
                                        <ul>
                                            <li>Unlimited Edit only User</li>
                                            <li>5 Contacts Per Client</li>
                                            <li>100 Mail Previews</li>
                                            <li>Fully Responsive</li>
                                        </ul>
                                        <h3>
                                            <CountUp end={29} enableScrollSpy >
                                                {({ countUpRef, start }) => (
                                                    <>
                                                        <span ref={countUpRef} className="bold-span" />
                                                    </>
                                                )}
                                            </CountUp>
                                            <span>/month</span>
                                        </h3>
                                        <Button variant='outlined' title="Subscribe">Subscribe</Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item lg={4} md={6} xs={12}>
                                <Card className='pricing-card'>
                                    <h5>Pro Plan</h5>
                                    <CardContent>
                                        <ul>
                                            <li>Unlimited Edit only User</li>
                                            <li>5 Contacts Per Client</li>
                                            <li>100 Mail Previews</li>
                                            <li>Dummy Text</li>
                                            <li>500 Contacts Per Client</li>
                                        </ul>
                                        <h3>
                                            <CountUp end={69} enableScrollSpy >
                                                {({ countUpRef, start }) => (
                                                    <>
                                                        <span ref={countUpRef} className="bold-span" />
                                                    </>
                                                )}
                                            </CountUp>
                                            <span>/month</span>
                                        </h3>
                                        <Button variant='outlined' title="Subscribe">Subscribe</Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
                {/* -------------------- pricing cards end ------------------- */}

                {/* --------------------- contact-us start --------------- */}
                <section className='contact-us' ref={cusTimeline7}>
                    <Container>
                        <Grid container>
                            <Grid item lg={6} xs={12}>
                                <div className='questions'>
                                    <h6 className='overline'>Contact Us</h6>
                                    <h2>Got A Question?</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry Lorem Ipsum has been the industry's standard.
                                    </p>
                                    <ul>
                                        <li>
                                            <a href="tel:+12312345678">
                                                <img src={callIcon} alt="Call" />+123 - 1234 - 5678
                                            </a>
                                        </li>
                                        <li>
                                            <a href="hello@company.com">
                                                <img src={mailIcon} alt="Mail" />hello@company.com
                                            </a>
                                        </li>
                                        <li>
                                            <img src={locationIcon} alt="location" />4102 Jody Road MI, USA
                                        </li>
                                    </ul>
                                </div>
                            </Grid>
                            <Grid item lg={6} xs={12}>
                                <form>
                                    <p>Fill the form and our team will Contact you in 48 hr</p>
                                    <Grid container className='input' spacing={{ lg: "30px", xs: "20px" }}>
                                        <Grid item md={6}>
                                            <TextField type="text" label="Full Name" variant="outlined" fullWidth={true} />
                                        </Grid>
                                        <Grid item md={6}>
                                            <TextField type="email" label="Email" variant="outlined" fullWidth={true} sx={{ mb: "20px" }} />
                                        </Grid>
                                    </Grid>
                                    <FormControl sx={{ mb: "20px" }} fullWidth={true}>
                                        <InputLabel id="select">Subject</InputLabel>
                                        <Select
                                            id='select'
                                            label='Subject'

                                            value={subject}
                                            onChange={selectHandleChange}
                                            IconComponent={NewIcon}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                    {/* <TextField
                                        select
                                        label="Subject"
                                        value={currency}
                                        placeholder="Subject"
                                        InputProps={{
                                            endAdornment: <InputAdornment position="end"><NewIcon /></InputAdornment>,
                                        }}
                                        onChange={handleChange}
                                        fullWidth={true}
                                        sx={{ mb: "20px" }}
                                    >
                                        {currencies.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField> */}
                                    <TextField label="Message" multiline rows={3} sx={{ mb: "19px", width: "100%" }} />
                                    <Button variant='contained' className='btn-primary' title='Submit'>Submit</Button>
                                </form>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
                {/* --------------------- contact-us end --------------- */}

                {/* --------------------- footer start --------------- */}
                <Footer />
                {/* --------------------- footer end --------------- */}
            </section>
            {/* --------------- wrapper end ---------------------- */}
        </>
    )
}
