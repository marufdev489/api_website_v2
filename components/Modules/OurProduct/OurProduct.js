import React from "react";
import SectionTitle from "../Section_title/Section_title";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";

const OurProduct = () => {
  return (
    <>
      <section className="section_padding">
        <SectionTitle titleUpDown="More Of Our Work" />
        <Container className="pt-3">
          <Row>
          <Col lg={6} className="device_div_height">
              <div className="p-4 position-relative image_shadow_bg">
                <img src="../device1.png" alt="" className="device_img " />
              </div>
            </Col>
            <Col lg={6} className="device_div_height px-5">
              <div>
                <h1 className="text-capitalize fw-bold pb-4">Product Name</h1>
                <p className="text-justify pe-4 pb-4">
                  "Story' is an intuitive and powerful web application to keep
                  track of daily or weekly progress on any kind of project. Due
                  to a novel UI, it helps remote teams to collaborate
                  efficiently from project inception to finish."
                </p>
                <ul className="d-flex justify-content-start mb-4">
                  <li className="me-3 text-capitalize pe-3 py-1">
                    <div className="d-flex justify-content-center">
                      <img
                        src="/React-icon.png"
                        alt=""
                        className="language_icons"
                      />
                    </div>
                    <p>React.js</p>
                  </li>
                  <li className="mx-3 text-capitalize px-3 py-1">
                    <div className="d-flex justify-content-center">
                      <img src="/Node.png" alt="" className="language_icons" />
                    </div>
                    <p>Node.js</p>
                  </li>
                  <li className="mx-3 text-capitalize px-3 py-1">
                    <div className="d-flex justify-content-center">
                      <img src="/Vue.png" alt="" className="language_icons" />
                    </div>
                    <p>Vue.js</p>
                  </li>
                  <li className="mx-3 text-capitalize px-3 py-1">
                    <div className="d-flex justify-content-center">
                      <img src="/aws.png" alt="" className="language_icons" />
                    </div>
                    <p>AWS</p>
                  </li>
                </ul>
                <div className="float-end">
                  <Link href="/" className="fw-bold me-4">
                    Go to API
                  </Link>
                  <Link
                    href="/ProductDetails/ProductsDetails"
                    className="CustomeBtn rounded-pill mt-4"
                  >
                    View case
                    <BiChevronRight className="CustomeBtnIcon" />
                  </Link>
                </div>
              </div>
            </Col>

            <Col lg={6} className="device_div_height px-5">
              <div>
                <h1 className="text-capitalize fw-bold pb-4">Product Name</h1>
                <p className="text-justify pe-4 pb-4">
                  "Story' is an intuitive and powerful web application to keep
                  track of daily or weekly progress on any kind of project. Due
                  to a novel UI, it helps remote teams to collaborate
                  efficiently from project inception to finish."
                </p>
                <ul className="d-flex justify-content-start mb-4">
                  <li className="me-3 text-capitalize pe-3 py-1">
                    <div className="d-flex justify-content-center">
                      <img
                        src="/React-icon.png"
                        alt=""
                        className="language_icons"
                      />
                    </div>
                    <p>React.js</p>
                  </li>
                  <li className="mx-3 text-capitalize px-3 py-1">
                    <div className="d-flex justify-content-center">
                      <img src="/Node.png" alt="" className="language_icons" />
                    </div>
                    <p>Node.js</p>
                  </li>
                  <li className="mx-3 text-capitalize px-3 py-1">
                    <div className="d-flex justify-content-center">
                      <img src="/Vue.png" alt="" className="language_icons" />
                    </div>
                    <p>Vue.js</p>
                  </li>
                  <li className="mx-3 text-capitalize px-3 py-1">
                    <div className="d-flex justify-content-center">
                      <img src="/aws.png" alt="" className="language_icons" />
                    </div>
                    <p>AWS</p>
                  </li>
                </ul>
                <div className="float-end">
                  <Link href="/" className="fw-bold me-4">
                    Go to API
                  </Link>
                  <Link
                    href="/ProductDetails/ProductsDetails"
                    className="CustomeBtn rounded-pill mt-4"
                  >
                    View case
                    <BiChevronRight className="CustomeBtnIcon" />
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={6} className="device_div_height">
              <div className="p-4 position-relative image_shadow_bg">
                <img src="../device1.png" alt="" className="device_img " />
              </div>
            </Col>
          </Row>
          
        </Container>
      </section>
    </>
  );
};

export default OurProduct;
