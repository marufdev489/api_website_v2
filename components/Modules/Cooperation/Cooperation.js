import React from "react";
import SectionTitle from "../Section_title/Section_title";

const Cooperation = () => {
   return (
      <>
         <section id="cooperation" className="section_padding">
            <SectionTitle titleUpDown="Cooperation" />
            <div className="container">
               <p className="w-50 mb-5 m-auto text-center text-white">
                  We believe that collaboration is the cornerstone of progress
                  and innovation. We are actively seeking like-minded partners
                  to join us on a journey of technological excellence and mutual
                  growth.
               </p>
               <div className="row gx-5">
                  <div className="col-lg-4">
                     <p className="text-center text-white">
                        <b>What we offer in the partnership:</b>
                        <br />
                        We firmly dedicate our resources to fostering the
                        potential of ideas, enabling them to shape profound and
                        mutually advantageous collaborations between all parties
                        involved.
                     </p>
                  </div>
                  <div className="col-lg-4">
                     <div className="p-3">
                        <img
                           className="cooperationimg"
                           src="/cooperation_img.png"
                           alt="img"
                           width={500}
                           height={500}
                        />
                        <p className="text-center text-white mt-3">
                           <b>What we should share:</b>
                           <br />
                           building strong, collaborative relationships that
                           drive mutual growth and success for both parties
                           involved.
                        </p>
                     </div>
                  </div>
                  <div className="col-lg-4">
                     <p className="text-center text-white">
                        <b>What we expect:</b>
                        <br />
                        Expertise and Skills, Networking Opportunities,
                        Collaborative Product Development, Shared Risk and
                        Accountability.
                     </p>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Cooperation;
