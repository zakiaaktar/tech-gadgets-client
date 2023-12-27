import contact from "../../../assets/contact.jpg";
import Button from "../../../components/Button/Button";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Contact = () => {
  return (
    <>
      <section className="w-4/5 mx-auto my-16">
        <SectionTitle title={`Contact With Us`}></SectionTitle>

        <div
          style={{
            background: `url(${contact})`,
          }}
        >
          <div className=" d-flex  sm:mt-[100px] my-[100px] mx-auto align-items-center lg:w-[850px] py-12">
            <div className="block  lg:w-[380px] p-6 rounded-none mx-auto shadow-lg bg-white">
              <form>
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
                <Button buttonTitle={`Submit`}></Button>
                {/* <button
                                    type="submit"
                                    className='inline-flex items-center justify-center h-12 font-bold tracking-wide text-white transition duration-200 rounded-full px-6 py-3 border-none shadow-md border-[#6d0feb] hover:bg-black focus:shadow-outline focus:outline-none'
                                >
                                    Submit
                                </button> */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
