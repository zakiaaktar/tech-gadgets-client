

const SectionTitle = ( { title, description } ) => {
    return (
      <div className="text-center">
        <h2 className="font-bold text-3xl lg:text-4xl my-4 text-[#7071E8] poppins">
        {title}
        </h2>
        
        <p className="w-3/4 mx-auto font-bold text-blue-500 text-lg mt-6">
          {description}
        </p>
      </div>
    );
  };
  
  export default SectionTitle;