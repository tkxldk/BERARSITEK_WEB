import React from "react";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { LuPackage, LuPackagePlus, LuSettings } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import { CiSettings } from "react-icons/ci";
import { FaMoneyBill } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { RiShoppingBag3Line } from "react-icons/ri";

const DashboardSideBar = ({ active }) => {
  return (
    <div className="w-full h-[90vh] bg-white shadow-sm sticky top-0 left-0 z-10">
      {/* single item */}
      <div className="w-full flex items-center p-4">
        <Link to="/dashboard" className="w-full flex items-center">
          <RxDashboard size={30} color={`${active === 1 ? "#0B3F9C" : "#555"}`} />
          <h5 className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 1 ? "text-[#0B3F9C]" : "text-[#555]"}`}>Dashboard</h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-orders" className="w-full flex items-center">
          <RiShoppingBag3Line size={30} color={`${active === 2 ? "#0B3F9C" : "#555"}`} />
          <h5 className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 2 ? "text-[#0B3F9C]" : "text-[#555]"}`}>All Orders</h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-products" className="w-full flex items-center">
          <LuPackage size={30} color={`${active === 3 ? "#0B3F9C" : "#555"}`} />
          <h5 className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 3 ? "text-[#0B3F9C]" : "text-[#555]"}`}>All Products</h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-create-product" className="w-full flex items-center">
          <LuPackagePlus size={30} color={`${active === 4 ? "#0B3F9C" : "#555"}`} />
          <h5 className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 4 ? "text-[#0B3F9C]" : "text-[#555]"}`}>Create Product</h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-withdraw-money" className="w-full flex items-center">
          <FaMoneyBill size={30} color={`${active === 7 ? "#0B3F9C" : "#555"}`} />
          <h5 className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 7 ? "text-[#0B3F9C]" : "text-[#555]"}`}>Withdraw Money</h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-messages" className="w-full flex items-center">
          <BiMessageSquareDetail size={30} color={`${active === 8 ? "#0B3F9C" : "#555"}`} />
          <h5 className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 8 ? "text-[#0B3F9C]" : "text-[#555]"}`}>Shop Inbox</h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/settings" className="w-full flex items-center">
          <LuSettings size={30} color={`${active === 11 ? "#0B3F9C" : "#555"}`} />
          <h5 className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 11 ? "text-[#0B3F9C]" : "text-[#555]"}`}>Settings</h5>
        </Link>
      </div>
    </div>
  );
};

export default DashboardSideBar;
