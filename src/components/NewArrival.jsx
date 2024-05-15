import React, { useContext, useEffect, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaShoppingCart } from "react-icons/fa";
import { apiData } from './ContextApi'
import Slider from "react-slick";
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from "react-icons/hi";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className='lg:h-[50px] lg:w-[50px] w-[30px] h-[30px] bg-[#979797] rounded-full text-center lg:leading-[50px] leading-[30px] absolute top-[50%] lg:right-[-25px] right-0 translate-y-[-50%] z-50' onClick={onClick}><HiOutlineArrowNarrowRight className='inline-block lg:text-[25px] text-white'/></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className='lg:h-[50px] lg:w-[50px] w-[30px] h-[30px] bg-[#979797] rounded-full text-center lg:leading-[50px] leading-[30px] absolute top-[50%] lg:left-[-25px] left-0 translate-y-[-50%] z-50' onClick={onClick}><HiOutlineArrowNarrowLeft className='inline-block lg:text-[25px] text-white'/></div>
    );
}


const NewArrival = () => {
    
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            }
        ]
    };
    let data = useContext(apiData)
    return (
        <>
            <section className='lg:pb-[100px] pb-[50px] px-1 lg:px-0'>
                <Container>
                    <div className="">
                        <h2 className='font-sans text-[#262626] lg:text-[36px] text-[20px] font-bold lg:pb-[48px] pb-[10px]'>New Arrivals</h2>
                    </div>
                    <Slider {...settings}>
                        {data.map((item) => (
                            <div className="lg:w-[96%] group">
                                <div className="relative overflow-hidden">
                                    <img className='w-full lg:h-[250px] h-[250px]' src={item.thumbnail} alt="product_img" />
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
                                    <h3 className='font-sans text-[#262626] lg:text-[18px] text-[11px] font-bold '>{item.title}</h3>
                                    <h4 className='text-[#767676] font-sans lg:text-[20px] text-[11px] font-normal '>${item.price}</h4>
                                </div>
                                <h5 className='text-[#767676] font-sans text-[16px] font-normal pb-[10px]'>Available Stock: {item.stock}</h5>
                            </div>
                        ))}
                    </Slider>
                </Container>
            </section>
        </>
    )
}

export default NewArrival