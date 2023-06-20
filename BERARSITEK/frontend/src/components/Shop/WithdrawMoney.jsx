import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfShop } from "../../redux/actions/order";
import styles from "../../styles/styles";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { loadSeller } from "../../redux/actions/user";
import { AiOutlineDelete } from "react-icons/ai";

const WithdrawMoney = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { seller } = useSelector((state) => state.seller);
  const [paymentMethod, setPaymentMethod] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState(50000);
  const [bankInfo, setBankInfo] = useState({
    bankName: "",
    bankCountry: "",
    bankSwiftCode: null,
    bankAccountNumber: null,
    bankHolderName: "",
    bankAddress: "",
  });

  useEffect(() => {
    dispatch(getAllOrdersOfShop(seller._id));
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const withdrawMethod = {
      bankName: bankInfo.bankName,
      bankCountry: bankInfo.bankCountry,
      bankSwiftCode: bankInfo.bankSwiftCode,
      bankAccountNumber: bankInfo.bankAccountNumber,
      bankHolderName: bankInfo.bankHolderName,
      bankAddress: bankInfo.bankAddress,
    };

    setPaymentMethod(false);

    await axios
      .put(
        `${server}/shop/update-payment-methods`,
        {
          withdrawMethod,
        },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success("Withdraw method added successfully!");
        dispatch(loadSeller());
        setBankInfo({
          bankName: "",
          bankCountry: "",
          bankSwiftCode: null,
          bankAccountNumber: null,
          bankHolderName: "",
          bankAddress: "",
        });
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  const deleteHandler = async () => {
    await axios
      .delete(`${server}/shop/delete-withdraw-method`, {
        withCredentials: true,
      })
      .then((res) => {
        toast.success("Withdraw method deleted successfully!");
        dispatch(loadSeller());
      });
  };

  const error = () => {
    toast.error("You don't have enough balance to withdraw!");
  };

  const withdrawHandler = async () => {
    if (withdrawAmount < 50000 || withdrawAmount > availableBalance) {
      toast.error("You can't withdraw this amount!");
    } else {
      const amount = withdrawAmount;
      await axios.post(`${server}/withdraw/create-withdraw-request`, { amount }, { withCredentials: true }).then((res) => {
        toast.success("Withdraw success!");
      });
    }
  };

  const availableBalance = seller?.availableBalance;

  return (
    <div className="w-full h-[90vh] p-8">
      <div className="w-full bg-white h-full rounded flex items-center justify-center flex-col">
        <h5 className="text-[20px] pb-4">Berarsitek's Credits: Rp. {availableBalance}</h5>
        <div className={`${styles.button} text-white !h-[42px] !rounded font-semibold`} style={{ backgroundColor: "#0B3F9C" }} onClick={() => (availableBalance < 50000 ? error() : setOpen(true))}>
          Withdraw
        </div>
      </div>
      {open && (
        <div className="w-full h-screen z-[9999] fixed top-0 left-0 flex items-center justify-center bg-[#0000004e]">
          <div className={`w-[95%] 800px:w-[50%] bg-white shadow rounded ${paymentMethod ? "h-[80vh] overflow-y-scroll" : "h-[unset]"} min-h-[40vh] p-3`}>
            <div className="w-full flex justify-end">
              <RxCross1 size={25} onClick={() => setOpen(false) || setPaymentMethod(false)} className="cursor-pointer" />
            </div>
            {paymentMethod ? (
              <div>
                <h3 className="text-[22px] font-Poppins text-center font-[600]">Add new Withdraw Method:</h3>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label>
                      Bank Name <span className="text-red-500">*</span>
                    </label>
                    <input type="text" name="" required value={bankInfo.bankName} onChange={(e) => setBankInfo({ ...bankInfo, bankName: e.target.value })} id="" placeholder="Enter your Bank name" className={`${styles.input} mt-2`} />
                  </div>
                  <div className="pt-2">
                    <label>
                      Bank Country <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name=""
                      value={bankInfo.bankCountry}
                      onChange={(e) =>
                        setBankInfo({
                          ...bankInfo,
                          bankCountry: e.target.value,
                        })
                      }
                      id=""
                      required
                      placeholder="Enter your bank Country"
                      className={`${styles.input} mt-2`}
                    />
                  </div>
                  <div className="pt-2">
                    <label>
                      Bank Swift Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      required
                      value={bankInfo.bankSwiftCode}
                      onChange={(e) =>
                        setBankInfo({
                          ...bankInfo,
                          bankSwiftCode: e.target.value,
                        })
                      }
                      placeholder="Enter your Bank Swift Code"
                      className={`${styles.input} mt-2`}
                    />
                  </div>

                  <div className="pt-2">
                    <label>
                      Bank Account Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name=""
                      id=""
                      value={bankInfo.bankAccountNumber}
                      onChange={(e) =>
                        setBankInfo({
                          ...bankInfo,
                          bankAccountNumber: e.target.value,
                        })
                      }
                      required
                      placeholder="Enter your bank account number"
                      className={`${styles.input} mt-2`}
                    />
                  </div>
                  <div className="pt-2">
                    <label>
                      Bank Holder Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name=""
                      required
                      value={bankInfo.bankHolderName}
                      onChange={(e) =>
                        setBankInfo({
                          ...bankInfo,
                          bankHolderName: e.target.value,
                        })
                      }
                      id=""
                      placeholder="Enter your bank Holder name"
                      className={`${styles.input} mt-2`}
                    />
                  </div>

                  <div className="pt-2">
                    <label>
                      Bank Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name=""
                      required
                      id=""
                      value={bankInfo.bankAddress}
                      onChange={(e) =>
                        setBankInfo({
                          ...bankInfo,
                          bankAddress: e.target.value,
                        })
                      }
                      placeholder="Enter your bank address"
                      className={`${styles.input} mt-2`}
                    />
                  </div>

                  <button type="submit" className={`${styles.button} mb-3 text-white`} style={{ backgroundColor: "#0B3F9C" }}>
                    Add
                  </button>
                </form>
              </div>
            ) : (
              <>
                <h3 className="text-[22px] font-Poppins flex items-center justify-center mt-3 font-semibold">Available Withdraw Methods:</h3>
                <br />

                {seller && seller?.withdrawMethod ? (
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div>
                      <div className="800px:flex w-full justify-between items-center">
                        <div className="800px:w-[100%]" style={{ display: "flex", flexDirection: "column" }}>
                          <div style={{ display: "flex", alignItems: "center", textAlign: "center" }}>
                            <h5>Account Number: {"*".repeat(seller?.withdrawMethod.bankAccountNumber.length - 3) + seller?.withdrawMethod.bankAccountNumber.slice(-3)}</h5>
                            <div className="justify-right items-right ml-10">
                              <div style={{ display: "flex", justifyContent: "right", alignItems: "right" }}>
                                <AiOutlineDelete size={25} className="cursor-pointer" onClick={() => deleteHandler()} />
                              </div>
                            </div>
                          </div>
                          <h5>Bank Name: {seller?.withdrawMethod.bankName}</h5>
                        </div>
                      </div>

                      <br />
                      <div style={{ textAlign: "left" }}>
                        <h4>Available Balance: Rp. {availableBalance}</h4>
                      </div>
                      <br />
                      <div className="800px:flex w-full justify-center items-center">
                        <input type="number" placeholder="Amount..." value={withdrawAmount} onChange={(e) => setWithdrawAmount(e.target.value)} className="800px:w-[100px] w-[full] border 800px:mr-3 p-1 rounded" />
                        <div className={`${styles.button} !h-[42px] !w-[100px] text-white`} style={{ backgroundColor: "#0B3F9C" }} onClick={withdrawHandler}>
                          Withdraw
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <p className="text-[18px] pt-2 flex items-center justify-center">No Withdraw Methods available!</p>
                    <div className="w-full flex items-center flex items-center justify-center">
                      <div className={`${styles.button} text-[#fff] text-[18px] mt-4 font-semibold`} style={{ backgroundColor: "#0B3F9C" }} onClick={() => setPaymentMethod(true)}>
                        Add new
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default WithdrawMoney;