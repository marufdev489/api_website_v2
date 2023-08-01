import React from "react";
import SectionTitle from "../Section_title/Section_title";

const WhatNext = () => {
   return (
      <>
         <section id="whatNext" className="section_padding mb-5">
            <SectionTitle titleUpDown="What Happens Next" />

            <div className="container">
               <ul className="nextItemsBox d-flex mt-5">
                  <li className="nextItems">
                     <span className="nextSerial">1</span>
                     <p>
                        We'll read your e-mail, <br /> thank you
                     </p>
                  </li>
                  <li className="nextItems">
                     <span className="nextSerial">2</span>
                     <p>
                        We'll respond <br /> within 8 hours
                     </p>
                  </li>
                  <li className="nextItems">
                     <span className="nextSerial">3</span>
                     <p>
                        We'll line up a 30 min <br /> expert call with you
                     </p>
                  </li>
                  <li className="nextItems">
                     <span className="nextSerial">4</span>
                     <p>
                        You'll get a proposal <br /> within 5 business days
                     </p>
                  </li>
                  <li className="nextItems">
                     <span className="nextSerial">5</span>
                     <p>
                        All goes well<br /> we're a go !
                     </p>
                  </li>
               </ul>
            </div>
         </section>
      </>
   );
};

export default WhatNext;
