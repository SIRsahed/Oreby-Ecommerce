import React from 'react'
import Container from './Container'
import Flex from './Flex'
import NA1 from "../assets/na1.png"
import NA2 from "../assets/na2.png"
import NA3 from "../assets/na3.png"
import NA4 from "../assets/na4.png"
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";

const NewArrival = () => {
    return (
        <>
            <section className='lg:pb-[100px] pb-[50px] px-1 lg:px-0'>
                <Container>
                    <div className="">
                        <h2 className='font-sans text-[#262626] lg:text-[36px] text-[20px] font-bold lg:pb-[48px] pb-[10px]'>New Arrivals</h2>
                    </div>
                    <Flex className="justify-between flex-wrap">
                        <div className="lg:w-[24%] w-[49%] group pb-[20px] lg:pb-0">
                            <div className="relative">
                                <img src={NA1} alt="na1" />
                                <h5 className='absolute top-[20px] left-[26px] font-sans text-[#fff] lg:text-[16px] text-[11px] font-bold bg-[#262626] py-[8px] px-[28px] rounded-sm'>10%</h5>
                                <div className="w-full h-[50%] bg-[#fff] absolute left-0 bottom-[-50px] pt-[25px] pr-[30px] flex flex-col gap-y-2 opacity-0 duration-500 ease-in-out group-hover:bottom-0 group-hover:opacity-100">
                                    <div className="flex gap-x-3 justify-end">
                                        <h3 className='text-[#767676] font-sans text-[16px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out'>Add to Wish List</h3>
                                        <FaHeart />
                                    </div>
                                    <div className="flex gap-x-3 justify-end">
                                        <h3 className='text-[#767676] font-sans text-[16px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out'>Compare</h3>
                                        <TfiReload />
                                    </div>
                                    <div className="flex gap-x-3 justify-end">
                                        <h3 className='text-[#767676] font-sans text-[16px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out'>Add to Cart</h3>
                                        <FaShoppingCart />
                                    </div>

                                </div>
                            </div>

                            <div className="flex justify-between py-[15px] relative z-20 items-center">
                                <h3 className='font-sans text-[#262626] lg:text-[20px] text-[11px] font-bold '>Basic Crew  Neck Tee</h3>
                                <h4 className='text-[#767676] font-sans lg:text-[20px] text-[11px] font-normal '>$44.00</h4>
                            </div>
                            <h5 className='text-[#767676] font-sans text-[16px] font-normal'>Black</h5>
                        </div>
                        <div className="lg:w-[24%] w-[49%] group pb-[20px] lg:pb-0">
                            <div className="relative">
                                <img src={NA2} alt="na2" />
                                <h5 className='absolute top-[20px] left-[26px] font-sans text-[#fff] lg:text-[16px] text-[11px] font-bold bg-[#262626] py-[8px] px-[28px] rounded-sm'>NEW</h5>
                                <div className="w-full h-[50%] bg-[#fff] absolute left-0 bottom-[-50px] pt-[25px] pr-[30px] flex flex-col gap-y-2 opacity-0 duration-500 ease-in-out group-hover:bottom-0 group-hover:opacity-100">
                                    <div className="flex gap-x-3 justify-end">
                                        <h3 className='text-[#767676] font-sans text-[16px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out'>Add to Wish List</h3>
                                        <FaHeart />
                                    </div>
                                    <div className="flex gap-x-3 justify-end">
                                        <h3 className='text-[#767676] font-sans text-[16px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out'>Compare</h3>
                                        <TfiReload />
                                    </div>
                                    <div className="flex gap-x-3 justify-end">
                                        <h3 className='text-[#767676] font-sans text-[16px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out'>Add to Cart</h3>
                                        <FaShoppingCart />
                                    </div>

                                </div>
                            </div>

                            <div className="flex justify-between py-[15px] relative z-20 items-center">
                                <h3 className='font-sans text-[#262626] font-bold lg:text-[20px] text-[11px]'>Basic Crew Neck Tee</h3>
                                <h4 className='text-[#767676] font-sans font-normal lg:text-[20px] text-[11px]'>$44.00</h4>
                            </div>
                            <h5 className='text-[#767676] font-sans text-[16px] font-normal'>Black</h5>
                        </div>
                        <div className="lg:w-[24%] w-[49%] group pb-[20px] lg:pb-0">
                            <div className="relative">
                                <img src={NA3} alt="na3" />
                                <h5 className='absolute top-[20px] left-[26px] font-sans text-[#fff] lg:text-[16px] text-[11px] font-bold bg-[#262626] py-[8px] px-[28px] rounded-sm'>NEW</h5>
                                <div className="w-full h-[50%] bg-[#fff] absolute left-0 bottom-[-50px] pt-[25px] pr-[30px] flex flex-col gap-y-2 opacity-0 duration-500 ease-in-out group-hover:bottom-0 group-hover:opacity-100">
                                    <div className="flex gap-x-3 justify-end">
                                        <h3 className='text-[#767676] font-sans text-[16px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out'>Add to Wish List</h3>
                                        <FaHeart />
                                    </div>
                                    <div className="flex gap-x-3 justify-end">
                                        <h3 className='text-[#767676] font-sans text-[16px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out'>Compare</h3>
                                        <TfiReload />
                                    </div>
                                    <div className="flex gap-x-3 justify-end">
                                        <h3 className='text-[#767676] font-sans text-[16px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out'>Add to Cart</h3>
                                        <FaShoppingCart />
                                    </div>

                                </div>
                            </div>

                            <div className="flex justify-between py-[15px] relative z-20 items-center">
                                <h3 className='font-sans text-[#262626] font-bold lg:text-[20px] text-[11px]'>Basic Crew Neck Tee</h3>
                                <h4 className='text-[#767676] font-sans lg:text-[20px] text-[11px] font-normal'>$44.00</h4>
                            </div>
                            <h5 className='text-[#767676] font-sans text-[16px] font-normal'>Black</h5>
                        </div>
                        <div className="lg:w-[24%] w-[49%] group pb-[20px] lg:pb-0">
                            <div className="relative">
                                <img src={NA4} alt="na4" />
                                <h5 className='absolute top-[20px] left-[26px] font-sans text-[#fff] lg:text-[16px] text-[11px] font-bold bg-[#262626] py-[8px] px-[28px] rounded-sm'>NEW</h5>
                                <div className="w-full h-[50%] bg-[#fff] absolute left-0 bottom-[-50px] pt-[25px] pr-[30px] flex flex-col gap-y-2 opacity-0 duration-500 ease-in-out group-hover:bottom-0 group-hover:opacity-100">
                                    <div className="flex gap-x-3 justify-end">
                                        <h3 className='text-[#767676] font-sans text-[16px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out'>Add to Wish List</h3>
                                        <FaHeart />
                                    </div>
                                    <div className="flex gap-x-3 justify-end">
                                        <h3 className='text-[#767676] font-sans text-[16px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out'>Compare</h3>
                                        <TfiReload />
                                    </div>
                                    <div className="flex gap-x-3 justify-end">
                                        <h3 className='text-[#767676] font-sans text-[16px] font-normal hover:text-[#262626] hover:font-bold duration-300 ease-in-out'>Add to Cart</h3>
                                        <FaShoppingCart />
                                    </div>

                                </div>
                            </div>

                            <div className="flex justify-between py-[15px] relative z-20 items-center">
                                <h3 className='font-sans text-[#262626] lg:text-[20px] text-[11px] font-bold'>Basic Crew Neck Tee</h3>
                                <h4 className='text-[#767676] font-sans lg:text-[20px] text-[11px] font-normal'>$44.00</h4>
                            </div>
                            <h5 className='text-[#767676] font-sans text-[16px] font-normal'>Black</h5>
                        </div>
                    </Flex>
                </Container>
            </section>
        </>
    )
}

export default NewArrival