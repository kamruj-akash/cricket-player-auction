import footerLogo from "../assets/logo-footer.png";
const Footer = () => {
  return (
    <footer className=" z-[1] pt-[220px] bg-gray-900 text-white ">
      <div className="flex justify-center">
        <img className="relative z-20" src={footerLogo} alt="footerLogo" />
      </div>

      <div className="grid grid-cols-3 max-w-screen-xl mx-auto justify-between items-center pt-10 gap-x-10">
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold">About Us</h3>
          <p className="mt-2 text-sm">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>

        <div className="flex flex-col">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>
              <a href="/home" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="text-xl font-semibold">Subscribe</h3>
          <p className="mt-2 text-sm">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 text-sm text-white border-white border-1 border-e-0 rounded-l-md"
            />
            <button className=" cursor-pointer px-4 py-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-r-md hover:bg-gradient-to-l transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm bg-gray-800 p-6">
        <p>©2025 Player Auction. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
