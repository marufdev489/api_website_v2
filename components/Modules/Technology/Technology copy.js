import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import tech from "../../../public/tech.jpg";
import tech2 from "../../../public/tech2.jpg";
import tech3 from "../../../public/tech3.jpg";

const Technology = () => {
   const [currentActiveKey, setCurrentActiveKey] = useState("1");

   return (
      <>
         <section id="technology" className="section_padding_top">
            <div className="container">
               <div className="SecTitleBox mb-3">
                  <h1 className="SecTitle text-capitalize">Our Technologies</h1>
                  <p className="SecTitleBg text-uppercase">Our Technologies</p>
               </div>

               <div className="expertiseItem demo__Margin">
                  <Tab.Container
                     id="left-tabs-example"
                     defaultActiveKey="1"
                     activeKey={currentActiveKey}
                     onSelect={(key) => setCurrentActiveKey(key)}
                  >
                     {/* <Row> */}
                        <div className="d-flex">
                           <Nav variant="pills" className="flex-column tabMenu">
                              <Nav.Item>
                                 <Nav.Link
                                    eventKey="1"
                                    onMouseEnter={() =>
                                       setCurrentActiveKey("1")
                                    }
                                 >
                                    Platforms
                                 </Nav.Link>
                              </Nav.Item>

                              <Nav.Item>
                                 <Nav.Link
                                    eventKey="2"
                                    onMouseEnter={() =>
                                       setCurrentActiveKey("2")
                                    }
                                 >
                                    Architecture
                                 </Nav.Link>
                              </Nav.Item>

                              {/* <Nav.Item>
                                 <Nav.Link
                                    eventKey="3"
                                    onMouseEnter={() =>
                                       setCurrentActiveKey("3")
                                    }
                                 >
                                    Web/front-end
                                 </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link
                                    eventKey="4"
                                    onMouseEnter={() =>
                                       setCurrentActiveKey("4")
                                    }
                                 >
                                    Mobile
                                 </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link
                                    eventKey="5"
                                    onMouseEnter={() =>
                                       setCurrentActiveKey("5")
                                    }
                                 >
                                    Embedded/iot
                                 </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link
                                    eventKey="6"
                                    onMouseEnter={() =>
                                       setCurrentActiveKey("6")
                                    }
                                 >
                                    Data Science & Ai
                                 </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                 <Nav.Link
                                    eventKey="7"
                                    onMouseEnter={() =>
                                       setCurrentActiveKey("7")
                                    }
                                 >
                                    Cloud & Devops
                                 </Nav.Link>
                              </Nav.Item> */}
                           </Nav>

                           <Tab.Content>
                              <Tab.Pane
                                 transition={false}
                                 eventKey="1"
                                 className="position-relative"
                              >
                                 <div className="tabImgBox">
                                    <img src="/tech.jpg" alt="img" />
                                 </div>
                                 <div className="tabLeftBox">
                                    <img src="/tech2.jpg" alt="img" />
                                 </div>
                                 <div className="tabRightBox p-5">
                                    <ul className="text-white tabRightBoxContaint">
                                       <li>HTML</li>
                                       <li>CSS</li>
                                       <li>Javascript</li>
                                       <li>jQuery</li>
                                       <li>React</li>
                                       <li>Next js</li>
                                    </ul>
                                 </div>
                              </Tab.Pane>
                              <Tab.Pane
                                 transition={false}
                                 eventKey="2"
                                 className="position-relative"
                              >
                                 <div className="tabImgBox">
                                    <img src="/tech2.jpg" alt="img" />
                                 </div>
                                 <div className="tabLeftBox">
                                    <img src="/tech3.jpg" alt="img" />
                                 </div>
                                 <div className="tabRightBox p-5">
                                    <ul className="text-white">
                                       <li>MongoDB</li>
                                       <li>Node Js</li>
                                       <li>Angular</li>
                                       <li>PHP</li>
                                       <li>Laravel</li>
                                       <li>Javascript</li>
                                    </ul>
                                 </div>
                              </Tab.Pane>
                           </Tab.Content>
                        </div>
                     {/* </Row> */}
                  </Tab.Container>
               </div>
            </div>
         </section>
      </>
   );
};

export default Technology;
