import React from "react";
import { useNavigate } from "react-router-dom";
import productslist from "../img/producticon.png";
import bookmark from "../img/bookmarkicon.png";


const NavModal = () => {
  const navigate = useNavigate();

  return (
    <div className="NavModal">
      <div className="hello">이예리님, 안녕하세요!</div>
      <div onClick={() => {navigate("/products/list");}} className="NavModal-list">
        <img className="productslist" src={productslist} alt="productslist" />
        상품리스트 페이지
      </div>
      <div onClick={() => {navigate("/bookmark");}} className="NavModal-list">
        <img className="bookmark" src={bookmark} alt="bookmark" />
        북마크 페이지
      </div>
    </div>
  );
};

export default NavModal;