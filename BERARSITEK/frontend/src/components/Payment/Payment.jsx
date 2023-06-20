import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/styles";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { RxCross1 } from "react-icons/rx";

const Payment = () => {
  const [orderData, setOrderData] = useState([]);
  const [open, setOpen] = useState(false);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    const orderData = JSON.parse(localStorage.getItem("latestOrder"));
    setOrderData(orderData);
  }, []);

  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Sunflower",
            amount: {
              currency_code: "USD",
              value: orderData?.totalPrice,
            },
          },
        ],
        // not needed if a shipping address is actually needed
        application_context: {
          shipping_preference: "NO_SHIPPING",
        },
      })
      .then((orderID) => {
        return orderID;
      });
  };

  const order = {
    cart: orderData?.cart,
    shippingAddress: orderData?.shippingAddress,
    user: user && user,
    totalPrice: orderData?.totalPrice,
  };

  const paymentData = {
    amount: Math.round(orderData?.totalPrice * 100),
  };

  const cashOnDeliveryHandler = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    order.paymentInfo = {
      type: "Cash On Delivery",
    };

    await axios.post(`${server}/order/create-order`, order, config).then((res) => {
      setOpen(false);
      navigate("/order/success");
      toast.success("Order successful!");
      localStorage.setItem("cartItems", JSON.stringify([]));
      localStorage.setItem("latestOrder", JSON.stringify([]));
      window.location.reload();
    });
  };

  return (
    <div className="w-full flex flex-col items-center py-8">
      <div className="w-[90%] 1000px:w-[70%] block 800px:flex">
        <div className="w-full 800px:w-[65%]">
          <PaymentInfo user={user} open={open} setOpen={setOpen} createOrder={createOrder} cashOnDeliveryHandler={cashOnDeliveryHandler} />
        </div>
        <div className="w-full 800px:w-[35%] 800px:mt-0 mt-8">
          <CartData orderData={orderData} />
        </div>
      </div>
    </div>
  );
};

const PaymentInfo = ({ cashOnDeliveryHandler }) => {
  const [select, setSelect] = useState(1);

  return (
    <div className="w-full 800px:w-[95%] bg-[#fff] rounded-md p-5 pb-8">
      {/* select buttons */}
      <div>
        <div className="flex w-full pb-5 border-b mb-2">
          <div className="w-[25px] h-[25px] rounded-full bg-transparent border-[3px] border-[#1d1a1ab4] relative flex items-center justify-center" onClick={() => setSelect(1)}>
            {select === 1 ? <div className="w-[13px] h-[13px] bg-[#1d1a1acb] rounded-full" /> : null}
          </div>
          <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1]">Debit</h4>
        </div>
        {select === 1 ? <div className="w-full flex"></div> : null}
      </div>

      <br />
      {/* paypal payment */}
      <div>
        <div className="flex w-full pb-5 border-b mb-2">
          <div className="w-[25px] h-[25px] rounded-full bg-transparent border-[3px] border-[#1d1a1ab4] relative flex items-center justify-center" onClick={() => setSelect(2)}>
            {select === 2 ? <div className="w-[13px] h-[13px] bg-[#1d1a1acb] rounded-full" /> : null}
          </div>
          <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1]">Paypal</h4>
        </div>
        {select === 2 ? <div className="w-full flex"></div> : null}
      </div>

      <br />
      {/* cash on delivery */}
      <div>
        <div className="flex w-full pb-5 border-b mb-2">
          <div className="w-[25px] h-[25px] rounded-full bg-transparent border-[3px] border-[#1d1a1ab4] relative flex items-center justify-center" onClick={() => setSelect(3)}>
            {select === 3 ? <div className="w-[13px] h-[13px] bg-[#1d1a1acb] rounded-full" /> : null}
          </div>
          <h4 className="text-[18px] pl-2 font-[600] text-[#000000b1]"> Developer Mode <i>*for testing purpose</i></h4>
        </div>

        {/* cash on delivery */}
        {select === 3 ? (
          <div className="w-full flex">
            <form className="w-full" onSubmit={cashOnDeliveryHandler}>
              <input type="submit" value="Confirm" className={`${styles.button} !bg-[#0B3F9C] text-[#fff] h-[45px] rounded-[5px] cursor-pointer text-[18px] font-[600]`} />
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
};

const CartData = ({ orderData }) => {
  const shipping = orderData?.shipping?.toFixed(2);
  return (
    <div className="w-full bg-[#fff] rounded-md p-5 pb-5">
      <div className="flex justify-between">
        <h3 className="text-[16px] font-[400] text-[#000000a4]">Total Price</h3>
        <h5 className="text-[18px] font-[600] text-end">Rp. {orderData?.totalPrice}</h5>
      </div>
    </div>
  );
};

export default Payment;