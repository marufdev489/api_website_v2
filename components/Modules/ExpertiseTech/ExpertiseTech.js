import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import SectionTitle from "../Section_title/Section_title";
import ApplicationImg from '../../../public/OurExpertise/Application Modernization.jpg'
import UIUXImg from '../../../public/OurExpertise/UI UX Design.jpg'
import SQAImg from '../../../public/OurExpertise/Software QA & Testing.jpg'
import IotImg from '../../../public/OurExpertise/Internet of Things (IoT).jpg'
import AiImg from '../../../public/OurExpertise/Machine Learning & AI.jpg'
import DevOpsImg from '../../../public/OurExpertise/DevOps.jpg'
import MarketingImg from '../../../public/OurExpertise/Digital Marketing.jpg'
import DevelopmentImg from '../../../public/OurExpertise/Product Development.jpg'
import shape1 from "../../../public/shape/cta-cyan.svg";
import shape2 from "../../../public/shape/cta-blue.svg";
import shape3 from "../../../public/shape/cta-orange.svg";

// import React, { useRef, useState } from 'react';
// Import Swiper React components

const ExpertiseTech = () => {
  const [currentActiveKey, setCurrentActiveKey] = useState("1");

  return (
    <>
      <section id="expertiseTech" className="section_padding_top">
        <SectionTitle titleUpDown="Our Expertise" />

        <div className="container">
          <div className="expertiseItem pt-4">
            <Tab.Container
              id="left-tabs-example"
              defaultActiveKey="1"
              activeKey={currentActiveKey}
              onSelect={(key) => setCurrentActiveKey(key)}
            >
              <Row>
                <Col sm={5}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link
                        eventKey="1"
                        onMouseEnter={() => setCurrentActiveKey("1")}
                      >
                        1. Application Development
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="2"
                        onMouseEnter={() => setCurrentActiveKey("2")}
                      >
                        2. UI/UX Design
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="3"
                        onMouseEnter={() => setCurrentActiveKey("3")}
                      >
                        3. Software QA & Testing
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="4"
                        onMouseEnter={() => setCurrentActiveKey("4")}
                      >
                        4. Application Modernization
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="5"
                        onMouseEnter={() => setCurrentActiveKey("5")}
                      >
                        5. IoT
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="6"
                        onMouseEnter={() => setCurrentActiveKey("6")}
                      >
                        6. Machine Learning & AI
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="7"
                        onMouseEnter={() => setCurrentActiveKey("7")}
                      >
                        7. DevOps
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="8"
                        onMouseEnter={() => setCurrentActiveKey("8")}
                      >
                        8. Digital Marketing
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={7}>
                  <Tab.Content>
                    <Tab.Pane eventKey="1">
                      <img src="/OurExpertise/Product Development.jpg" alt="img" />
                      <p className="py-3 text-justify">
                        Rapid advancements in technology, particularly the
                        growth of mobile devices and the Internet, have been a
                        driving force behind the growth in application
                        development. From social media platforms and Ecommerce
                        websites to productivity tools and entertainment apps,
                        the digital landscape is teeming with applications that
                        cater to a variety of needs and interests.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="2">
                      <img src="/OurExpertise/UI UX Design.jpg" alt="img" />
                      <p className="py-3 text-justify">
                        For UI/UX design, we take a user-centered approach,
                        tailoring every design element to ensure delightful user
                        experiences. Our iterative prototyping allows us to
                        refine designs with real users, surpassing expectations.
                        We align our designs with your brand identity,
                        reinforcing your message with a consistent look and
                        feel. And our cross-functional collaboration between
                        UI/UX designers and developers ensures seamless
                        implementation and integration. Through continuous
                        innovation, we can assure one thing, we think way ahead
                        of design trends to bring fresh ideas to every project.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="3">
                      <img src="/OurExpertise/Software QA & Testing.jpg" alt="img" />
                      <p className="py-3 text-justify">
                        Our QA team comprises skilled professionals with deep
                        testing knowledge. They sincerely plan and execute test
                        scenarios to identify and rectify issues before
                        deployment. We leverage test automation tools and
                        frameworks to enhance efficiency, enabling us to perform
                        repetitive tests, regression tests, and performance
                        tests more effectively. Our team makes detailed test
                        documentation, including test plans, cases, and bug
                        reports to ensure transparency and seamless
                        communication between the development and testing teams.
                        Our testing includes real-world use cases and scenarios,
                        simulating actual user interactions to identify
                        potential usability issues and ensure seamless user
                        experiences.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="4">
                      <img src="/OurExpertise/Application Modernization.jpg" alt="img" />
                      <p className="py-3 text-justify">
                        Are you want to modernize your business with more
                        prominent and up-to-date technologies? You may look
                        forward to an Application Modernization. Our dedicated
                        team rejuvenates outdated applications with advanced
                        technologies, optimizing performance, scalability, and
                        security. We empower businesses to confidently embrace
                        the digital era, unlocking the full potential of their
                        applications and staying ahead in the ever-changing
                        landscape.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="5">
                      <img src="/OurExpertise/Internet of Things (IoT).jpg" alt="img" />
                      <p className="py-3 text-justify">
                        With our deep understanding of IoT, we create innovative
                        solutions that utilize the potential of connected
                        devices and data-driven insights.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="6">
                      <img src="/OurExpertise/Machine Learning & AI.jpg" alt="img" />
                      <p className="py-3 text-justify">
                        Our amazing team of Machine Learning & AI utilizes
                        advanced technologies to empower businesses with
                        data-driven decisions, process automation, and valuable
                        insights. Our dedicated team of skilled data scientists
                        and engineers develop AI solutions, including natural
                        language processing, computer vision, and predictive
                        analytics, allowing businesses to unlock opportunities,
                        optimize efficiency, and embrace innovation. Partner
                        with us to meet the true potential of Machine Learning &
                        AI and elevate your business to new heights.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="7">
                      <img src="/OurExpertise/DevOps.jpg" alt="img" />
                      <p className="py-3 text-justify">
                        Our proficiency in DevOps allows us to streamline the
                        development process, enhance collaboration, and
                        accelerate software delivery. With a deep learning of
                        industry-leading DevOps tools and methodologies, we
                        enable continuous integration and continuous delivery
                        (CI/CD) pipelines, ensuring faster and more reliable
                        software releases. Our skilled team implements automated
                        testing, deployment, and monitoring, resulting in
                        reduced errors and increased efficiency. Our DevOps
                        expertise will empower your businesses to achieve
                        greater agility, scalability, and flexibility in their
                        software development and deployment processes.
                      </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="8">
                      <img src="/OurExpertise/Digital Marketing.jpg" alt="img" />
                      <p className="py-3 text-justify">
                        API Solutions specializes in digital marketing and
                        content development. We specialize in creating custom
                        marketing strategies and compelling content to boost
                        your online presence and impact. Our expertise includes
                        SEO optimization, social media management, PPC
                        advertising, and data-driven insights. Join hands with
                        us to elevate your brand, connect with your audience,
                        and succeed in the digital world.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </div>

        <div className="section-overlay shapeOpacity">
          <img
            id="CTA-0"
            loading="lazy"
            decoding="async"
            src="/shape/cta-cyan.svg"
            alt="img"
          />
          <img
            id="CTA-1"
            loading="lazy"
            decoding="async"
            src="/shape/cta-blue.svg"
            alt="img"
          />
          <img
            id="CTA-2"
            loading="lazy"
            decoding="async"
            src="/shape/cta-blue.svg"
            alt="img"
          />
          <img
            id="CTA-3"
            loading="lazy"
            decoding="async"
            src="/shape/cta-cyan.svg"
            alt="img"
          />
          <img
            id="CTA-4"
            loading="lazy"
            decoding="async"
            src="/shape/cta-blue.svg"
            alt="img"
          />
          <img
            id="CTA-5"
            loading="lazy"
            decoding="async"
            src="/shape/cta-cyan.svg"
            alt="img"
          />
          <img
            id="CTA-6"
            loading="lazy"
            decoding="async"
            src="/shape/cta-cyan.svg"
            alt="img"
          />
          <img
            id="CTA-7"
            loading="lazy"
            decoding="async"
            src="/shape/cta-blue.svg"
            alt="img"
          />
          <img
            id="CTA-8"
            loading="lazy"
            decoding="async"
            src="/shape/cta-orange.svg"
            alt="img"
          />
          <img
            id="CTA-9"
            loading="lazy"
            decoding="async"
            src="/shape/cta-blue.svg"
            alt="img"
          />
        </div>
      </section>
    </>
  );
};

export default ExpertiseTech;
