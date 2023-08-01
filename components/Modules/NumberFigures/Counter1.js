import React, { useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

function Counter1({ className, ...rest }) {
   const [viewPortEntered, setViewPortEntered] = useState(false);

   return (
      <>
         <div className="counter-column display-4 fw-bold">
            <strong data-number="310" className="countNum font-oswald position-relative">
               <CountUp {...rest} start={viewPortEntered ? null : 0} end={30}>
                  {({ countUpRef }) => {
                     return (
                        <ReactVisibilitySensor
                           active={!viewPortEntered}
                           onChange={(isVisible) => {
                              if (isVisible) {
                                 setViewPortEntered(true);
                              }
                           }}
                           delayedCall
                        >
                           <span className="number" ref={countUpRef} />
                        </ReactVisibilitySensor>
                     );
                  }}
               </CountUp>

               <span className="fw-bold font-oswald plus">+</span>
            </strong>
         </div>
      </>
   );
}

export default Counter1;
