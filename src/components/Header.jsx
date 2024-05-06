import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import Logo from "../assets/logo.png"
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";

const Header = () => {
  let [show, setShow] = useState(false)
  return (
    <>
      <nav className='lg:h-[80px] relative z-50 px-2 lg:px-0 lg:py-0 py-2'>
        <Container>
          <Flex className="justify-between lg:h-[80px] items-center">
            <div className="w-1/3 items-center">
              <img src={Logo} alt="logo" />
            </div>
            <div className="w-2/3">
              <ul className={`lg:flex lg:flex-row flex flex-col gap-y-3 gap-x-10 items-center font-sans text-[#767676] text-[18px] font-medium lg:static fixed duration-[800ms] ${show == true ? "bg-[#262626] top-[30px] left-0 w-full text-center py-2" : "top-[30px] left-[-100px]"}`}>
                <li><a className='lg:hover:text-[#262626] hover:bg-[#fff] rounded-sm' href="#">Home</a></li>
                <li><a className='lg:hover:text-[#262626] hover:bg-[#fff] rounded-sm' href="#">Shop</a></li>
                <li><a className='lg:hover:text-[#262626] hover:bg-[#fff] rounded-sm' href="#">About</a></li>
                <li><a className='lg:hover:text-[#262626] hover:bg-[#fff] rounded-sm' href="#">Contacts</a></li>
                <li><a className='lg:hover:text-[#262626] hover:bg-[#fff] rounded-sm' href="#">Journal</a></li>
              </ul>
            </div>
            <div className="lg:hidden cursor-pointer" onClick={() => setShow(!show)}>
              {show == true ? <RxCross2 /> : <FaBars />}
            </div>
          </Flex>
        </Container>
      </nav>
    </>
  )
}

export default Header