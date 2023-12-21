import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const Facility = () => {
    return (

        <section className="my-16">
        <SectionTitle
    title={`Our Awesome Services`}
    ></SectionTitle>
        
            <div className="container flex flex-col items-center justify-center mx-auto sm:p-10 my-12">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 group">
                <div className="bg-gradient-to-r from-[#6d0feb] to-[#cb45e1] hover:from-pink-500 hover:to-red-500  p-[3px] group-hover:scale-90 hover:!scale-110 rounded-lg duration-700">
                        <div className="bg-white rounded-lg shadow-md p-6 text-center border  h-full">
                            <h3 className="text-lg font-semibold mb-2 text-[#6d0feb]">24/7 ONLINE BOOKING</h3>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta culpa, aut deserunt sint et dignissimos ducimus quasi repellendus magnam repudiandae.
                            </p>
                        </div>
                    </div>
                   
                    <div className="bg-gradient-to-r from-[#6d0feb] to-[#cb45e1] hover:from-pink-500 hover:to-red-500  p-[3px] group-hover:scale-90 hover:!scale-110 rounded-lg duration-700">
                        <div className="bg-white rounded-lg shadow-md p-6 text-center border  h-full">
                            <h3 className="text-lg font-semibold mb-2">24/7 ONLINE CONSULTING</h3>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta culpa, aut deserunt sint et dignissimos ducimus quasi repellendus magnam repudiandae.
                            </p>
                        </div>
                    </div>
                  
                    <div className="bg-gradient-to-r from-[#6d0feb] to-[#cb45e1] hover:from-pink-500 hover:to-red-500  p-[3px] group-hover:scale-90 hover:!scale-110 rounded-lg duration-700">
                        <div className="bg-white rounded-lg shadow-md p-6 text-center border  h-full">
                            <h3 className="text-lg font-semibold mb-2">Product Warrenty</h3>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta culpa, aut deserunt sint et dignissimos ducimus quasi repellendus magnam repudiandae.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        
        </section>
    );
};

export default Facility;

