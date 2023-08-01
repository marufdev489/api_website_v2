import React from "react";
import SectionTitle from "../Section_title/Section_title";

const ManagementMember = () => {
   return (
      <>
         <section id="managementMember" className="section_padding">
            <SectionTitle titleUpDown="Top Management" />
            <div className="container">
               <div className="row">
                  <div className="col-lg-3">
                     <div className="managementBox">
                        <div className="memberImgBox">
                           <img
                              className="memberImg"
                              src="/managementTem1.png"
                              width={300}
                              height={300}
                              alt="img"
                           />
                        </div>
                        <div className="managementContain">
                           <h6 className="memberName mb-2">Mirazuddin Ahmed</h6>
                           <p className="memberDesignation mb-4">CEO</p>
                           <p className="memberDetails">
                              Dreams are renewable no matter what our age.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-3">
                     <div className="managementBox">
                        <div className="memberImgBox">
                           <img
                              className="memberImg"
                              src="/managementTem1.png"
                              width={300}
                              height={300}
                              alt="img"
                           />
                        </div>
                        <div className="managementContain">
                           <h6 className="memberName mb-2">Mirazuddin Ahmed</h6>
                           <p className="memberDesignation mb-4">CEO</p>
                           <p className="memberDetails">
                              Dreams are renewable no matter what our age.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-3">
                     <div className="managementBox">
                        <div className="memberImgBox">
                           <img
                              className="memberImg"
                              src="/managementTem1.png"
                              width={300}
                              height={300}
                              alt="img"
                           />
                        </div>
                        <div className="managementContain">
                           <h6 className="memberName mb-2">Mirazuddin Ahmed</h6>
                           <p className="memberDesignation mb-4">CEO</p>
                           <p className="memberDetails">
                              Dreams are renewable no matter what our age.
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-3">
                     <div className="managementBox">
                        <div className="memberImgBox">
                           <img
                              className="memberImg"
                              src="/managementTem1.png"
                              width={300}
                              height={300}
                              alt="img"
                           />
                        </div>
                        <div className="managementContain">
                           <h6 className="memberName mb-2">Mirazuddin Ahmed</h6>
                           <p className="memberDesignation mb-4">CEO</p>
                           <p className="memberDetails">
                              Dreams are renewable no matter what our age .
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default ManagementMember;
