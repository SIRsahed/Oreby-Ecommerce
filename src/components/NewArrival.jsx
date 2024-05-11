import React, { useContext, useEffect, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import NA1 from "../assets/na1.png"
import NA2 from "../assets/na2.png"
import NA3 from "../assets/na3.png"
import NA4 from "../assets/na4.png"
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";
import { apiData } from './ContextApi'


const NewArrival = () => {
    let data = useContext(apiData)
    return (
        <>
            <section className='lg:pb-[100px] pb-[50px] px-1 lg:px-0'>
                <Container>
                    <div className="">
                        <h2 className='font-sans text-[#262626] lg:text-[36px] text-[20px] font-bold lg:pb-[48px] pb-[10px]'>New Arrivals</h2>
                    </div>
                    <Flex className="justify-between flex-wrap">
                        {data.map((item)=>(
                            <div className="lg:w-[24%] w-[49%] group pb-[20px] lg:pb-0 lg:mb-[50px] mb-[30px] bg-[#f6f3f3] p-[10px] border-[1px] border-[#000]">
                            <div className="relative overflow-hidden">
                                <img className='w-full lg:h-[250px] h-[150px]' src={item.thumbnail} alt="na1" />
                                <h5 className='absolute top-[20px] left-[26px] font-sans text-[#fff] lg:text-[16px] text-[11px] font-bold bg-[#262626] py-[8px] px-[28px] rounded-sm'>10%</h5>
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
                                <h3 className='font-sans text-[#262626] lg:text-[18px] text-[11px] font-bold '>{item.title}</h3>
                                <h4 className='text-[#767676] font-sans lg:text-[20px] text-[11px] font-normal '>${item.price}</h4>
                            </div>
                            <h5 className='text-[#767676] font-sans text-[16px] font-normal'>Available Stock: {item.stock}</h5>
                        </div>
                        ))}
                    </Flex>
                </Container>
            </section>
        </>
    )
}

export default NewArrival