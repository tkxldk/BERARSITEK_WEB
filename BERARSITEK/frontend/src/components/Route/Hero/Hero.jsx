import React from "react";
import styles from "../../../styles/styles";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`} style={{ backgroundImage: "url(https://tkxldk.github.io/berarsitekasset/images/9x.jpeg)" }}>
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1 className={`text-[35px] leading-[1.2] 800px:text-[55px] text-[#f9fafc] font-[600] capitalize font-Poppins `}>
          Anda mencari arsitek yang profesional? <br /> <b>BERARSITEK</b> solusinya!
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#f9fafc] text-justify font-Poppins">
          BERARSITEK adalah pilihan terbaik untuk Anda yang sedang mencari arsitek profesional. Dengan pengalaman yang luas dan keahlian yang mumpuni, kami siap memberikan solusi terbaik untuk setiap proyek desain arsitektur Anda. Tim kami
          terdiri dari para ahli yang kreatif dan berdedikasi, siap menghadirkan hasil yang memenuhi harapan dan kebutuhan Anda. Dengan BERARSITEK, Anda dapat merasa yakin bahwa proyek Anda akan dilakukan dengan profesionalisme dan keahlian
          tinggi, sehingga menghasilkan desain arsitektur yang inovatif dan memukau.
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`} style={{ backgroundColor: "#0B3F9C" }}>
            <span className="text-[#fff] font-[Poppins] text-[18px] font-semibold font-Poppins hover:text-blue-200">Explore Now!</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
