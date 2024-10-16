import React from 'react'
import { FaFacebookSquare, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';


function Footer() {
  return (
    <footer className="bg-body-tertiary text-center text-lg-start footer-main ">
  {/*  Grid container  */}
  <div className="container p-4">
    {/* Grid row */}
    <div className="row">
      {/* Grid column */}
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="fw-bold fs-3">Company</h5>

        <ul className="list-unstyled">
          <li>
            <a href="#!" className="text-body">Innovations</a>
          </li>
          <li>
            <a href="#!" className="text-body">Business Services</a>
          </li>
          <li>
            <a href="#!" className="text-body">Financial services</a>
          </li>
          <li>
            <a href="#!" className="text-body">Lejhro Recruiter</a>
          </li>
          <li>
            <a href="#!" className="text-body">About</a>
          </li>
          <li>
            <a href="#!" className="text-body">Blogs</a>
          </li>
        </ul>
      </div>
      {/* Grid column */}

      {/* Grid column */}
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="fw-bold fs-3">Programs</h5>

        <ul className="list-unstyled">
          <li>
            <a href="#!" className="text-body">Lejhro Bootcamp</a>
          </li>
        </ul>
      </div>
      {/* Grid column */}

      {/* Grid column */}
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="fw-bold fs-3">Support</h5>

        <ul className="list-unstyled mb-0">
          <li>
            <a href="#!" className="text-body">Contact</a>
          </li>
          <li>
            <a href="#!" className="text-body">Terms of Use</a>
          </li>
          <li>
            <a href="#!" className="text-body">Privacy Statement</a>
          </li>
        </ul>
      </div>
      {/* Grid column */}

      {/* Grid column */}
      <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
        <h5 className="fw-bold fs-3">Connect with us</h5>

        <div>
            <a className='pe-4 text-dark fs-4' href="https://www.twitter.com/lejhro"><FaTwitter /></a>
            <a className='pe-4 text-dark fs-4' href="https://www.facebook.com/lejhro"><FaFacebookSquare /></a>
            <a className='pe-4 text-dark fs-4' href="https://www.linkedin.com/company/lejhro"><FaLinkedin /></a>
            <a className='text-dark fs-4' href="https://www.youtube.com/channel/UCN_okXQlwY7e26UJ8tJtCQQ"><FaYoutube /></a>
        </div>
      </div>
      {/* Grid column */}

    </div>
    {/* Grid row */}

  </div>
  {/*  Grid container  */}

  {/*  Copyright  */}
  <div className="text-center p-3">
    <span clpssName="text-body">© 2024 LEJHRO. All Rights Reserved.</span>
  </div>
  {/*  Copyright  */}
</footer>
  )
}

export default Footer