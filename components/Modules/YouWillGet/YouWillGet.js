import React from "react";
import { BiTimer } from 'react-icons/bi';
import SectionTitle from "../Section_title/Section_title";

const YouWillGet = () => {
   return (
      <>
         <section id="youWillGet" className="section_padding">
            <SectionTitle titleUpDown="You Will Get" />
            <div className="container">
            <ul className="youWillGetBox d-flex mt-5 mb-5">
                  <li className="youWillGetItems">
                     <span className="youWillGetSerial">
                        <BiTimer className="fs-1"/>
                     </span>
                     <p>
                     15 minutes <br /> of consultation
                     </p>
                  </li>
                  <li className="youWillGetItems">
                  <span className="youWillGetSerial">
                        <BiTimer className="fs-1"/>
                     </span>
                     <p>
                     Strict <br /> non-disclosure policy
                     </p>
                  </li>
                  <li className="youWillGetItems">
                  <span className="youWillGetSerial">
                        <BiTimer className="fs-1"/>
                     </span>
                     <p>
                     Timeline and<br /> cost evaluation
                     </p>
                  </li>
                  <li className="youWillGetItems">
                  <span className="youWillGetSerial">
                        <BiTimer className="fs-1"/>
                     </span>
                     <p>
                     Suggestions in<br />terms of the tech stack
                     </p>
                  </li>
                  <li className="youWillGetItems">
                  <span className="youWillGetSerial">
                        <BiTimer className="fs-1"/>
                     </span>
                     <p>
                     Action plan to<br /> kick-start your project
                     </p>
                  </li>
               </ul>
               
            </div>
         </section>
      </>
   );
};

export default YouWillGet;
