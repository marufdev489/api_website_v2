import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import SectionTitle from "../Section_title/Section_title";

const OurExpertise = () => {
  return (
    <>
      <SectionTitle titleUpDown="Industries"/>
      <section className="section_padding industry_bg">
        
        <Container>
          <Row>
            <Col lg={6}></Col>
            <Col lg={6} className="mb-5">
              {/* swiper slider */}

              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
              >
                <SwiperSlide className="slider_card_size">
                  <div className="p-4">
                    <p className="text-capitalize pb-4"> tourism & hospitality</p>
                    <p className="text-capitalize fw-light fs-6 text-justify">
                    Elevate guest experiences in the hospitality industry through our technology solutions, encompassing website development and seamless integration of IoT applications.

                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slider_card_size">
                  <div className="p-4">
                    <p className="text-capitalize pb-4"> retail & E-commerce</p>
                    <p className="text-capitalize fw-light fs-6 text-justify">
                    Strengthen your online presence and deliver a seamless shopping experience through our expert website and web application development services.

                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slider_card_size">
                  <div className="p-4">
                    <p className="text-capitalize pb-4"> sports</p>
                    <p className="text-capitalize fw-light fs-6 text-justify">
                    Engage your fan base, streamline event management, and amplify your sports brand with our profound expertise in mobile app development, delivering flawless experiences for sports enthusiasts.

                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slider_card_size">
                  <div className="p-4">
                    <p className="text-capitalize pb-4"> NGO</p>
                    <p className="text-capitalize fw-light fs-6 text-justify">
                    Fortify your NGO's data security and humanitarian efforts with our expertise in cloud computing and cyber security.

                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slider_card_size">
                  <div className="p-4">
                    <p className="text-capitalize pb-4"> health & pharmaceuticals</p>
                    <p className="text-capitalize fw-light fs-6 text-justify">
                    Safeguard sensitive data and ensure regulatory compliance within the healthcare sector through our secure data management solutions, enabling you to prioritize patient care excellence.

                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default OurExpertise;
