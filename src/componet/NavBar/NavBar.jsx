import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SideBar from './SideBar';
import { useEffect, useState } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';


function NavBar() {
    
    const [visibleOn, setVisibleOn] = useState(true); 
    
        const listenToScroll = () => {
    
    
            let heightToHidden = 100;
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    
            if(winScroll > heightToHidden) {
                setVisibleOn(false);
            }else{
                setVisibleOn(true);
            }
        }
    
        useEffect(() => {
            window.addEventListener("scroll", listenToScroll);
            return () => {
                window.removeEventListener("scroll", listenToScroll);
            };
        }, [])
    return (
        <>
            <Container>
                {visibleOn ? (<Navbar expand="lg" className="bg-transparent">
                    <Container>
                        <Navbar.Brand href="#" className='nav-img'>
                            <img src="https://www.lejhro.com/lejhro_logo_white.png" alt="" />
                        </Navbar.Brand>
                        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                        <div className='ms-auto d-lg-none'>
                            <div className='bg-white menu-icon position-relative'>
                                <SideBar />
                            </div>
                        </div>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="m-auto nav-item">
                                <Nav.Link href="https://www.lejhro.com/innovations" className='text-white px-4 fs-6 fw-bold'>Innovations</Nav.Link>
                                <Nav.Link href="https://www.lejhro.com/business-services" className='text-white px-4 fs-6 fw-bold'>Business Services</Nav.Link>
                                <Nav.Link href="https://www.lejhro.com/financial-services" className='text-white px-4 fs-6 fw-bold'>Financial Services</Nav.Link>
                                <Nav.Link href="https://www.bootcamp.lejhro.com/" className='text-white px-4 fs-6 fw-bold'>Bootcamp</Nav.Link>
                            </Nav>
                            <div className='ms-auto'>
                                <div className='bg-white menu-icon position-relative'>
                                    <SideBar />
                                </div>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
               )
               :
               (
                <Navbar expand="lg" className="bg-white fixed-top shadow-sm">
                    <Container>
                        <Navbar.Brand href="#" className='nav-img '>
                            <img src="https://www.lejhro.com/lejhro_logo_blue.png" alt="" />
                        </Navbar.Brand>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <div className='ms-auto pe-5'>
                                <a className='fw-bold' href="https://www.lejhro.com/contact-us">Let's Talk <FaLongArrowAltRight /></a>
                            </div>
                            {/* <div className='ms-auto'>
                                <div className='bg-black menu-icon position-relative'>
                                    <SideBar />
                                </div>
                            </div> */}
                        </Navbar.Collapse>
                        <div className='ms-auto'>
                            <div className='bg-black bg-opacity-75 menu-icon text-white position-relative'>
                                <SideBar />
                            </div>
                        </div>
                    </Container>
                </Navbar>
               )
            }
            </Container>
        </>
    )
}

export default NavBar