import contact from "../../../assets/contact.jpg";
import Button from "../../../components/Button/Button";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";




const Contact = () => {



  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yjzd4wj', 'template_d4w0b11', form.current, 'keIqv-63Z6F0UI5rG')
      .then((result) => {
        console.log(result);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Thank You For Your Email!",
          showConfirmButton: false,
          timer: 2000,
        });
        form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };





  return (
    <>
      <section className="w-4/5 mx-auto my-16 poppins">
        <SectionTitle title={`Contact With Us`}></SectionTitle>

        <div
          style={{
            background: `url(${contact})`,
          }}
        >
          <div className=" d-flex  sm:mt-[100px] my-[100px] mx-auto align-items-center lg:w-[850px] py-12">
            <div className="block  lg:w-[380px] p-6 rounded-none mx-auto shadow-lg bg-white">
              <form ref={form} onSubmit={sendEmail}>
                <div className="form-group mb-6 pt-12">
                  <input
                    type="text"
                    name="user_name"
                    className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-[#6d0feb]
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-black-700 focus:outline-none"
                    id="exampleInput7"
                    placeholder="Name"
                  ></input>
                </div>
                <div className="form-group mb-6">
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-[#6d0feb]       
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleInput8"
                    placeholder="Email"
                  ></input>
                </div>
                <div className="form-group mb-6">
                  <textarea
                    className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-[#6d0feb]
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                    id="exampleFormControlTextarea13"
                    rows="3"
                    placeholder="Write Message"
                    name="message"
                  ></textarea>
                </div>
                <div className="text-center">
                <input className="btn hover:opacity-80 hover:bg-[#7071E8] uppercase text-black btn-outline bg-slate-100 border-0 border-b-4  border-[#7071E8] cursor-pointer" type="submit" value="Submit" />
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;




