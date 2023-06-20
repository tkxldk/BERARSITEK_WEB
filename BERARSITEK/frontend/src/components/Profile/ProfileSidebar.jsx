import React from "react";
import { AiOutlineLogin, AiOutlineMessage } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { RiShoppingBag3Line } from "react-icons/ri";
import { TbAddressBook } from "react-icons/tb";
import { RxPerson } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ProfileSidebar = ({ setActive, active }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const logoutHandler = () => {
    axios
      .get(`${server}/user/logout`, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);
        window.location.reload(true);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };
  return (
    <div className="w-full bg-white shadow-sm rounded-[10px] p-4 pt-8">
      <div className="flex items-center cursor-pointer w-full mb-8" onClick={() => setActive(1)}>
        <RxPerson size={20} color={active === 1 ? "#0B3F9C" : ""} />
        <span className={`pl-3 ${active === 1 ? "text-[#0B3F9C]" : ""} 800px:block hidden`}>Profile</span>
      </div>
      <div className="flex items-center cursor-pointer w-full mb-8" onClick={() => setActive(2)}>
        <RiShoppingBag3Line size={20} color={active === 2 ? "#0B3F9C" : ""} />
        <span className={`pl-3 ${active === 2 ? "text-[#0B3F9C]" : ""} 800px:block hidden`}>Orders</span>
      </div>
      {/* <div className="flex items-center cursor-pointer w-full mb-8" onClick={() => setActive(3)}>
        <HiOutlineReceiptRefund size={20} color={active === 3 ? "#0B3F9C" : ""} />
        <span className={`pl-3 ${active === 3 ? "text-[#0B3F9C]" : ""} 800px:block hidden`}>Refunds</span>
      </div> */}

      <div className="flex items-center cursor-pointer w-full mb-8" onClick={() => setActive(4) || navigate("/inbox")}>
        <AiOutlineMessage size={20} color={active === 4 ? "#0B3F9C" : ""} />
        <span className={`pl-3 ${active === 4 ? "text-[#0B3F9C]" : ""} 800px:block hidden`}>Inbox</span>
      </div>

      <div className="flex items-center cursor-pointer w-full mb-8" onClick={() => setActive(6)}>
        <RiLockPasswordLine size={20} color={active === 6 ? "#0B3F9C" : ""} />
        <span className={`pl-3 ${active === 6 ? "text-[#0B3F9C]" : ""} 800px:block hidden`}>Change Password</span>
      </div>

      <div className="flex items-center cursor-pointer w-full mb-8" onClick={() => setActive(7)}>
        <TbAddressBook size={20} color={active === 7 ? "#0B3F9C" : ""} />
        <span className={`pl-3 ${active === 7 ? "text-[#0B3F9C]" : ""} 800px:block hidden`}>Address</span>
      </div>

      <div className="single_item flex items-center cursor-pointer w-full mb-8" onClick={logoutHandler}>
        <AiOutlineLogin size={20} color={active === 8 ? "#0B3F9C" : ""} />
        <span className={`pl-3 ${active === 8 ? "text-[#0B3F9C]" : ""} 800px:block hidden`}>Log out</span>
      </div>
    </div>
  );
};

export default ProfileSidebar;
