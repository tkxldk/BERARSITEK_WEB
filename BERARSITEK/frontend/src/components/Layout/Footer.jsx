import React from "react";
import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { Link } from "react-router-dom";
import { footercompanyLinks, footerProductLinks, footerSupportLinks } from "../../static/data";

const Footer = () => {
  return (
    <div className="bg-[#212121] text-white">
      <div className="grid grid-cols-1 sm:gird-cols-3 lg:grid-cols-5 gap-6 sm:px-8 px-5 py-12 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <img src="https://tkxldk.github.io/berarsitekasset/images/berarsitek4.png" alt="" />
          <br />
          <p>The design and architects needed to create beautiful building.</p>
          <div className="flex items-center mt-[15px]">
            <AiFillFacebook size={25} className="cursor-pointer" />
            <AiOutlineTwitter size={25} style={{ marginLeft: "15px", cursor: "pointer" }} />
            <AiFillInstagram size={25} style={{ marginLeft: "15px", cursor: "pointer" }} />
          </div>
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Company</h1>
          {footerProductLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-blue-300 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Shop</h1>
          {footercompanyLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-blue-300 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Support</h1>
          {footerSupportLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-gray-400 hover:text-blue-300 duration-300
                   text-sm cursor-pointer leading-6"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div>
          <h1 className="mb-1 font-semibold text-center">Payment Method</h1>
          <div style={{ justifySelf: "start" }}>
            <img src="https://tkxldk.github.io/berarsitekasset/images/payment.png" alt="" />
          </div>
        </div>
      </div>

      <div>
        <footer style={{ marginTop: 0, paddingTop: 0, height: "60px", backgroundColor: "#212121", justifyContent: "center", color: "GrayText" }}>
          <div style={{ textAlign: "center" }}>
            <h2>© 2023 BERARSITEK</h2>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
