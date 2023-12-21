const SectionTitle = ( { title, description } ) => {
    return (
      <div className="text-center">
        <h2 className="font-bold text-3xl lg:text-4xl my-4 text-[#6d0feb]">
        {title}
        </h2>
        
        <p className="w-3/4 mx-auto font-medium text-gray-500 mt-6">
          {description}
        </p>
      </div>
    );
  };
  
  export default SectionTitle;