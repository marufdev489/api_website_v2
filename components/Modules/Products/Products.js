import React from "react";
// import SectionTitle from "../Section_title/Section_title";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import { GoDot } from "react-icons/go";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import { FaReact } from "react-icons/fa";

const Products = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="products section_padding">
        {/* <SectionTitle titleUpDown="Products"/> */}
        <Container>
          <Row>
            <Col>
              <Slider {...settings}>
                <div className="mb-4">
                  <h1 className="text-center fw-bold mb-5 text-capitalize">
                    Frontend tools
                  </h1>
                  <div>
                    <Row>
                      <Col lg={6} className="shape_bg mb-5">
                        <div className="position-relative mb-4">
                          <img
                            src="/shape.png"
                            alt=""
                            className="shape_img_bg"
                          />
                          <img
                            src="/product_slick.jpg"
                            alt=""
                            className="rounded-3 product_slider_img"
                          />
                        </div>
                      </Col>
                      <Col lg={6} className="">
                        <div>
                          <p className="text-justify pe-4 pb-4">
                            "Story' is an intuitive and powerful web application
                            to keep track of daily or weekly progress on any
                            kind of project. Due to a novel UI, it helps remote
                            teams to collaborate efficiently from project
                            inception to finish."
                          </p>
                          <ul className="d-flex justify-content-center mb-4">
                            <li className="mx-3 text-capitalize px-3 py-1">
                              <div className="d-flex justify-content-center">
                                <img src="/React-icon.png" alt="" className="language_icons"/>
                              </div>
                              <p>React.js</p>
                            </li>
                            <li className="mx-3 text-capitalize px-3 py-1">
                              <div className="d-flex justify-content-center">
                                <img src="/Node.png" alt="" className="language_icons"/>
                              </div>
                              <p>Vue.js</p>
                            </li>
                            <li className="mx-3 text-capitalize px-3 py-1">
                              <div className="d-flex justify-content-center">
                                <img src="/Vue.png" alt="" className="language_icons"/>
                              </div>
                              <p>Vue.js</p>
                            </li>
                            <li className="mx-3 text-capitalize px-3 py-1">
                              <div className="d-flex justify-content-center">
                                <img src="/aws.png" alt="" className="language_icons"/>
                              </div>
                              <p>aws.js</p>
                            </li>
                            
                          </ul>
                          <Link
                            href="/"
                            className="CustomeBtn rounded-pill mt-4"
                          >
                            View case
                            <BiChevronRight className="CustomeBtnIcon" />
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
                <div className="mb-4">
                  <h1 className="text-center fw-bold mb-5 text-capitalize">
                    Backtend tools
                  </h1>
                  <div>
                    <Row>
                      <Col lg={6} className="shape_bg mb-4">
                        <div className="position-relative mb-4">
                          <img
                            src="/shape.png"
                            alt=""
                            className="shape_img_bg"
                          />
                          <img
                            src="/product_slick.jpg"
                            alt=""
                            className="rounded-3 product_slider_img"
                          />
                        </div>
                      </Col>
                      <Col lg={6} className="">
                        <div>
                          <p className="text-justify pe-4 pb-4">
                            "Story' is an intuitive and powerful web application
                            to keep track of daily or weekly progress on any
                            kind of project. Due to a novel UI, it helps remote
                            teams to collaborate efficiently from project
                            inception to finish."
                          </p>
                          <ul className="d-flex justify-content-center mb-4">
                            <li className="mx-3 text-capitalize px-3 py-1">
                              <div className="d-flex justify-content-center">
                                <img src="/React-icon.png" alt="" className="language_icons"/>
                              </div>
                              <p>React.js</p>
                            </li>
                            <li className="mx-3 text-capitalize px-3 py-1">
                              <div className="d-flex justify-content-center">
                                <img src="/Node.png" alt="" className="language_icons"/>
                              </div>
                              <p>Vue.js</p>
                            </li>
                            <li className="mx-3 text-capitalize px-3 py-1">
                              <div className="d-flex justify-content-center">
                                <img src="/Vue.png" alt="" className="language_icons"/>
                              </div>
                              <p>React.js</p>
                            </li>
                            <li className="mx-3 text-capitalize px-3 py-1">
                              <div className="d-flex justify-content-center">
                                <img src="/aws.png" alt="" className="language_icons"/>
                              </div>
                              <p>React.js</p>
                            </li>
                            
                          </ul>
                          <Link
                            href="/"
                            className="CustomeBtn rounded-pill mt-4"
                          >
                            View case
                            <BiChevronRight className="CustomeBtnIcon" />
                          </Link>
                        </div>
                        
                      </Col>
                    </Row>
                  </div>
                </div>
               
                
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Products;
