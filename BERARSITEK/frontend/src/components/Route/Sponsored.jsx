import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
  return (
    <div className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}>
      <div className="grid grid-cols-1 sm:gird-cols-1 lg:grid-cols-4 sm:px-8 px-5 py-12 sm:text-center" style={{ flexDirection: "row" }}>
        <li className="px-5 text-center sm:text-start flex sm:block flex-col items-center" style={{ display: "flex", flexDirection: "row" }}>
          <img src="https://tkxldk.github.io/berarsitekasset/images/pdw.png" alt="" style={{ maxWidth: "80%", marginRight: "50px", marginLeft: "30px" }} />
          <img src="https://tkxldk.github.io/berarsitekasset/images/NikkenSekkei.png" alt="" style={{ marginRight: "50px" }} />
          <img src="https://tkxldk.github.io/berarsitekasset/images/PTArkonin.png" alt="" style={{ marginRight: "50px" }} />
          <img src="https://tkxldk.github.io/berarsitekasset/images/PTAirmasAsri.png" alt="" style={{ marginRight: "50px" }} />
        </li>
      </div>
    </div>
  );
};

export default Sponsored;
