import logo from "../../../assets/logo.png";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="rounded-t-3xl bg-gradient-to-r from-[#6d0feb] to-[#7071E8]">
      <section className="mx-auto max-w-[1200px] text-white">
        <div className=" grid py-5 md:grid-cols-3">
          <div className=" px-4 py-8 ">
            <img
              data-aos="zoom-in"
              data-aos-duration="1500"
              className="mb-6"
              src={logo}
              alt="logo"
            />
            <p className="">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Possimus, voluptate.{" "}
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Tech Gadgets AB 1234</p>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <FaMobileAlt />
              <p>+00 123456789</p>
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10 ">
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  COMPANY
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Home
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    About
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Contact
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Press kit
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  LEGAL
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Privacy Policy
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Cookie Policy
                  </li>
                  <li className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
                    Terms of use
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="px-4 py-8 ">
                <h1 className="mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl">
                  Social Links
                </h1>
                <div className="flex flex-col gap-3">
                  <h1>Subscribe to our newsletter</h1>
                  <input
                    className="rounded-full px-3 py-1 text-black focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 "
                    type="text"
                    placeholder="Email"
                  />
                  <div className="mt-6 flex items-center gap-3">
                    <a href="#" className="duration-200 hover:scale-105">
                      <FaFacebook className="text-3xl" />
                    </a>
                    <a href="#" className="duration-200 hover:scale-105">
                      <FaLinkedin className="text-3xl" />
                    </a>

                    <a href="#" className="duration-200 hover:scale-105">
                      <FaInstagram className="text-3xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border-t-2 border-gray-300/50 py-6 text-center">
            @copyright 2024 Zakia Aktar || Tech Gadgets
          </div>
        </div>
      </section>
    </div>

    //     <div className='w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2'>
    //     <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4'>
    //       <div>
    //         <h6 className='font-bold uppercare pt-2'>Solutions</h6>
    //         <ul>
    //           <li className='py-1'>Services</li>
    //           <li className='py-1'>Branding</li>
    //           <li className='py-1'>Design</li>
    //           <li className='py-1'>Marketing</li>
    //           <li className='py-1'>What We Offer</li>
    //         </ul>
    //       </div>
    //       <div>
    //         <h6 className='font-bold uppercare pt-2'>Support</h6>
    //         <ul>
    //           <li className='py-1'>Pricing</li>
    //           <li className='py-1'>Documentation</li>
    //           <li className='py-1'>Contact</li>
    //           <li className='py-1'>Refunds</li>
    //         </ul>
    //       </div>
    //       <div>
    //         <h6 className='font-bold uppercare pt-2'>Company</h6>
    //         <ul>
    //           <li className='py-1'>About</li>
    //           <li className='py-1'>Blog</li>
    //           <li className='py-1'>Jobs</li>
    //           <li className='py-1'>Press</li>
    //           <li className='py-1'>Partners</li>
    //         </ul>
    //       </div>

    //       <div>
    //       <h6 className='font-bold uppercare pt-2'>Legal</h6>
    //       <ul>
    //         <li className='py-1'>Claims</li>
    //         <li className='py-1'>Privacy</li>
    //         <li className='py-1'>Terms</li>
    //         <li className='py-1'>Policies</li>
    //         <li className='py-1'>Conditions</li>
    //       </ul>
    //     </div>
    //     <div className='col-span-2 py-8 md:pt-2'>
    //       <p className='font-bold uppercase'>Subscribe to our newsletters</p>
    //       <p className='py-4'>
    //         The Latest deals, articles and resources sent to your inbox weekly.
    //       </p>
    //       <form className='flex flex-col sm:flex-row'>
    //         <input className='w-full p-2 mr-4 rounded-md mb-4' type='email' placeholder='Enter email..' />
    //         <button className='p-2 mb-4 rounded-md'>Subscribe</button>
    //       </form>
    //     </div>
    //   </div>

    //   <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
    //     <p className='py-4'>&copy; Zakia Aktar<br />2023. All rights reserved</p>
    //     <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
    //       <FaFacebook />
    //       <FaInstagram />
    //       <FaTwitter />
    //       <TiSocialPinterest size={30} />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Footer;
