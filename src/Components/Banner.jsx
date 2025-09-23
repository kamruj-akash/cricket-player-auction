import bannerMain from "../assets/banner-main.png";
import bannerGradient from "../assets/bg-shadow.png";
const Banner = () => {
  return (
    <div className="container mx-auto py-[64px] bg-[#131313] rounded-xl flex flex-col items-center justify-center text-center text-white relative overflow-hidden mt-10 font-inter">
      <img
        src={bannerGradient}
        alt="Gradient Overlay"
        className="absolute top-0 left-0 w-full h-full object-cover rounded-xl pointer-events-none"
      />

      <img src={bannerMain} alt="" />
      <h1 className="text-[40px] font-bold pt-5 pb-3">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      <p className="text-2xl font-medium pb-5">
        Beyond Boundaries Beyond Limits
      </p>
      <div className="p-1 border rounded-lg">
        <button
          className="btn bg-cover bg-center text-black rounded-lg shadow-lg font-bold
          border border-white 
          bg-gradient-to-r from-pink-400 via-orange-300 to-yellow-400
          hover:opacity-90
          transition "
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
