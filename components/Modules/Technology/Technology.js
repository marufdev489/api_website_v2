import React, { useState } from "react";
// import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
// import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";
import SectionTitle from "../Section_title/Section_title";
import tech from "../../../public/tech.jpg";
import tech1 from "../../../public/tech1.jpg";
import tech2 from "../../../public/tech2.jpg";
// import tech3 from "../../../public/tech3.jpg";
import tech4 from "../../../public/tech4.jpg";
import tech5 from "../../../public/tech5.jpg";

import { AiFillHtml5, AiFillAndroid, AiOutlineAlibaba, AiOutlineApartment, AiOutlineSlack, AiOutlineFileDone } from "react-icons/ai";
import { TbBrandCss3, TbSettingsAutomation } from "react-icons/tb";
import { BiLogoJavascript, BiLogoApple, BiLogoFlutter, BiAnalyse, BiLogoAws, BiLogoTrello, BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";
import { FaReact, FaNodeJs, FaPhp, FaUserLock } from "react-icons/fa";
import { IoLogoAngular, IoLogoPython } from "react-icons/io";
import { SiVuedotjs, SiNextdotjs, SiHuawei, SiMicrosoftazure, SiJirasoftware, SiMicrosoftoffice, SiMysql } from "react-icons/si";
import { DiDotnet, DiJava, DiBitbucket } from "react-icons/di";
import { BsFillCloudFog2Fill, BsFillDatabaseFill } from "react-icons/bs";
import { GrOracle } from "react-icons/gr";MdSpeed
import { PiFunctionLight } from "react-icons/pi";
import { MdSpeed } from "react-icons/md";

const Technology = () => {
   const [currentActiveKey, setCurrentActiveKey] = useState("1");

   return (
      <>
         <section id="technology" className="section_padding margin_bottom">
            <div className="container">

               <SectionTitle titleUpDown="Our Technologies"/>

               <div className="expertiseItem">
                  <Tab.Container
                     id="left-tabs-example"
                     defaultActiveKey="1"
                     activeKey={currentActiveKey}
                     onSelect={(key) => setCurrentActiveKey(key)}
                  >
                     {/* <Row> */}
                     <div className="position-relative">
                        <div className="navBox">
                           <Nav variant="pills" className="flex-column tabMenu">
                              <Nav.Item>
                                 <Nav.Link
                                    eventKey="1"
                                    onMouseEnter={() =>
                                       setCurrentActiveKey("1")
                                    }
                                 >
                                    Front-End
                                 </Nav.Link>
                              </Nav.Item>

                              <Nav.Item>
                                 <Nav.Link
                                    eventKey="2"
                                    onMouseEnter={() =>
                                       setCurrentActiveKey("2")
                                    }
                                 >
                                    Back-End
                                 </Nav.Link>
                              </Nav.Item>

                              <Nav.Item>
                                 <Nav.Link
                                    eventKey="3"
                                    onMouseEnter={() =>
                                       setCurrentActiveKey("3")
                                    }
                                 >
                                    Mobile Development
                                 </Nav.Link>
                              </Nav.Item>

                              <Nav.Item>
                                 <Nav.Link
                                    eventKey="4"
                                    onMouseEnter={() =>
                                       setCurrentActiveKey("4")
                                    }
                                 >
                                    QA & Testing
                                 </Nav.Link>
                              </Nav.Item>

                              <Nav.Item>
                                 <Nav.Link
                                    eventKey="5"
                                    onMouseEnter={() =>
                                       setCurrentActiveKey("5")
                                    }
                                 >
                                    Cloud
                                 </Nav.Link>
                              </Nav.Item>

                              <Nav.Item>
                                 <Nav.Link
                                    eventKey="6"
                                    onMouseEnter={() =>
                                       setCurrentActiveKey("6")
                                    }
                                 >
                                    Project Management
                                 </Nav.Link>
                              </Nav.Item>

                              <Nav.Item>
                                 <Nav.Link
                                    eventKey="7"
                                    onMouseEnter={() =>
                                       setCurrentActiveKey("7")
                                    }
                                 >
                                    Database
                                 </Nav.Link>
                              </Nav.Item>
                           </Nav>
                        </div>

                        <Tab.Content className="tabItemBox">
                           {/* Frontend  */}
                           <Tab.Pane
                              transition={false}
                              eventKey="1"
                              className="position-relative"
                           >
                              <div className="tabRight_imgBox">
                                 <img
                                    src="/tech.jpg"
                                    alt="img"
                                    className="fadeInRight"
                                 />
                              </div>
                              <div className="tabLeft_imgBox">
                                 <img
                                    src="/tech4.jpg"
                                    alt="img"
                                    className="fadeInLeft"
                                 />
                              </div>

                              <div className="tabRightBox d-flex justify-content-center align-items-center">
                                 <div className="tabTechBox d-flex justify-content-center align-items-center flex-wrap">
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <AiFillHtml5 className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">HTML</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <TbBrandCss3 className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">CSS</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <BiLogoJavascript className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">JavaScript</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <FaReact className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">React js</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <SiNextdotjs className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Next js</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <SiVuedotjs className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Vue js</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <IoLogoAngular className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Angular js</p>
                                    </div>
                                 </div>
                              </div>
                           </Tab.Pane>
                           {/* Backend */}
                           <Tab.Pane
                              transition={false}
                              eventKey="2"
                              className="position-relative"
                           >
                              <div className="tabRight_imgBox">
                                 <img
                                    src="/tech2.jpg"
                                    alt="img"
                                    className="fadeInRight"
                                 />
                              </div>
                              <div className="tabLeft_imgBox">
                                 <img
                                    src="/tech1.jpg"
                                    alt="img"
                                    className="fadeInLeft"
                                 />
                              </div>

                              <div className="tabRightBox d-flex justify-content-center align-items-center">
                                 <div className="tabTechBox d-flex justify-content-center align-items-center flex-wrap">
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <IoLogoPython className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Phython</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <FaNodeJs className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Node js</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <FaPhp className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">HTML</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <DiDotnet className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">.NET</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <DiJava className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Java</p>
                                    </div>
                                 </div>
                              </div>
                           </Tab.Pane>
                           {/* mobile development */}
                           <Tab.Pane
                              transition={false}
                              eventKey="3"
                              className="position-relative"
                           >
                              <div className="tabRight_imgBox">
                                 <img
                                    src="/tech5.jpg"
                                    alt="img"
                                    className="fadeInRight"
                                 />
                              </div>
                              <div className="tabLeft_imgBox">
                                 <img
                                    src="/tech2.jpg"
                                    alt="img"
                                    className="fadeInLeft"
                                 />
                              </div>

                              <div className="tabRightBox d-flex justify-content-center align-items-center">
                                 <div className="tabTechBox d-flex justify-content-center align-items-center flex-wrap">
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <AiFillAndroid className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Android</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <BiLogoApple className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">IOS</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <FaReact className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">React Native</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <BiLogoFlutter className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Flutter</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <BiAnalyse className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Cross platform</p>
                                    </div>
                                 </div>
                              </div>
                           </Tab.Pane>
                           {/*  */}
                           <Tab.Pane
                              transition={false}
                              eventKey="4"
                              className="position-relative"
                           >
                              <div className="tabRight_imgBox">
                                 <img
                                    src="/tech1.jpg"
                                    alt="img"
                                    className="fadeInRight"
                                 />
                              </div>
                              <div className="tabLeft_imgBox">
                                 <img
                                    src="/tech4.jpg"
                                    alt="img"
                                    className="fadeInLeft"
                                 />
                              </div>

                              <div className="tabRightBox d-flex justify-content-center align-items-center">
                                 <div className="tabTechBox d-flex justify-content-center align-items-center flex-wrap">
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <AiOutlineFileDone className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">SQA</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <FaUserLock className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Security testing</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <PiFunctionLight className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Functional testing</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <TbSettingsAutomation className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Automation testing</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <MdSpeed className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Performance testing</p>
                                    </div>
                                 </div>
                              </div>
                           </Tab.Pane>
                           {/* cloud */}         
                           <Tab.Pane
                              transition={false}
                              eventKey="5"
                              className="position-relative"
                           >
                              <div className="tabRight_imgBox">
                                 <img
                                    src="/tech4.jpg"
                                    alt="img"
                                    className="fadeInRight"
                                 />
                              </div>
                              <div className="tabLeft_imgBox">
                                 <img
                                    src="/tech5.jpg"
                                    alt="img"
                                    className="fadeInLeft"
                                 />
                              </div>

                              <div className="tabRightBox d-flex justify-content-center align-items-center">
                                 <div className="tabTechBox d-flex justify-content-center align-items-center flex-wrap">
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <BiLogoAws className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">AWS</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <BsFillCloudFog2Fill className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Google cloud</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <SiMicrosoftazure className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Microsoft Azure</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <SiHuawei className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Huawei cloud</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <AiOutlineAlibaba className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Alibaba cloud</p>
                                    </div>
                                 </div>
                              </div>
                           </Tab.Pane>
                           {/* Project Management */}  
                           <Tab.Pane
                              transition={false}
                              eventKey="6"
                              className="position-relative"
                           >
                              <div className="tabRight_imgBox">
                                 <img
                                    src="/tech4.jpg"
                                    alt="img"
                                    className="fadeInRight"
                                 />
                              </div>
                              <div className="tabLeft_imgBox">
                                 <img
                                    src="/tech5.jpg"
                                    alt="img"
                                    className="fadeInLeft"
                                 />
                              </div>

                              <div className="tabRightBox d-flex justify-content-center align-items-center">
                                 <div className="tabTechBox d-flex justify-content-center align-items-center flex-wrap">
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <SiJirasoftware className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Jira</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <BiLogoTrello className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Trello</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <AiOutlineApartment className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Draw.io</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <DiBitbucket className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Bitbucket</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <AiOutlineSlack className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Slack</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <SiMicrosoftoffice className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Ms office Suite</p>
                                    </div>
                                 </div>
                              </div>
                           </Tab.Pane>
                           {/* database */}  

                           <Tab.Pane
                              transition={false}
                              eventKey="7"
                              className="position-relative"
                           >
                              <div className="tabRight_imgBox">
                                 <img
                                    src="/tech4.jpg"
                                    alt="img"
                                    className="fadeInRight"
                                 />
                              </div>
                              <div className="tabLeft_imgBox">
                                 <img
                                    src="/tech5.jpg"
                                    alt="img"
                                    className="fadeInLeft"
                                 />
                              </div>

                              <div className="tabRightBox d-flex justify-content-center align-items-center">
                                 <div className="tabTechBox d-flex justify-content-center align-items-center flex-wrap">
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <SiMysql className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">MySQL</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <BsFillDatabaseFill className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">MsSQL</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <BiLogoMongodb className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">MongoDB</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <BiLogoPostgresql className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">PostgreSQL</p>
                                    </div>
                                    <div className="text-white text-center tabRightBoxContaint mx-4 my-3">
                                       <GrOracle className="fs-1 d-inline-block text-warning" />
                                       <p className="mb-0 mt-1">Oracle</p>
                                    </div>
                                 </div>
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
