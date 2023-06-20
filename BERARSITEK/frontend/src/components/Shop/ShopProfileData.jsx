import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAllProductsShop } from "../../redux/actions/product";
import styles from "../../styles/styles";
import ProductCard from "../Route/ProductCard/ProductCard";
import { backend_url } from "../../server";
import Ratings from "../Products/Ratings";

const ShopProfileData = ({ isOwner }) => {
  const { products } = useSelector((state) => state.products);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsShop(id));
  }, [dispatch]);

  const [active, setActive] = useState(1);

  const allReviews = products && products.map((product) => product.reviews).flat();

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <div className="w-full flex">
          <div className="flex items-center" onClick={() => setActive(1)}>
            <h5 className={`font-[600] text-[20px] ${active === 1 ? "text-blue-500" : "text-[#333]"} cursor-pointer pr-[20px]`}>Blueprint List</h5>
          </div>

          <div className="flex items-center" onClick={() => setActive(3)}>
            <h5 className={`font-[600] text-[20px] ${active === 3 ? "text-blue-500" : "text-[#333]"} cursor-pointer pr-[20px]`}>Reviews</h5>
          </div>
        </div>
        <div>
          {isOwner && (
            <div>
              <Link to="/dashboard">
                <div className={`${styles.button} !rounded-[4px] h-[42px] font-semibold`} style={{ backgroundColor: "#0B3F9C", width: 175 }}>
                  <span className="text-[#fff] ">Back to Dashboard</span>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>

      <br />
      {active === 1 && (
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-4 xl:gap-[20px] mb-12 border-0">
          {products && products.map((i, index) => <ProductCard data={i} key={index} isShop={true} />)}
        </div>
      )}

      {active === 3 && (
        <div className="w-full">
          {allReviews &&
            allReviews.map((item, index) => (
              <div className="w-full flex my-4 rounded-[4px]" style={{ backgroundColor: "#fff" }}>
                <img src={`${backend_url}/${item.user.avatar}`} className="w-[50px] h-[50px] mt-4 ml-2 mb-4 rounded-full" alt="" />
                <div className="pl-2 mt-2 mb-2">
                  <div className="flex w-full items-center">
                    <h1 className="font-[600] pr-2">{item.user.name}</h1>
                    <Ratings rating={item.rating} />
                  </div>
                  <p className="font-[400] text-[#000000a7]">{item?.comment}</p>
                  <p className="text-[#000000a7] text-[14px]">{item?.createdAt.split('T')[0]}</p>
                </div>
              </div>
            ))}
          {allReviews && allReviews.length === 0 && <h5 className="w-full text-center py-5 text-[18px]">No Reviews!</h5>}
        </div>
      )}
    </div>
  );
};

export default ShopProfileData;