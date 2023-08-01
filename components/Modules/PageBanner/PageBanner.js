import React, { Fragment } from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const PageBanner = ({title, description, description2, showButtons}) => {
   return (
      <>
         <section id="pageBanner" className="inner_page_banner">
            <Container fluid>
               <Row>
                  <Col lg={6} className="p-0">
                     <div className="p-0 inner_banner_img">
                        <img
                           src="/menuBg1.jpg"
                           alt="img"
                           className="inner_banner_img"
                        />
                     </div>
                  </Col>

                  <Col lg={6} className="inner_details_div">
                     <div className="d-flex align-items-center inner_banner_img">
                        <div>
                           <h1 className="inner_banner_title fw-bold pb-4">
                              {title}
                           </h1>
                           <p className="pe-5 text-justify">
                              {description}
                           </p>
                           <p className="pe-5 mt-3 text-justify">
                              {description2}
                           </p>
                           {showButtons && (
                              <Fragment>
                                 <Link
                                    className="requestBtn mt-4 px-3 me-4"
                                    href="#contact_us"
                                 >
                                    Estimate Project
                                 </Link>
                                 <Link
                                    className="requestBtn mt-4 px-3"
                                    href="#schedule"
                                 >
                                    Request Schedule
                                 </Link>
                              </Fragment>
                           )}
                        </div>
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>
      </>
   );
};

export default PageBanner;
