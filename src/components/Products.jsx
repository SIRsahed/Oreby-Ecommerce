import React, { useContext } from 'react'
import Container from './Container'
import Flex from './Flex'
import { apiData } from './ContextApi'
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";
import { RxCaretRight } from "react-icons/rx";
import { PiSquaresFourFill } from "react-icons/pi";
import { GrSort } from "react-icons/gr";

const Products = () => {
  let data = useContext(apiData)
  return (
    <>
      <section className='lg:pt-[80px] pt-[30px] lg:pb-[90px] pb-[30px]'>
        <Container>
          <div className="lg:pb-[70px] pb-[30px]">
            <h2 className='font-sans text-[#262626] lg:text-[36px] text-[20px] font-bold'>Products</h2>
            <h3 className='flex items-center gap-x-2 font-sans text-[12px] text-[#767676] font-normal'>Home <RxCaretRight/> Products</h3>
          </div>
          <Flex className="justify-between">
            <div className="w-[20%]">
              <div className="">
                <ul>
                  <li className='font-sans text-[20px] font-bold text-[#262626] py-5'>Shop by Category</li>
                  <li className='font-sans text-[16px] font-normal text-[#767676] py-5 border-b-2 border-[#F0F0F0]'>Category 1</li>
                  <li className='font-sans text-[16px] font-normal text-[#767676] py-5 border-b-2 border-[#F0F0F0]'>Category 2</li>
                  <li className='font-sans text-[16px] font-normal text-[#767676] py-5 border-b-2 border-[#F0F0F0]'>Category 3</li>
                  <li className='font-sans text-[16px] font-normal text-[#767676] py-5 border-b-2 border-[#F0F0F0]'>Category 4</li>
                  <li className='font-sans text-[16px] font-normal text-[#767676] py-5 border-b-2 border-[#F0F0F0]'>Category 5</li>
                </ul>
              </div>
              <div className="pt-[40px]">
                <ul>
                  <li className='font-sans text-[20px] font-bold text-[#262626] py-5'>Shop by Color</li>
                  <li className='font-sans text-[16px] font-normal text-[#767676] py-5 border-b-2 border-[#F0F0F0] relative after:absolute after:left-0 after:top-[50%] after:translate-y-[-50%] after:h-[10px] after:w-[10px] after:rounded-full after:bg-black pl-5'>Color 1</li>
                  <li className='font-sans text-[16px] font-normal text-[#767676] py-5 border-b-2 border-[#F0F0F0] relative after:absolute after:left-0 after:top-[50%] after:translate-y-[-50%] after:h-[10px] after:w-[10px] after:rounded-full after:bg-[#FF8686] pl-5'>Color 2</li>
                  <li className='font-sans text-[16px] font-normal text-[#767676] py-5 border-b-2 border-[#F0F0F0] relative after:absolute after:left-0 after:top-[50%] after:translate-y-[-50%] after:h-[10px] after:w-[10px] after:rounded-full after:bg-[#7ED321] pl-5'>Color 3</li>
                  <li className='font-sans text-[16px] font-normal text-[#767676] py-5 border-b-2 border-[#F0F0F0] relative after:absolute after:left-0 after:top-[50%] after:translate-y-[-50%] after:h-[10px] after:w-[10px] after:rounded-full after:bg-[#B6B6B6] pl-5'>Color 4</li>
                  <li className='font-sans text-[16px] font-normal text-[#767676] py-5 border-b-2 border-[#F0F0F0] relative after:absolute after:left-0 after:top-[50%] after:translate-y-[-50%] after:h-[10px] after:w-[10px] after:rounded-full after:bg-[#15CBA5] pl-5'>Color 5</li>
                </ul>
              </div>
              <div className="pt-[40px]">
                <ul>
                  <li className='font-sans text-[20px] font-bold text-[#262626] py-5'>Shop by Brand</li>
                  <li className='font-sans text-[16px] font-normal text-[#767676] py-5 border-b-2 border-[#F0F0F0]'>Brand 1</li>
                  <li className='font-sans text-[16px] font-normal text-[#767676] py-5 border-b-2 border-[#F0F0F0]'>Brand 2</li>
                  <li className='font-sans text-[16px] font-normal text-[#767676] py-5 border-b-2 border-[#F0F0F0]'>Brand 3</li>
                  <li className='font-sans text-[16px] font-normal text-[#767676] py-5 border-b-2 border-[#F0F0F0]'>Brand 4</li>
                  <li className='font-sans text-[16px] font-normal text-[#767676] py-5 border-b-2 border-[#F0F0F0]'>Brand 5</li>
                </ul>
              </div>
              <div className="pt-[40px]">
                <ul>
                  <li className='font-sans text-[20px] font-bold text-[#262626] py-5'>Shop by Price</li>
                  <li className='font-sans text-[16px] font-normal text-[#767676] py-5 border-b-2 border-[#F0F0F0]'>$0.00 - $9.99</li>
                  <li className='font-sans text-[16px] font-normal text-[#767676] py-5 border-b-2 border-[#F0F0F0]'>$10.00 - $19.99</li>
                  <li className='font-sans text-[16px] font-normal text-[#767676] py-5 border-b-2 border-[#F0F0F0]'>$20.00 - $29.99</li>
                  <li className='font-sans text-[16px] font-normal text-[#767676] py-5 border-b-2 border-[#F0F0F0]'>$30.00 - $39.99</li>
                  <li className='font-sans text-[16px] font-normal text-[#767676] py-5 border-b-2 border-[#F0F0F0]'>$40.00 - $69.99</li>
                </ul>
              </div>
            </div>
            <div className="w-[78%]">
              <div className="flex justify-between">
                <div className="flex gap-x-5 lg:pb-[50px] pb-[30px]">
                  <div className="h-[36px] w-[36px] flex justify-center items-center text-[#737373] hover:text-white duration-300 ease-in-out hover:bg-black border-[1px] border-[#737373]"><PiSquaresFourFill/></div>
                  <div className="h-[36px] w-[36px] flex justify-center items-center text-[#737373] hover:text-white duration-300 ease-in-out hover:bg-black border-[1px] border-[#737373]"><GrSort/></div>
                </div>
                <div className="flex justify-between gap-x-10">
                  <div className="">
                    <label htmlFor="" className='text-[16px] font-sans text-[#767676] font-normal'>Sort by : </label> 
                    <select name="" id="" className='border-[1px] border-[#767676] rounded-sm text-start px-[60px] py-[5px] text-[16px] font-sans text-[#767676] font-normal'>
                      <option value="">Featured</option>
                      <option value="">Price</option>
                      <option value="">Category</option>
                    </select>
                  </div>
                  <div className="">
                  <label htmlFor="" className='text-[16px] font-sans text-[#767676] font-normal'>Show : </label> 
                    <select name="" id="" className='border-[1px] border-[#767676] rounded-sm text-start px-[60px] py-[5px] text-[16px] font-sans text-[#767676] font-normal'>
                      <option value="">36</option>
                      <option value="">30</option>
                      <option value="">24</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex justify-between flex-wrap">

              {data.map((item) => (
                <div className="w-[32%] px-0 group">
                  <div className="relative overflow-hidden">
                    <img className='w-full lg:h-[250px] h-[170px]' src={item.thumbnail} alt="product_img" />
                    <h5 className='absolute top-[20px] left-[26px] font-sans text-[#fff] lg:text-[16px] text-[11px] font-bold bg-[#262626] py-[8px] px-[28px] rounded-sm'>{item.discountPercentage}%</h5>
                    <div className="w-full lg:h-[50%] bg-[#fff] absolute left-0 bottom-[-150px] lg:pt-[25px] pt-[10px] lg:pr-[30px] pr-[15px] flex flex-col lg:gap-y-2 gap-y-1 duration-500 ease-in-out group-hover:bottom-0">
                      <div className="flex gap-x-3 justify-end items-center">
                        <h3 className='text-[#767676] font-sans lg:text-[16px] text-[12px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out'>Add to Wish List</h3>
                        <FaHeart />
                      </div>
                      <div className="flex gap-x-3 justify-end items-center">
                        <h3 className='text-[#767676] font-sans lg:text-[16px] text-[12px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out'>Compare</h3>
                        <TfiReload />
                      </div>
                      <div className="flex gap-x-3 justify-end items-center">
                        <h3 className='text-[#767676] font-sans lg:text-[16px] text-[12px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out'>Add to Cart</h3>
                        <FaShoppingCart />
                      </div>

                    </div>
                  </div>

                  <div className="flex justify-between pt-[15px] relative z-20 items-center">
                    <h3 className='font-sans text-[#262626] lg:text-[18px] text-[16px] font-bold '>{item.title}</h3>
                    <h4 className='text-[#767676] font-sans lg:text-[20px] text-[16px] font-normal '>${item.price}</h4>
                  </div>
                  <h5 className='text-[#767676] font-sans lg:text-[18px] text-[16px] font-normal pb-[10px]'>Available Stock: {item.stock}</h5>
                </div>
              ))}
              </div>
            </div>
          </Flex>
        </Container>
      </section>
    </>
  )
}

export default Products