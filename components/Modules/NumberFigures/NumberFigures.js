import React from "react";
import SectionTitle from "../Section_title/Section_title";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";
import Counter3 from "./Counter3";
import Counter4 from "./Counter4";

const NumberFigures = () => {
   return (
      <>
         <section id="numberFigures" className="section_padding">
            <SectionTitle titleUpDown="Numbers & Figures " />
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                     <div className="wItem">
                        <img
                           src="/welcome.png"
                           alt="img"
                           className="welcpmeImg img-fluid"
                        />
                        <div className="yearBg">
                           <h1 className="">7</h1>
                           <p>Years of experience</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                     <div className="row gx-4 gy-4">
                        <div className="col-md-6 col-sm-6">
                           <div className="numberBox p-4 py-md-5 rounded text-center position-relative">
                              <Counter1 />
                              <strong className="serialNum">/ 01.</strong>
                              <p className="text-secondary">
                                 Team Members
                              </p>
                           </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                           <div className="numberBox p-4 py-md-5 rounded text-center position-relative">
                              <Counter2 />
                              <strong className="serialNum">/ 02.</strong>
                              <p className="text-secondary">
                                 Satisfied Customers
                              </p>
                           </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                           <div className="numberBox p-4 py-md-5 rounded text-center position-relative">
                              <Counter3 />
                              <strong className="serialNum">/ 03.</strong>
                              <p className="text-secondary">Software Engineers</p>
                           </div>
                        </div>
                        <div className="col-md-6 col-sm-6">
                           <div className="numberBox p-4 py-md-5 rounded text-center position-relative">
                              <Counter4 />
                              <strong className="serialNum">/ 04.</strong>
                              <p className="text-secondary">
                              Customer Retention Rate
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default NumberFigures;
