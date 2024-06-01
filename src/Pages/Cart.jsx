import React, { useState } from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import { Link } from "react-router-dom";
import { RxCaretRight } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { qtyIncrement } from "../components/slice/ProductSlice";

const Cart = () => {
  let data = useSelector((state)=>state.product.cartItem)
  let dispatch = useDispatch()

  let handleIncrement = (index) => {
    dispatch(qtyIncrement(index))
  }
  return (
    <>
      <section className='lg:pt-[80px] pt-[10px] lg:pb-[90px] pb-[30px] px-1 lg:px-0'>
        <Container>
          <div className="lg:pb-[70px] pb-[10px]">
            <h2 className="font-sans text-[#262626] lg:text-[36px] text-[20px] font-bold">
              Cart
            </h2>
            <h3 className="flex items-center gap-x-2 font-sans text-[12px] text-[#767676] font-normal">
              <Link to="/">Home</Link> <RxCaretRight /> Cart
            </h3>
          </div>
          <Flex className="justify-between items-center bg-[#F5F5F3] py-6">
            <div className="w-[40%] text-center">
              <h3 className="font-sans text-[16px] text-[#262626] font-bold">Product</h3>
            </div>
            <div className="w-[15%] text-center">
              <h3 className="font-sans text-[16px] text-[#262626] font-bold">Price</h3>
            </div>
            <div className="w-[30%] text-center">
              <h3 className="font-sans text-[16px] text-[#262626] font-bold">Quantity</h3>
            </div>
            <div className="w-[15%] text-center">
              <h3 className="font-sans text-[16px] text-[#262626] font-bold">Total</h3>
            </div>
          </Flex>
          {data.map((item, index)=>(
          <Flex className="justify-between items-center font-sans text-[16px] text-[#262626] font-bold border-[1px] pl-5">
            <div className="w-[40%] flex gap-x-12 items-center">
              <div className="cursor-pointer">
                <h4><ImCross/></h4>
              </div>
              <div className="">
                <img className="w-full h-[150px]" src={item.thumbnail} alt="cartimg" />
              </div>
              <div className="">
                <h4>{item.title}</h4>
              </div>
            </div>
            <div className="w-[15%] text-center">
              <h4>${item.price}</h4>
            </div>
            <div className="w-[30%] flex justify-center">
              <div className="flex gap-x-6 justify-around border-[1px] border-[#262626] py-2 w-[150px] ms-[18px]">
                <div className="cursor-pointer">-</div>
                <div className="">{item.Qty}</div>
                <div onClick={()=>handleIncrement(index)} className="cursor-pointer">+</div>
              </div>
            </div>
            <div className="w-[15%] text-center">
              <h4>${item.price * item.Qty}</h4>
            </div>
          </Flex>
          ))}
        </Container>
      </section>
    </>
  );
};

export default Cart;
