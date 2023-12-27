

const Button = ({ buttonTitle }) => {
    return (
        <div className="text-center">
        <button className="btn hover:opacity-80 uppercase text-black btn-outline bg-slate-100 border-0 border-b-4  border-[#7071E8] cursor-pointer">
          {buttonTitle}
        </button>
      </div>
    );
};

export default Button;

