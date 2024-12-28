import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
      <div className="bg-gray-900">
        <footer className="container text-gray-300 py-8">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Section */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
              <p>123 ABS Street, Uni 21, Bangladesh</p>
              <p>+88 123456789</p>
              <p>Mon - Fri: 08:00 - 22:00</p>
              <p>Sat - Sun: 10:00 - 23:00</p>
            </div>

            {/* Social Media Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow US</h3>
              <p className="mb-4">Join us on social media</p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                  aria-label="Instagram"
                >
                  <FaSquareInstagram />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition"
                  aria-label="Twitter"
                >
                  <FaXTwitter/>
                </a>
              </div>
            </div>
          </div>
        </footer>
        <div className="bg-gray-800 text-center text-gray-200 py-4 text-sm">
          <p>Copyright © CulinaryCloud. All rights reserved.</p>
        </div>
      </div>
    );
};

export default Footer;