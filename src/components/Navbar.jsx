import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { HiBars3CenterLeft } from "react-icons/hi2";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import CartImg from "../assets/cart.png"
import { ImCross } from "react-icons/im";

const Navbar = () => {

  let [menuShow, setmenuShow] = useState(false)
  let [userShow, setuserShow] = useState(false)
  let [cartShow, setcartShow] = useState(false)
  let menuRef = useRef()
  let userRef = useRef()
  let cartRef = useRef()

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (menuRef.current.contains(e.target)) {
        setmenuShow(!menuShow)
      } else {
        setmenuShow(false)
      }

      if (userRef.current.contains(e.target)) {
        setuserShow(!userShow)
      } else {
        setuserShow(false)
      }

      if (cartRef.current.contains(e.target)) {
        setcartShow(!cartShow)
      } else {
        setcartShow(false)
      }
    })
  }, [menuShow, userShow, cartShow])
  return (
    <>
      <header className='bg-[#F5F5F3] lg:py-[25px] py-3 px-2 lg:px-0'>
        <Container>
          <Flex className="justify-between items-center">
            <div className="lg:w-[30%] w-[10%] relative z-40">
              <div ref={menuRef} className="flex gap-x-3 items-center cursor-pointer">
                <HiBars3CenterLeft />
                <p className='text-[#262626] text-[16px] font-sans hidden lg:block'>Shop by Category</p>
              </div>
              {menuShow &&
                <div className="absolute top-[30px] left-0 w-[300px] bg-[#262626] py-3 px-6">
                  <ul className='font-sans text-[16px] font-normal text-[#FFFFFFB2]'>
                    <li className='py-[16px] duration-300 ease-in-out hover:text-[#fff] hover:pl-[10px]'>Accesories</li>
                    <li className='py-[16px] duration-300 ease-in-out hover:text-[#fff] hover:pl-[10px]'>Furniture</li>
                    <li className='py-[16px] duration-300 ease-in-out hover:text-[#fff] hover:pl-[10px]'>Electronics</li>
                    <li className='py-[16px] duration-300 ease-in-out hover:text-[#fff] hover:pl-[10px]'>Clothes</li>
                    <li className='py-[16px] duration-300 ease-in-out hover:text-[#fff] hover:pl-[10px]'>Bags</li>
                    <li className='py-[16px] duration-300 ease-in-out hover:text-[#fff] hover:pl-[10px]'>Home Appliances</li>
                  </ul>
                </div>
              }
            </div>
            <div className="lg:w-[40%] w-[70%]">
              <div className="relative">
                <input className='w-full h-[40px] outline-none pl-3 pr-12 rounded-sm' placeholder='Search Products' type="search" />
                <div className='absolute top-[50%] right-[30px] translate-y-[-50%]'>
                  <FaSearch />
                </div>
              </div>
            </div>
            <div className="lg:w-[30%] w-[20%] flex justify-end relative">
              <div className="flex lg:gap-x-4 gap-x-2">
                <div ref={userRef} className="flex cursor-pointer z-40">
                  <FaUser />
                  <IoMdArrowDropdown />
                </div>
                {userShow &&
                  <div className="absolute top-[30px] right-0 w-[300px] bg-[#262626] py-3 px-6">
                    <ul className='font-sans text-[16px] font-normal text-[#FFFFFFB2]'>
                      <li className='py-[16px] duration-300 ease-in-out hover:text-[#fff] hover:pl-[10px]'>My Account</li>
                      <li className='py-[16px] duration-300 ease-in-out hover:text-[#fff] hover:pl-[10px]'>Log in</li>
                      <li className='py-[16px] duration-300 ease-in-out hover:text-[#fff] hover:pl-[10px]'>Sign Up</li>
                    </ul>
                  </div>
                }
                <div ref={cartRef} className="cursor-pointer z-40">
                  <FaShoppingCart />
                </div>
                {cartShow &&
                <div className="lg:w-[360px] w-[300px] h-[241px] absolute top-[30px] right-0 bg-[#fff] border-[1px] border-[#262626]">
                  <div className="flex justify-between items-center bg-[#F5F5F3] lg:px-5 px-3 py-5">
                    <div className="">
                      <img className='h-[80px] w-[80px]' src={CartImg} alt="cart" />
                    </div>
                    <div className="text-[#262626] text-[16px] font-sans font-bold">
                      <h3 className='pb-[12px]'>Black Smart Watch</h3>
                      <h4>$44.00</h4>
                    </div>
                    <div className="">
                      <ImCross/>
                    </div>
                  </div>
                  <div className="py-[13px] px-5">
                    <h3 className='text-[#767676] text-[16px] font-sans font-normal'>Subtotal: <span className='text-[#262626] text-[16px] font-sans font-bold'>$44.00</span></h3>
                  </div>
                  <div className="lg:px-5 px-2 flex justify-between">
                    <a className='text-[#262626] text-[16px] font-sans font-bold px-[30px] py-[14px] border-2 border-[#2B2B2B] duration-300 hover:bg-[#262626] hover:text-[#fff]' href="#">View Cart</a>
                    <a className='text-[#262626] text-[16px] font-sans font-bold px-[30px] py-[14px] border-2 border-[#2B2B2B] duration-300 hover:bg-[#262626] hover:text-[#fff]' href="#">Checkout</a>
                  </div>
                </div>
                }
              </div>
            </div>
          </Flex>
        </Container>
      </header>
    </>
  )
}

export default Navbar