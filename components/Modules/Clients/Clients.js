import React from "react";
import SectionTitle from "../Section_title/Section_title";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import LogoImg from "../../../public/Clients_logo/Picture1.png";
import LogoImg2 from "../../../public/Clients_logo/Picture2.png";
import LogoImg3 from "../../../public/Clients_logo/Picture3.png";
import LogoImg4 from "../../../public/Clients_logo/Picture4.png";
import LogoImg5 from "../../../public/Clients_logo/Picture5.png";
import LogoImg6 from "../../../public/Clients_logo/Picture6.png";
import LogoImg7 from "../../../public/Clients_logo/Picture8.png";
import LogoImg8 from "../../../public/Clients_logo/Picture9.png";
import LogoImg9 from "../../../public/Clients_logo/Picture10.png";
import LogoImg10 from "../../../public/Clients_logo/Picture11.png";
import LogoImg11 from "../../../public/Clients_logo/Picture12.png";
import LogoImg12 from "../../../public/Clients_logo/Picture13.png";

const Clients = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
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
      <section id="clients" className="section_padding clients mb-5">
        <SectionTitle titleUpDown="Our Clients" />
        <Container>
          <Row>
            <Col lg={6}>
              <p className="trusted_by fw-semibold pb-3">Trusted by</p>
              <p className="fw-light pe-4">
                We pride ourselves on contributing to our client's success and
                building long-term, trusted relationships with them. Most of our
                enterprise clients are still with us and have worked with us for
                years.
              </p>
            </Col>

            <Col lg={6}>
              <Slider {...settings}>
                <div>
                  <div className="row">
                    <Col lg={4} md={4} sm={4} className="mb-4">
                      <div className="client_logos d-flex justify-content-center align-items-center">
                        <img src="/Clients_logo/Picture1.png" alt="" className="logo_size"/>
                      </div>
                    </Col>
                    <Col lg={4} md={4} sm={4} className="mb-4">
                      <div className="client_logos d-flex justify-content-center align-items-center">
                        <img src="/Clients_logo/Picture2.png" alt="" className="logo_size" />
                      </div>
                    </Col>
                    <Col lg={4} md={4} sm={4} className="mb-4">
                      <div className="client_logos d-flex justify-content-center align-items-center">
                        <img src="/Clients_logo/Picture3.png" alt="" className="logo_size" />
                      </div>
                    </Col>
                    <Col lg={4} md={4} sm={4} className="mb-4">
                      <div className="client_logos d-flex justify-content-center align-items-center">
                        <img src="/Clients_logo/Picture4.png" alt="" className="logo_size" />
                      </div>
                    </Col>
                    <Col lg={4} md={4} sm={4} className="mb-4">
                      <div className="client_logos d-flex justify-content-center align-items-center">
                        <img src="/Clients_logo/Picture5.png" alt="" className="logo_size" />
                      </div>
                    </Col>
                    <Col lg={4} md={4} sm={4} className="mb-4">
                      <div className="client_logos d-flex justify-content-center align-items-center">
                        <img src="/Clients_logo/Picture6.png" alt="" className="logo_size" />
                      </div>
                    </Col>
                   
                  </div>
                 
                </div>
                <div>
                <div className="row">
                    <Col lg={4} md={4} sm={4} className="mb-4">
                      <div className="client_logos d-flex justify-content-center align-items-center">
                        <img src="/Clients_logo/Picture8.png" alt="" className="logo_size" />
                      </div>
                    </Col>
                    <Col lg={4} md={4} sm={4} className="mb-4">
                      <div className="client_logos d-flex justify-content-center align-items-center">
                        <img src="/Clients_logo/Picture9.png" alt="" className="logo_size" />
                      </div>
                    </Col>
                    <Col lg={4} md={4} sm={4} className="mb-4">
                      <div className="client_logos d-flex justify-content-center align-items-center">
                        <img src="/Clients_logo/Picture10.png" alt="" className="logo_size" />
                      </div>
                    </Col>
                    <Col lg={4} md={4} sm={4} className="mb-4">
                      <div className="client_logos d-flex justify-content-center align-items-center">
                        <img src="/Clients_logo/Picture11.png" alt="" className="logo_size" />
                      </div>
                    </Col>
                    <Col lg={4} md={4} sm={4} className="mb-4">
                      <div className="client_logos d-flex justify-content-center align-items-center">
                        <img src="/Clients_logo/Picture12.png" alt="" className="logo_size" />
                      </div>
                    </Col>
                    <Col lg={4} md={4} sm={4} className="mb-4">
                      <div className="client_logos d-flex justify-content-center align-items-center">
                        <img src="/Clients_logo/Picture13.png" alt="" className="logo_size" />
                      </div>
                    </Col>
                   
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

export default Clients;
