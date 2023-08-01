import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FilterDta from "./Data";
import { FiArrowDownRight } from 'react-icons/fi';
import Link from "next/link";

const FilterGallery = () => {
  const [filterImage, setFilterImage] = useState([]);
  const [image, setImage] = useState([]);

  const getdata = () => {
    setImage(FilterDta);
    setFilterImage(FilterDta);
  };
  console.log(FilterDta);

  useEffect(() => {
    getdata();
  }, []);

  const filterItem = (brandlist) => {
    const updatedcard = image.filter((curElem) => {
      return curElem.brand === brandlist;
    });
    setFilterImage(updatedcard);
  };

  return (
    <>
      <Container>
        <Row>
          <ul className="mt-5 d-flex justify-content-center list-unstyled">
            <li>
              <button
                className="text-capitalize me-2 btn btn-success rounded-1"
                onClick={() => setFilterImage(image)}
              >
                all
              </button>
              <button
                className="text-capitalize me-2 btn btn-success rounded-1"
                onClick={() => filterItem("retail")}
              >
                retail & E-commerce
              </button>
              <button
                className="text-capitalize me-2 btn btn-success rounded-1"
                onClick={() => filterItem("sports")}
              >
                sport
              </button>
              <button
                className="text-capitalize me-2 btn btn-success rounded-1"
                onClick={() => filterItem("NGO")}
              >
                NGO
              </button>
              <button
                className="text-capitalize me-2 btn btn-success rounded-1"
                onClick={() => filterItem("Samsung")}
              >
                healthcare
              </button>
              <button
                className="text-capitalize me-2 btn btn-success rounded-1"
                onClick={() => filterItem("Huawei")}
              >
                Hospitality
              </button>
            </li>
          </ul>
          {filterImage.map((curElm, index) => {
            return (
              <Col lg={4} key={index}>
                <div className="mt-4 rounded-0 product_overlay">
                  <img
                    src={curElm.thumbnail}
                    className="card-img rounded-3"
                  />
                  <Link href={curElm.link} target="_blank">
                    <div className="card_title rounded-3">
                      <img
                        variant="top"
                        src={curElm.logo}
                        className="overlay_logo rounded-3 "
                      />
                      <div className="link_icons">
                        <FiArrowDownRight size={"25px"}/>
                      </div>
                      <div>
                        <img src="/managementBg1.png" alt="" className="card_img_design"/> 
                      </div>
                    </div>
                  </Link>
                </div>
              </Col>
            
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default FilterGallery;
