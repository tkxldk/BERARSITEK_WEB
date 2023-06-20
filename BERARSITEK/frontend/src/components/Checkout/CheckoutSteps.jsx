import React from "react";
import styles from "../../styles/styles";

const CheckoutSteps = ({ active }) => {
  console.log(active);
  return (
    <div className="w-full flex justify-center">
      <div className="w-[90%] 800px:w-[50%] flex items-center flex-wrap">
        <div className={`${styles.noramlFlex}`}>
          <div className={`${styles.cart_button} !bg-[#0B3F9C]`}>
            <span className={`${styles.cart_button_text}`}>1. Billing</span>
          </div>
          <div className={`${active > 1 ? "w-[30px] 800px:w-[70px] h-[4px] !bg-[#0B3F9C]" : "w-[30px] 800px:w-[70px] h-[4px] !bg-[#C8E6F1]"}`} />
        </div>

        <div className={`${styles.noramlFlex}`}>
          <div className={`${active > 1 ? `${styles.cart_button} !bg-[#0B3F9C]` : `${styles.cart_button} !bg-[#C8E6F1]`}`}>
            <span className={`${active > 1 ? `${styles.cart_button_text}` : `${styles.cart_button_text} !text-[#0B3F9C]`}`}>2. Payment</span>
          </div>
        </div>

        <div className={`${styles.noramlFlex}`}>
          <div className={`${active > 3 ? "w-[30px] 800px:w-[70px] h-[4px] !bg-[#0B3F9C]" : "w-[30px] 800px:w-[70px] h-[4px] !bg-[#C8E6F1]"}`} />
          <div className={`${active > 2 ? `${styles.cart_button}` : `${styles.cart_button} !bg-[#C8E6F1]`}`}>
            <span className={`${active > 2 ? `${styles.cart_button_text}` : `${styles.cart_button_text} !text-[#0B3F9C]`}`}>3. Success</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSteps;