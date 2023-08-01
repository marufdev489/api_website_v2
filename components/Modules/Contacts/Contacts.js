import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import { BsCloudDownloadFill } from "react-icons/bs";
import SectionTitle from "../Section_title/Section_title";
import Checkbox from "@mui/material/Checkbox";
import {SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY} from '../../../utils/constants';
// import CustomReCAPTCHA from '../../../utils/ReCAPTCHA';
import { showErrorNotification, showSuccessNotification } from '../../../utils/notificationHelper';


const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Contacts = () => {
   const [isVerified, setIsVerified] = useState(false);
   const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault();
      // if(!isVerified){
      //    // console.log("ReCaptcha Failed!");
      //    showErrorNotification("Failed!", "ReCaptcha Validation Failed! Please Try Again.");
      //    return;
      // }
     emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
       .then((result) => {
         showSuccessNotification("Success!","Form Submitted Successfully!");
          e.target.reset();
       }, (error) => {
         console.log(error.text);
         showErrorNotification("Failed!", "Something Went Wrong! Please Try Again.");
       });
   };
   
   const onButtonClick = () => { 
      fetch("").then((response) => {
         response.blob().then((blob) => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement("a");
            alink.href = fileURL;
            alink.download = "";
            window.open("../api-profile.pdf");
            alink.click();
         }); 
      });
   };
   return (
      <>
         <section id="contact" className="section_padding_top">
            <SectionTitle titleUpDown="Contact Us" />
            <div className="demo overflow-hidden">
               <div className="row">
                  <div className="col-lg-7">
                     <div className="contactForm">
                        <div className="container ps-0">
                           <div className="text-left mb-5">
                              <h3 className="contactFormTitle">
                                 Contact us for
                                 <span className="focus ms-2">
                                    a free <br />
                                    IT consultation
                                 </span>
                              </h3>
                           </div>
                        </div>
                        <form ref={form} onSubmit={sendEmail}>
                           <div className="row gx-5">
                              <div className="col-lg-12">
                                 <div className="mb-3">
                                    <input
                                       type="text"
                                       name='companyName'
                                       className="form-control border-0 border-bottom rounded-0 font-14 border-shadow ps-1"
                                       id="company"
                                       placeholder="company"
                                    />
                                 </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                 <div className="mb-3">
                                    <input
                                       type="text"
                                       name='name'
                                       className="form-control border-0 border-bottom rounded-0 font-14 border-shadow ps-1"
                                       id="name"
                                       placeholder="name"
                                       required 
                                    />
                                 </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                 <div className="mb-3">
                                    <input
                                       type="email"
                                       name='corporateEmail'
                                       className="form-control border-0 border-bottom rounded-0 font-14 border-shadow ps-1"
                                       id="email"
                                       placeholder="corporate email"
                                       required 
                                    />
                                 </div>
                              </div>
                              <div className="col-lg-12">
                                 <div className="mb-3">
                                    <input
                                       type="number"
                                       name='phone'
                                       className="form-control border-0 border-bottom rounded-0 font-14 border-shadow ps-1"
                                       id="phone"
                                       placeholder="phone"
                                       required 
                                    />
                                 </div>
                                 <div id="emailHelp" className="form-text py-4">
                              We'll call you ASAP or you email can 
                              <u className="text-dark ms-2">
                              <Link href="#">schedule a call</Link>
                              </u>
                           </div>
                              </div>
                              <div className="col-lg-12">
                                 <div className="mb-3">
                                    <input
                                       type="text"
                                       name='comment'
                                       className="form-control border-0 border-bottom rounded-0 font-14 border-shadow ps-1"
                                       id="comments"
                                       placeholder="Comments"
                                    />
                                 </div>
                              </div>

                              {/* <CustomReCAPTCHA onVerify={setIsVerified}/> */}

                              <div className="col-lg-12">
                                 <div className="submit pt-4 d-flex align-items-center justify-content-between">
                                    {/* Go button start  */}
                                    {/* <div className="customBtn">
                                       <button className="CustomeBtn rounded-pill">
                                       Send request
                                          <BiChevronRight className="CustomeBtnIcon" />
                                       </button>
                                    </div> */}
                                      <button type='submit' className="CustomeBtn rounded-pill">
                                       Send request
                                          <BiChevronRight className="CustomeBtnIcon" />
                                       </button>
                                    {/* Go button start  */}
                                    <div className="form-check">
                                    <Checkbox {...label} />
                                       <label
                                          className="form-check-label"
                                          htmlFor="CheckDefault"
                                       >
                                          I want to protect my data by signing
                                          an NDA
                                       </label>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
                  <div className="col-lg-5">
                     <div className="contactFeature px-5 py-3">
                        <h4 className="pb-4">What happens next?</h4>
                        <p className="featureItem">
                           <span className="featureList">1</span>
                           In 3 days an expert contacts you shortly after having
                           analyzed your business requirements.
                        </p>
                        <p className="featureItem">
                           <span className="featureList">2</span>
                           We sign an NDA to ensure the highest privacy level if
                           required.
                        </p>
                        <p className="featureItem">
                           <span className="featureList">3</span>
                           We will submit a proposal according to your
                           requirements including an estimate and timeline.
                        </p>
                     </div>
                     <div className="off_day_schedule">
                        <p className="text-capitalize ps-5 fw-bold">
                           feel free to contact us
                        </p>
                        <ul className="px-5 py-4">
                           <li className="text-capitalize border-bottom pb-1">
                              friday-saturday :
                              <span className="text-danger"> closed</span>
                           </li>
                           <li className="text-capitalize border-bottom py-1">
                              sunday-Thursday : 9am - 6pm
                           </li>
                        </ul>
                        <div className="customBtn ps-5">
                        <div className="customBtn">
                {/* CustomeBtn rounded-pill */}
                  <button
                    className="fw-bold text-capitalize download_btn"
                    onClick={onButtonClick}
                  >
                    <BsCloudDownloadFill className="CustomeBtnIcon me-2 fs-5" />
                    download profile
                  </button>
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
export default Contacts;
