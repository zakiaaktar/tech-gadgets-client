import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const Facility = () => {
    return (

        <section className="w-4/5 mx-auto my-16">
        <SectionTitle
    title={`Our Awesome Services`}
    ></SectionTitle>
        
            <div className="container flex flex-col items-center justify-center mx-auto sm:p-10">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 group">
                <div className="bg-gradient-to-r from-[#6d0feb] to-[#cb45e1] hover:from-[#cb45e1] hover:to-[#6d0feb] p-[3px] group-hover:scale-90 hover:!scale-110 duration-700 border-2 rounded-tl-3xl rounded-br-3xl ">
                        <div className="bg-white shadow-md p-6 text-center h-full border-2 rounded-tl-3xl rounded-br-3xl ">
                            <h3 className="text-lg font-semibold mb-2 text-[#cb45e1]">24/7 ONLINE BOOKING</h3>
                            <p className="text-gray-600">
                            24/7 customer support is a model where customers can get their issues resolved anytime they need assistance. This is the support that is available 24 hours a day and 7 days a week.
                            </p>
                        </div>
                </div>
                <div className="bg-gradient-to-r from-[#6d0feb] to-[#cb45e1] hover:from-[#cb45e1] hover:to-[#6d0feb] p-[3px] group-hover:scale-90 hover:!scale-110 duration-700 border-2 rounded-tl-3xl rounded-br-3xl ">
                        <div className="bg-white shadow-md p-6 text-center h-full border-2 rounded-tl-3xl rounded-br-3xl ">
                            <h3 className="text-lg font-semibold mb-2 text-[#cb45e1]">24/7 ONLINE CONSULTING</h3>
                            <p className="text-gray-600">
                            24/7 customer support is a model where customers can get their issues resolved anytime they need assistance. This is the support that is available 24 hours a day and 7 days a week.
                            </p>
                        </div>
                </div>
                <div className="bg-gradient-to-r from-[#6d0feb] to-[#cb45e1] hover:from-[#cb45e1] hover:to-[#6d0feb] p-[3px] group-hover:scale-90 hover:!scale-110 duration-700 border-2 rounded-tl-3xl rounded-br-3xl ">
                        <div className="bg-white shadow-md p-6 text-center h-full border-2 rounded-tl-3xl rounded-br-3xl ">
                            <h3 className="text-lg font-semibold mb-2 text-[#cb45e1]">Product Warrenty</h3>
                            <p className="text-gray-600">
                            24/7 customer support is a model where customers can get their issues resolved anytime they need assistance. This is the support that is available 24 hours a day and 7 days a week.
                            </p>
                        </div>
                </div>
             </div>
            </div>
        
        </section>
    );
};

export default Facility;

