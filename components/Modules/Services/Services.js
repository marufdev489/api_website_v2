import Link from "next/link";
import React from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import SectionTitle from "../Section_title/Section_title";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Services = () => {
   return (
      <>
         <section id="services" className="section_padding">
            <div className="container">
               <SectionTitle titleUpDown="Our Services" />
               <div className="serviceItem">
                  <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                     <Row>
                        <Col sm={9}>
                           <Tab.Content>
                              <Tab.Pane eventKey="1">
                                 <div className="serviceName">
                                    <Link href="/">Technology consulting</Link>
                                    <Link href="/">Digital transformation</Link>
                                    <Link href="/">
                                       Research and development
                                    </Link>
                                    <Link href="/">Customer experience</Link>
                                    <Link href="/">Technology consulting</Link>
                                    <Link href="/">Technology consulting</Link>
                                 </div>

                                 <div className="serviceContein d-flex">
                                    <div className="serviceText pe-5 mt-5">
                                       <p className="lh-lg">
                                          Our team is comprised of passionate
                                          and skilled professionals who are
                                          committed to delivering excellence.
                                          With years of experience in the
                                          industry, they have successfully
                                          executed numerous custom software
                                          projects for diverse clients. We
                                          handpick our developers to ensure they
                                          have the right expertise and align
                                          with our company's values of
                                          innovation, collaboration, and client
                                          satisfaction.
                                       </p>
                                       <Link
                                          href="/"
                                          className="learn-more mt-4"
                                       >
                                          <span
                                             className="circle"
                                             aria-hidden="true"
                                          >
                                             <span className="icon arrow"></span>
                                          </span>
                                          <span className="button-text">
                                             Learn More
                                          </span>
                                       </Link>
                                    </div>
                                    <div className="serviceImg">
                                       <img src="/service1.png" alt="img" />
                                    </div>
                                 </div>
                              </Tab.Pane>
                              <Tab.Pane eventKey="2">
                                 <div className="serviceName">
                                    <Link href="/">Technology consulting</Link>
                                    <Link href="/">Digital transformation</Link>
                                    <Link href="/">
                                       Research and development
                                    </Link>
                                    <Link href="/">Customer experience</Link>
                                    <Link href="/">Technology consulting</Link>
                                 </div>
                                 <div className="serviceContein d-flex">
                                    <div className="serviceText pe-5 mt-5">
                                       <p className="lh-lg">
                                          API Solutions provides high-quality
                                          web application development services
                                          designed to suit your business
                                          requirements. Our skilled web
                                          developers utilize the latest
                                          technologies to create web apps that
                                          are scalable, responsive, and visually
                                          appealing, enhancing your online
                                          presence.
                                       </p>
                                       <Link
                                          href="/"
                                          className="learn-more mt-4"
                                       >
                                          <span
                                             className="circle"
                                             aria-hidden="true"
                                          >
                                             <span className="icon arrow"></span>
                                          </span>
                                          <span className="button-text">
                                             Learn More
                                          </span>
                                       </Link>
                                    </div>
                                    <div className="serviceImg">
                                       <img src="/service2.png" alt="img" />
                                    </div>
                                 </div>
                              </Tab.Pane>
                              <Tab.Pane eventKey="3">
                                 <div className="serviceName">
                                    <Link href="/">
                                       Research and development
                                    </Link>
                                    <Link href="/">Customer experience</Link>
                                    <Link href="/">Technology consulting</Link>
                                 </div>
                                 <div className="serviceContein d-flex">
                                    <div className="serviceText pe-5 mt-5">
                                       <p className="lh-lg">
                                          Empower your business to connect with
                                          customers on the go through our
                                          exceptional mobile app development
                                          services. API Solutions is passionate
                                          about creating user-friendly,
                                          feature-rich, and high-performance
                                          mobile applications for Android and
                                          iOS platforms.
                                       </p>
                                       <Link
                                          href="/"
                                          className="learn-more mt-4"
                                       >
                                          <span
                                             className="circle"
                                             aria-hidden="true"
                                          >
                                             <span className="icon arrow"></span>
                                          </span>
                                          <span className="button-text">
                                             Learn More
                                          </span>
                                       </Link>
                                    </div>
                                    <div className="serviceImg">
                                       <img src="/service3.png" alt="img" />
                                    </div>
                                 </div>
                              </Tab.Pane>
                              <Tab.Pane eventKey="4">
                                 <div className="serviceName">
                                    <Link href="/">
                                       Research and development
                                    </Link>
                                    <Link href="/">Customer experience</Link>
                                    <Link href="/">Technology consulting</Link>
                                 </div>
                                 <div className="serviceContein d-flex">
                                    <div className="serviceText pe-5 mt-5">
                                       <p className="lh-lg">
                                          A seamless and enjoyable user
                                          experience is paramount to the success
                                          of any digital product or service. Our
                                          UI/UX design service is dedicated to
                                          creating visually captivating and
                                          intuitively functional interfaces that
                                          leave a lasting impression on your
                                          users.
                                       </p>
                                       <Link
                                          href="/"
                                          className="learn-more mt-4"
                                       >
                                          <span
                                             className="circle"
                                             aria-hidden="true"
                                          >
                                             <span className="icon arrow"></span>
                                          </span>
                                          <span className="button-text">
                                             Learn More
                                          </span>
                                       </Link>
                                    </div>
                                    <div className="serviceImg">
                                       <img src="/service2.png" alt="img" />
                                    </div>
                                 </div>
                              </Tab.Pane>
                              <Tab.Pane eventKey="5">
                                 <div className="serviceName">
                                    <Link href="/">
                                       Research and development
                                    </Link>
                                    <Link href="/">Customer experience</Link>
                                    <Link href="/">Technology consulting</Link>
                                 </div>
                                 <div className="serviceContein d-flex">
                                    <div className="serviceText pe-5 mt-5">
                                       <p className="lh-lg">
                                          In the dynamic world of software
                                          development, Software QA and Testing
                                          emerge as the cornerstones of success.
                                          Embracing a range of benefits, they
                                          revolutionize the entire software
                                          development lifecycle, empowering
                                          businesses to thrive and users to
                                          enjoy seamless experiences.
                                       </p>
                                       <Link
                                          href="/"
                                          className="learn-more mt-4"
                                       >
                                          <span
                                             className="circle"
                                             aria-hidden="true"
                                          >
                                             <span className="icon arrow"></span>
                                          </span>
                                          <span className="button-text">
                                             Learn More
                                          </span>
                                       </Link>
                                    </div>
                                    <div className="serviceImg">
                                       <img src="/service1.png" alt="img" />
                                    </div>
                                 </div>
                              </Tab.Pane>
                              <Tab.Pane eventKey="6">
                                 <div className="serviceName">
                                    <Link href="/">
                                       Research and development
                                    </Link>
                                    <Link href="/">Customer experience</Link>
                                    <Link href="/">Technology consulting</Link>
                                 </div>
                                 <div className="serviceContein d-flex">
                                    <div className="serviceText pe-5 mt-5">
                                       <p className="lh-lg">
                                          We lead the way in offering Machine
                                          Learning (ML) and Artificial
                                          Intelligence (AI) services that give
                                          businesses a significant competitive
                                          advantage. Our specialized expertise
                                          in ML and AI empowers companies to
                                          explore data-driven insights, automate
                                          tasks, and boost overall efficiency
                                          across diverse industries. With our
                                          services, businesses can embrace the
                                          future of technology and unlock new
                                          opportunities for growth and success.
                                       </p>
                                       <Link
                                          href="/"
                                          className="learn-more mt-4"
                                       >
                                          <span
                                             className="circle"
                                             aria-hidden="true"
                                          >
                                             <span className="icon arrow"></span>
                                          </span>
                                          <span className="button-text">
                                             Learn More
                                          </span>
                                       </Link>
                                    </div>
                                    <div className="serviceImg">
                                       <img src="/service3.png" alt="img" />
                                    </div>
                                 </div>
                              </Tab.Pane>
                              <Tab.Pane eventKey="7">
                                 <div className="serviceName">
                                    <Link href="/">
                                       Research and development
                                    </Link>
                                    <Link href="/">Customer experience</Link>
                                    <Link href="/">Technology consulting</Link>
                                 </div>
                                 <div className="serviceContein d-flex">
                                    <div className="serviceText pe-5 mt-5">
                                       <p className="lh-lg">
                                          API Solutions is proud to offer
                                          cutting-edge Cloud Solutions that
                                          enable businesses to harness the full
                                          potential of cloud computing. As cloud
                                          technology continues to revolutionize
                                          the way organizations operate, we
                                          stand ready to be your trusted partner
                                          in this digital transformation
                                          journey.
                                       </p>
                                       <Link
                                          href="/"
                                          className="learn-more mt-4"
                                       >
                                          <span
                                             className="circle"
                                             aria-hidden="true"
                                          >
                                             <span className="icon arrow"></span>
                                          </span>
                                          <span className="button-text">
                                             Learn More
                                          </span>
                                       </Link>
                                    </div>
                                    <div className="serviceImg">
                                       <img src="/service1.png" alt="img" />
                                    </div>
                                 </div>
                              </Tab.Pane>
                              <Tab.Pane eventKey="8">
                                 <div className="serviceName">
                                    <Link href="/">
                                       Research and development
                                    </Link>
                                    <Link href="/">Customer experience</Link>
                                    <Link href="/">Technology consulting</Link>
                                 </div>
                                 <div className="serviceContein d-flex">
                                    <div className="serviceText pe-5 mt-5">
                                       <p className="lh-lg">
                                          We understand the critical role that
                                          IT infrastructure plays in the smooth
                                          functioning of businesses. That's why
                                          we offer comprehensive IT Support &
                                          Maintenance services to ensure your
                                          systems operate at their best,
                                          allowing you to focus on your core
                                          business objectives.
                                       </p>
                                       <Link
                                          href="/"
                                          className="learn-more mt-4"
                                       >
                                          <span
                                             className="circle"
                                             aria-hidden="true"
                                          >
                                             <span className="icon arrow"></span>
                                          </span>
                                          <span className="button-text">
                                             Learn More
                                          </span>
                                       </Link>
                                    </div>
                                    <div className="serviceImg">
                                       <img src="/service2.png" alt="img" />
                                    </div>
                                 </div>
                              </Tab.Pane>
                              <Tab.Pane eventKey="9">
                                 <div className="serviceName">
                                    <Link href="/">
                                       Research and development
                                    </Link>
                                    <Link href="/">Customer experience</Link>
                                    <Link href="/">Technology consulting</Link>
                                 </div>
                                 <div className="serviceContein d-flex">
                                    <div className="serviceText pe-5 mt-5">
                                       <p className="lh-lg">
                                          We offer comprehensive IT consulting
                                          services to help businesses navigate
                                          the ever-changing landscape of
                                          technology. Our expert consultants are
                                          here to understand your unique
                                          challenges and provide solutions that
                                          drive growth, efficiency, and
                                          innovation.
                                       </p>
                                       <Link
                                          href="/"
                                          className="learn-more mt-4"
                                       >
                                          <span
                                             className="circle"
                                             aria-hidden="true"
                                          >
                                             <span className="icon arrow"></span>
                                          </span>
                                          <span className="button-text">
                                             Learn More
                                          </span>
                                       </Link>
                                    </div>
                                    <div className="serviceImg">
                                       <img src="/service3.png" alt="img" />
                                    </div>
                                 </div>
                              </Tab.Pane>
                              <Tab.Pane eventKey="10">
                                 <div className="serviceName">
                                    <Link href="/">
                                       Research and development
                                    </Link>
                                    <Link href="/">Customer experience</Link>
                                    <Link href="/">Technology consulting</Link>
                                 </div>
                                 <div className="serviceContein d-flex">
                                    <div className="serviceText pe-5 mt-5">
                                       <p className="lh-lg">
                                          In today's rapidly evolving business
                                          landscape, staying ahead requires more
                                          than just incremental changes – it
                                          demands a complete shift in mindset
                                          and operations. At API Solutions, we
                                          empower businesses to embrace the
                                          future through our transformative
                                          Digital Transformation services.
                                       </p>
                                       <Link
                                          href="/"
                                          className="learn-more mt-4"
                                       >
                                          <span
                                             className="circle"
                                             aria-hidden="true"
                                          >
                                             <span className="icon arrow"></span>
                                          </span>
                                          <span className="button-text">
                                             Learn More
                                          </span>
                                       </Link>
                                    </div>
                                    <div className="serviceImg">
                                       <img src="/service2.png" alt="img" />
                                    </div>
                                 </div>
                              </Tab.Pane>
                           </Tab.Content>
                        </Col>
                        <Col sm={3}>
                           <Nav
                              variant="pills"
                              className="flex-column serviceTabs"
                           >
                              <Nav.Item>
                                 <Nav.Link eventKey="1">
                                    <span className="arrowIcon">
                                       <FaLongArrowAltLeft />
                                    </span>
                                    Custom Software Development
                                 </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link eventKey="2">
                                    <span className="arrowIcon">
                                       <FaLongArrowAltLeft />
                                    </span>
                                    Web App Development
                                 </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link eventKey="3">
                                    <span className="arrowIcon">
                                       <FaLongArrowAltLeft />
                                    </span>
                                    Mobile App Development
                                 </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link eventKey="4">
                                    <span className="arrowIcon">
                                       <FaLongArrowAltLeft />
                                    </span>
                                    UI/UX Design
                                 </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link eventKey="5">
                                    <span className="arrowIcon">
                                       <FaLongArrowAltLeft />
                                    </span>
                                    Software QA and Testing
                                 </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link eventKey="6">
                                    <span className="arrowIcon">
                                       <FaLongArrowAltLeft />
                                    </span>
                                    Machine Learning and AI
                                 </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link eventKey="7">
                                    <span className="arrowIcon">
                                       <FaLongArrowAltLeft />
                                    </span>
                                    Cloud Solutions
                                 </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link eventKey="8">
                                    <span className="arrowIcon">
                                       <FaLongArrowAltLeft />
                                    </span>
                                    IT Support & Maintenance
                                 </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link eventKey="9">
                                    <span className="arrowIcon">
                                       <FaLongArrowAltLeft />
                                    </span>
                                    IT Consulting
                                 </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link eventKey="10">
                                    <span className="arrowIcon">
                                       <FaLongArrowAltLeft />
                                    </span>
                                    Digital Transformation
                                 </Nav.Link>
                              </Nav.Item>
                           </Nav>
                        </Col>
                     </Row>
                  </Tab.Container>
               </div>
            </div>
         </section>
      </>
   );
};

export default Services;
