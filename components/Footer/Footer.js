import Link from "next/link";
import React from "react";
// import TopButton from "./../Modules/SideNav/TopButton";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoIosArrowUp } from "react-icons/io";

export default function Footer() {
   return (
      <>
         <footer id="footer">
            <div className="container">
               <div className="social d-flex justify-content-between align-items-center">
                  <Link href="/">
                     <img
                        className="footer_api_logo bi-align-middle"
                        src="/logo.png"
                        alt="logo"
                     />
                  </Link>

                  <div className="copyRight mt-3">
                     <p className="text-center">
                        <span>Phone : </span>
                        +88-02 55035911
                     </p>
                     <p className="text-center">
                        <span>Email : </span>
                        hello@apisolutionsltd.com
                     </p>
                     <p className="text-center">
                        <span>Address : </span>
                        House -4 Road 23/A Block B Banani Dhaka 1213 Bangladesh
                     </p>
                     <p className="font-14 mt-3 text-center">
                        © 2023 API. All Rights Reserved.
                     </p>
                  </div>
                  <ul className="footer_social_icons">
                     <li>
                        <Link href="/">
                           <BiLogoFacebook />
                        </Link>
                     </li>
                     <li>
                        <Link href="/">
                           <BiLogoLinkedin />
                        </Link>
                     </li>
                     <li>
                        <Link href="/">
                           <AiOutlineTwitter />
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
            <Link
               className="d-flex align-items-center justify-content-center"
               id="backToTop"
               href="#"
            >
               <IoIosArrowUp className="fs-4 mb-1" />
            </Link>
         </footer>
      </>
   );
}
