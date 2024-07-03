import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { HiBars3CenterLeft } from "react-icons/hi2";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartItemDelete } from './slice/ProductSlice';
import { apiData } from './ContextApi';

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

  let data = useSelector((state) => state.product.cartItem)
  let dispatch = useDispatch()
  let handleDeleteCartItem = (index) => {
    dispatch(cartItemDelete(index))
  }

  const {totalPrice} = data.reduce((acc, item) => {
    acc.totalPrice += item.price * item.Qty
    return acc
  }, {totalPrice:0})


  let info = useContext(apiData)
  let [searchInput, setSearchInput] = useState("")
  let [searchFilter, setSearchFilter] = useState([])

  let handleSearch = (e) => {
    setSearchInput(e.target.value);
    if(e.target.value == ""){
      setSearchFilter([])
    }else{
      let searchItem = info.filter((item) => item.title.toLowerCase().includes(e.target.value));
      setSearchFilter(searchItem)
    }
  }


  return (
    <>
      <header className='bg-[#F5F5F3] lg:pb-[25px] pb-3 lg:pt-[90px] pt-[50px] px-2 lg:px-0'>
        <Container>
          <Flex className="justify-between items-center">
            <div className="lg:w-[30%] w-[10%] relative z-40">
              <div ref={menuRef} className="flex gap-x-3 items-center cursor-pointer text-[22px]">
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
                <input value={searchInput} onChange={handleSearch} className='w-full h-[40px] outline-none pl-3 pr-12 rounded-sm' placeholder='Search Products' type="search" />
                <div className='absolute top-[50%] right-[30px] translate-y-[-50%]'>
                  <FaSearch />
                </div>
                {searchFilter.length > 0 &&
                <div className="absolute z-40 h-[300px] overflow-y-scroll">
                  {searchFilter.map((item)=>(
                    <div className="border-b-2">
                    <div className="flex justify-between items-center bg-[#F5F5F3] lg:px-5 px-3 py-1">
                      <div className="w-[30%]">
                        <img className='h-[80px] w-full' src={item.thumbnail} alt="cart" />
                      </div>
                      <div className="w-[60%] text-[#262626] text-[16px] font-sans font-bold">
                        <h3 className='pb-[12px]'>{item.title}</h3>
                      </div>
                    </div>
                  </div>
                  ))}
                </div>
                }
              </div>
                
            </div>
            <div className="lg:w-[30%] w-[20%] flex justify-end relative">
              <div className="flex lg:gap-x-4 gap-x-2 z-40">
                <div ref={userRef} className="flex cursor-pointer z-40 text-[22px]">
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
                  <div className="relative text-[22px]">
                  <FaShoppingCart />
                  {data.length > 0 &&
                  <div className="absolute left-[9px] top-[-8px] h-[20px] w-[20px] rounded-full flex justify-center items-center bg-[#767676] text-[15px] text-white">
                    {data.length}
                  </div>
                  }
                  </div>
                </div>
                {cartShow &&
                  <div className="lg:w-[360px] w-[300px] absolute top-[30px] right-0 bg-[#fff]">
                    {data.map((item, index) => (
                      <div className="border-b-2">
                        <div className="flex justify-between items-center bg-[#F5F5F3] lg:px-5 px-3 py-1">
                          <div className="w-[30%]">
                            <img className='h-[80px] w-full' src={item.thumbnail} alt="cart" />
                          </div>
                          <div className="w-[60%] text-[#262626] text-[16px] font-sans font-bold">
                            <h3 className='pb-[12px]'>{item.title}</h3>
                            <h4>${item.price}</h4>
                          </div>
                          <div className="w-[10%] cursor-pointer" onClick={()=>handleDeleteCartItem(index)}>
                            <ImCross />
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="bg-white pb-6">
                      <div className="py-[13px] px-5">
                        <h3 className='text-[#767676] text-[16px] font-sans font-normal'>Subtotal: <span className='text-[#262626] text-[16px] font-sans font-bold'>${totalPrice}</span></h3>
                      </div>
                      <div className="lg:px-5 px-2 flex justify-between pt-4 bg-white">
                        <div className="">
                          <Link to="/cart">
                            <a className='text-[#262626] text-[16px] font-sans font-bold px-[30px] py-[14px] border-2 border-[#2B2B2B] duration-300 hover:bg-[#262626] hover:text-[#fff] rounded-lg'>View Cart</a>
                          </Link>
                        </div>
                        <div className="">
                          <Link to="/checkout">
                            <a className='text-[#262626] text-[16px] font-sans font-bold px-[30px] py-[14px] border-2 border-[#2B2B2B] duration-300 hover:bg-[#262626] hover:text-[#fff] rounded-lg'>Checkout</a>
                          </Link>
                        </div>
                      </div>
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