import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight, AiOutlineUnorderedList } from "react-icons/ai";
import { RiShoppingBag3Line } from "react-icons/ri";
import { LuPackage } from "react-icons/lu";
import { FaMoneyBillWave } from "react-icons/fa";
import { BsHouse } from "react-icons/bs";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfShop } from "../../redux/actions/order";
import { getAllProductsShop } from "../../redux/actions/product";
import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";

const DashboardHero = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.order);
  const { seller } = useSelector((state) => state.seller);
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllOrdersOfShop(seller._id));
    dispatch(getAllProductsShop(seller._id));
  }, [dispatch]);

  const availableBalance = seller?.availableBalance;

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.8 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered" ? "greenColor" : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Quantity",
      type: "number",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.id}`}>
              <Button>
                <AiOutlineArrowRight size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },
  ];

  const row = [];

  orders &&
    orders.forEach((item) => {
      row.push({
        id: item._id,
        itemsQty: item.cart.reduce((acc, item) => acc + item.qty, 0),
        total: "Rp. " + item.totalPrice,
        status: item.status,
      });
    });
  return (
    <div className="w-full p-8">
      <h3 className="text-[22px] font-Poppins pb-2">Architect Dashboard</h3>
      <div className="w-full block 800px:flex items-center justify-between">
        <div className="w-full mb-4 800px:w-[50%] min-h-[20vh] bg-white shadow rounded px-2 py-5 flex flex-col items-center justify-center">
          <div className="flex items-center">
            <FaMoneyBillWave size={30} className="mr-2" color="#555" />
            <h3 className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}>
              Berarsitek's Credits <span className="text-[16px]">[10% TAX]</span>
            </h3>
          </div>
          <h5 className="pt-2  text-[22px] font-[500] ">Rp. {availableBalance}</h5>
          <Link to="/dashboard-withdraw-money">
            <h5 className="pt-4  text-[#0B3F9C]">Withdraw Money</h5>
          </Link>
        </div>

        <div className="w-full mb-4 800px:w-[20%] min-h-[20vh] bg-white shadow rounded px-2 py-5 flex flex-col items-center justify-center">
          <div className="flex items-center">
            <RiShoppingBag3Line size={30} className="mr-2" color="#555" />
            <h3 className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085] `}>All Orders</h3>
          </div>
          <h5 className="pt-2 text-[22px] font-[500]">{orders && orders.length}</h5>
          <Link to="/dashboard-orders">
            <h5 className="pt-4 text-[#0B3F9C]">View Orders</h5>
          </Link>
        </div>

        <div className="w-full mb-4 800px:w-[20%] min-h-[20vh] bg-white shadow rounded px-2 py-5 flex flex-col items-center justify-center">
          <div className="flex items-center">
            <LuPackage size={30} className="mr-2" color="#555" />
            <h3 className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}>All Products</h3>
          </div>
          <h5 className="pt-2 text-[22px] font-[500]">{products && products.length}</h5>
          <Link to="/dashboard-products">
            <h5 className="pt-4 text-[#0B3F9C]">View Products</h5>
          </Link>
        </div>
      </div>
      <br />
      <h3 className="text-[22px] font-Poppins pb-2">Orders History</h3>
      <div className="w-full min-h-[45vh] bg-white rounded">
        <DataGrid rows={row} columns={columns} pageSize={10} disableSelectionOnClick autoHeight />
      </div>
    </div>
  );
};

export default DashboardHero;
