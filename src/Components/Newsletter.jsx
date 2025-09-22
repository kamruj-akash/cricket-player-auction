import bannerGradient from "../assets/bg-shadow.png";

const Newsletter = () => {
  return (
    <div className="relative container mx-auto p-5 border-2 border-white  mt-[220px] rounded-2xl mb-[-300px]  z-10">
      <div className=" relative flex justify-between items-center flex-col pt-[200px] pb-[80px] bg-white rounded-2xl">
        <img
          src={bannerGradient}
          alt="Gradient Overlay"
          className="absolute top-0 left-0 w-full h-full object-cover rounded-xl pointer-events-none "
        />
        <h1 className="text-4xl font-bold text-[#131313] mb-2">
          Subscribe to our Newsletter
        </h1>
        <p className="text-xl font-medium text-[#131313c1]">
          Get the latest updates and news right in your inbox!
        </p>
        <form className="flex gap-5 pt-5">
          <input
            className="border-1 border-[#1313131a] w-[400px] px-8 py-3 rounded-xl"
            type="email"
            placeholder="Enter your email"
          />
          <div className="p-1 border rounded-lg flex justify-center items-center">
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
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
