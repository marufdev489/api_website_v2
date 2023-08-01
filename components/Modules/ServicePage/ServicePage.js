import React from "react";
import SectionTitle from "../Section_title/Section_title";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Time from "../../../public/watch.svg";
import TimeTwo from "../../../public/watch2.svg";
import TimeThree from "../../../public/watch3.svg";
import FilterGallery from "../FilterGallery/FilterGallery";

const ServicePage = () => {
  return (
    <>
      <section id="pricing" className="section_padding services_bg">
        <SectionTitle titleUpDown="Pricing" />
        <Container>
          <Row>
            <Col lg={4}>
              <div className="px-3">
                <Card className=" p-4 multi_color_border">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-4">
                      <img
                        src="/watch.svg"
                        alt="time"
                        width={70}
                        height={70}
                        className=""
                      />
                      <Card.Title className="m-0 pricing_title fw-bold ps-3">
                        Large-scale projects
                      </Card.Title>
                    </div>
                    <div className="border-bottom">
                      <p className="fw-bold pt-2 text-capitalize">
                        Pricing Model :
                      </p>
                      <p className="dedicated_team pb-2">Dedicated team</p>
                    </div>
                    <div className="border-bottom">
                      <p className="fw-bold pt-2 text-capitalize">terms :</p>
                      <p className="dedicated_team pb-2">9+</p>
                    </div>
                    <div className="">
                      <p className="fw-bold pt-2 text-capitalize">
                        team size :
                      </p>
                      <p className="dedicated_team pb-2">
                        More than 8 specialists
                      </p>
                    </div>
                    <Button className="mt-5 text-capitalize learn_more_btn rounded-0">
                      learn more
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col lg={4}>
              <div className="px-3">
                <Card className=" p-4 multi_color_border">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-4">
                      <img
                        src="/watch2.svg"
                        alt="time"
                        width={70}
                        height={70}
                        className=""
                      />
                      <Card.Title className="m-0 pricing_title fw-bold ps-3">
                        Mid-scale projects
                      </Card.Title>
                    </div>
                    <div className="border-bottom">
                      <p className="fw-bold pt-2 text-capitalize">
                        Pricing Model :
                      </p>
                      <p className="dedicated_team pb-2">Time-and-Material</p>
                    </div>
                    <div className="border-bottom">
                      <p className="fw-bold pt-2 text-capitalize">terms :</p>
                      <p className="dedicated_team pb-2">4-6 months</p>
                    </div>
                    <div className="">
                      <p className="fw-bold pt-2 text-capitalize">
                        team size :
                      </p>
                      <p className="dedicated_team pb-2">3-7 specialists</p>
                    </div>
                    <Button className="mt-5 text-capitalize learn_more_btn rounded-0">
                      learn more
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col lg={4}>
              <div className="px-3">
                <Card className=" p-4 multi_color_border ">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-4">
                      <img
                        src="/watch3.svg"
                        alt="time"
                        width={70}
                        height={70}
                        className=""
                      />
                      <Card.Title className="m-0 pricing_title fw-bold ps-3">
                        Small-scale projects
                      </Card.Title>
                    </div>
                    <div className="border-bottom">
                      <p className="fw-bold pt-2 text-capitalize">
                        Pricing Model :
                      </p>
                      <p className="dedicated_team pb-2">Fixed Price</p>
                    </div>
                    <div className="border-bottom">
                      <p className="fw-bold pt-2 text-capitalize">terms :</p>
                      <p className="dedicated_team pb-2">1-3 months</p>
                    </div>
                    <div className="">
                      <p className="fw-bold pt-2 text-capitalize">
                        team size :
                      </p>
                      <p className="dedicated_team pb-2">1-2 specialist</p>
                    </div>
                    <Button className="mt-5 text-capitalize learn_more_btn rounded-0">
                      learn more
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
          {/* <FilterGallery/> */}
        </Container>
      </section>
      <section id="portfolio" className="section_padding portfolio">
        <SectionTitle titleUpDown="Portfolio" />
        <FilterGallery />
      </section>
    </>
  );
};

export default ServicePage;
