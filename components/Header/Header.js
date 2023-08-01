import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "./../../public/logo.png";

import { BsArrowRight } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

import Link from "next/link";
import { useRouter } from 'next/router';


const Header = () => {
   const [showItems, setShowItems] = useState(false);
   const router = useRouter();

   const handleMouseEnter = () => {
      setShowItems(true);
   };

   const handleMouseLeave = () => {
      setShowItems(false);
   };

   const handleClickService = () => {
      router.push('/ServicesPage/ServicesPage');
   };
   
   // const handleClickExpertise = () => {
   //    router.push('/Expertise/Expertise');
   // };

   return (
      <>
         <header id="header">
            <div className="container">
               <Navbar expand="lg" className="bg-body-tertiary">
                  <Container>
                     <Navbar.Brand as={Link} href="/">
                        <img className="logo" src="/logo.png" alt="logoImg" />
                     </Navbar.Brand>
                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
                     <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto d-flex align-items-center">
                           <Nav.Link as={Link} href="/">
                              Home
                           </Nav.Link>
                           <Nav.Link as={Link} href="/AboutUsPage/AboutUsPage">
                              About Us
                           </Nav.Link>

                           <NavDropdown
                              title="Services"
                              id="custome_dropdown"
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                              onClick={handleClickService}
                              show={showItems}
                           >
                              <div className="subMenuBox d-flex">
                                 <div className="subMenu px-5 py-5 w-50">
                                    <div className="navBox">
                                       <p>
                                          <Nav.Link href="#services">
                                             <IoIosArrowForward />
                                             Our Services
                                          </Nav.Link>
                                       </p>
                                       <p>
                                          <Nav.Link href="#workProcess">
                                             <IoIosArrowForward />
                                             Our Work Process
                                          </Nav.Link>
                                       </p>
                                       <p>
                                          <Nav.Link href="#pricing">
                                             <IoIosArrowForward />
                                             Pricing
                                          </Nav.Link>
                                       </p>
                                       <p>
                                          <Nav.Link href="#portfolio">
                                             <IoIosArrowForward />
                                             Portfolio
                                          </Nav.Link>
                                       </p>
                                       <p>
                                          <Nav.Link href="#clients">
                                             <IoIosArrowForward />
                                             Our Clients
                                          </Nav.Link>
                                       </p>
                                       
                                    </div>
                                 </div>
                                 <div className="menuContent w-50 d-flex align-items-center">
                                    <div className="textBox px-5 py-5">
                                       <h4 className="mb-3">Our Services</h4>
                                       <p>
                                       As a software company, we are committed to excellence, innovation and customer satisfaction by providing cutting-edge solutions that drive growth, efficiency and innovation. Our mission is to empower your business with powerful software solutions that drive success and growth. Our diverse range of services is tailored to meet the unique needs of businesses and organizations across industries.
                                       </p>
                                       <Link className="menuBtn mt-4" href="/">
                                          Read More
                                          <BsArrowRight className="text-danger fs-4 ms-2 d-inline-block" />
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                           </NavDropdown>

                           <Nav.Link as={Link} href="/Expertise/Expertise">
                              Expertise
                           </Nav.Link>
                           <Nav.Link as={Link} href="/OurProducts/OurProducts">
                              Products
                           </Nav.Link>
                           <Nav.Link as={Link} href="/Blog/Blog">
                              Blog
                           </Nav.Link>
                           <Nav.Link as={Link} href="/ContactUs/ContactUs">
                              Contact Us
                           </Nav.Link>
                           
                        </Nav>
                     </Navbar.Collapse>
                  </Container>
               </Navbar>
            </div>
         </header>
      </>
   );
};

export default Header;
