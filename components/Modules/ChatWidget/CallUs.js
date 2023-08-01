import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BiSolidPhoneCall } from "react-icons/bi";
import Form from "react-bootstrap/Form";


const CallUs = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className="border-0 p-0 m-0 bg-transparent"
      >
        <BiSolidPhoneCall
          size={"50px"}
          className="request_form rounded-pill mb-3"
        />
      </Button>

      <Offcanvas show={show} onHide={handleClose} className="off_screen">
        <Offcanvas.Header closeButton className="mb-0">
          <Offcanvas.Title>
            <h3 className="text-capitalize fw-bold pt-4 pb-3">request form</h3>
            {/* <p className="text-capitalize text-center fw-light font-14">
              Getting our team to build a product for you is straightforward.
              All you need is to fill out the contact us form.
            </p> */}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className="text-center font-14 pb-5">Any questions? We will call you back and help!</p>
          <Form>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              {/* <Form.Label>Full Name</Form.Label> */}
              <Form.Control
                type="text"
                placeholder="Enter Full Name *"
                className="form_input"
                required
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control
                type="email"
                placeholder="Enter Email *"
                className="form_input"
                required
              />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit" className="mt-4 submit_btn border-0">
                Call Us
              </Button>
            </div>
          </Form>
         
    
   
     
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CallUs;
