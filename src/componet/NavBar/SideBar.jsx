import { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaFacebookSquare, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* HamBurgerMenu */}
      <RxHamburgerMenu className='fs-4' onClick={handleShow} />
      {/* OffCanvas Menu */}
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton className='border-bottom'>
          <Offcanvas.Title className='sidebar-logo m-auto'>
            <img src="https://www.lejhro.com/lejhro_logo_blue.png" alt="" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Navbar>
            <Nav className="d-block Sidebar-nav">
              <Nav.Link href="https://www.lejhro.com/innovations" className='text-black px-4 fs-5 fw-bold'>Innovations</Nav.Link>
              <Nav.Link href="https://www.bootcamp.lejhro.com/" className='text-black px-4 fs-5 fw-bold'>Bootcamp</Nav.Link>
              <Nav.Link href="https://www.lejhro.com/business-services" className='text-black px-4 fs-5 fw-bold'>Business Services</Nav.Link>
              <Nav.Link href="https://www.lejhro.com/financial-services" className='text-black px-4 fs-5 fw-bold'>Financial Services</Nav.Link>
              <Nav.Link href="https://www.lejhro.com/about" className='text-black px-4 fs-5 fw-bold'>About</Nav.Link>
              <Nav.Link href="https://www.lejhro.com/contact-us" className='text-black px-4 fs-5 fw-bold'>Contact Us</Nav.Link>
              <Nav.Link href="#" className='text-black px-4 fs-5 fw-bold'>Blogs</Nav.Link>
              <div className='ms-4 pt-2 social-icon'>
                <a className='pe-3 text-dark fs-3' href="https://www.twitter.com/lejhro"><FaTwitter /></a>
                <a className='pe-3 text-dark fs-3' href="https://www.facebook.com/lejhro"><FaFacebookSquare /></a>
                <a className='pe-3 text-dark fs-3' href="https://www.linkedin.com/company/lejhro"><FaLinkedin /></a>
                <a className='text-dark fs-3' href="https://www.youtube.com/channel/UCN_okXQlwY7e26UJ8tJtCQQ"><FaYoutube /></a>
              </div>
            </Nav>
          </Navbar>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function SideBar() {
  return (
    <>
      {['end'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

// render(<SideBar />);

export default SideBar;