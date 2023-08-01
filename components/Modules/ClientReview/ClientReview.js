import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Ganachery from "../../../public/Clients_logo/Picture01.png";
import Ifad from "../../../public/Clients_logo/Picture9.png";
import Haefa from "../../../public/Clients_logo/haefa.png";
import Commentimg from "../../../public/commentimg.png";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../Section_title/Section_title";

const ClientReview = () => {
  return (
    <>
      <section id="clientsReview" className="section_padding">
        <SectionTitle titleUpDown="Clients Review" />
        <div className="clients_review">
          <Carousel fade>
            <Carousel.Item>
              <Container>
                <Row>
                  <Col
                    lg={5}
                    className="d-flex align-items-center justify-content-center sec_height"
                  >
                    <div className="client_img_bg rounded-pill d-flex justify-content-center align-items-center">
                      <img src="/Clients_logo/Picture01.png" alt="img" className="client_img" />
                    </div>
                  </Col>
                  <Col lg={7} className="align-items-center sec_height">
                    <img src="/commentimg.png" alt="img" className="Commentimg" />
                    <p className="commentText pe-5 pb-4">
                      API team have tremendous know how in building extensive
                      web application.The project has been being implemented in
                      close cooperation and we have influence on the project
                      progress.
                    </p>
                    <div className="border-start border-secondary mt-3">
                      <p className="client_name text-capitalize ps-3">
                      Afshan Sattar
                      
                      </p>
                      <p className="client_de text-capitalize text-muted ps-3">
                      Ganachery
                     
                      </p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container>
                <Row>
                  <Col
                    lg={5}
                    className="d-flex align-items-center justify-content-center sec_height"
                  >
                    <div className="client_img_bg rounded-pill d-flex justify-content-center align-items-center">
                      <img src="/Clients_logo/Picture9.png" alt="" className="client_img" />
                    </div>
                  </Col>
                  <Col lg={7} className="align-items-center sec_height">
                    <img src="/commentimg.png" alt="img" className="Commentimg" />
                    <p className="commentText pe-5 pb-4">
                      API team have tremendous know how in building extensive
                      web application.The project has been being implemented in
                      close cooperation and we have influence on the project
                      progress.
                    </p>
                    <div className="border-start border-secondary mt-3">
                      <p className="client_name text-capitalize ps-3">
                      Md. Habibur Rahman
                      
                      </p>
                      <p className="client_de text-capitalize text-muted ps-3">
                      Group Head of Information Technology
                     
                      </p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container>
                <Row>
                <Col
                    lg={5}
                    className="d-flex align-items-center justify-content-center sec_height"
                  >
                    <div className="client_img_bg rounded-pill d-flex justify-content-center align-items-center">
                      <img src="/Clients_logo/haefa.png" alt="img" className="client_img" />
                    </div>
                  </Col>
                  <Col lg={7} className="align-items-center sec_height">
                    <img src="/commentimg.png" alt="img" className="Commentimg" />
                    <p className="commentText pe-5 pb-4">
                    We have been working with API SOLUTIONS for over a year now and have found them to be terrific Tech Partners. We will happly work with them again.
                    </p>
                    <div className="border-start border-secondary mt-3">
                      <p className="client_name text-capitalize ps-3">
                      Mohammad Monjur Iqbal
                      </p>
                      <p className="client_de text-capitalize text-muted ps-3">
                      Senior Director, Strategic Planning and Communication
                      </p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
           
          </Carousel>
        </div>

      </section>
    </>
  );
};

export default ClientReview;
