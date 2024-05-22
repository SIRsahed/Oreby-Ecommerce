import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../components/Container';
import Flex from '../components/Flex';
import { FaStar } from "react-icons/fa";
import { Accordion } from "flowbite-react";


const ProductDetails = () => {
  let [singleData, setSingleData] = useState([])
  let productId = useParams()


  let getData = () => {
    axios.get(`https://dummyjson.com/products/${productId.id}`).then((response) => {
      setSingleData(response.data);
    })
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <>
      <section className='py-10'>
        <Container>
          <Flex className="flex-wrap  justify-between items-center">
            {singleData?.images?.map((item) => (
              <div className="lg:w-[48%] w-full my-4">
                <img src={item} className='w-full lg:h-[450px] h-[250px]' alt="Pdetails" />
              </div>
            ))}
          </Flex>
          <div className="">
            <h3 className='font-sans font-bold text-[39px] text-[#262626] pt-[30px] pb-[18px]'>Product</h3>
            <div className="flex gap-x-4">
              <div className="flex">
                <FaStar className='text-[#FFD881]' />
                <FaStar className='text-[#FFD881]' />
                <FaStar className='text-[#FFD881]' />
                <FaStar className='text-[#FFD881]' />
                <FaStar className='text-[#FFD881]' />
              </div>
              <div className="">
                <h3 className='font-sans font-normal text-[14px] text-[#767676] pb-[18px]'>Review</h3>
              </div>
            </div>
            <div className="border-b-[1px] border-[#F0F0F0]">
              <h4 className='font-sans font-bold text-[20px] text-[#262626] pb-[18px]'>${singleData.price}</h4>
            </div>
            <div className="flex gap-x-6 py-6 items-center">
              <div className="">
                <h3 className='font-sans font-bold text-[16px] text-[#262626] uppercase'>Color :</h3>
              </div>
              <div className="flex gap-x-3 ms-[40px]">
                <div className="h-[30px] w-[30px] bg-[#767676] rounded-full"></div>
                <div className="h-[30px] w-[30px] bg-[#FF8686] rounded-full"></div>
                <div className="h-[30px] w-[30px] bg-[#7ED321] rounded-full"></div>
                <div className="h-[30px] w-[30px] bg-[#B6B6B6] rounded-full"></div>
                <div className="h-[30px] w-[30px] bg-[#15CBA5] rounded-full"></div>
              </div>
            </div>
            <div className="flex gap-x-6 py-6 items-center">
              <div className="">
                <h3 className='font-sans font-bold text-[16px] text-[#262626] uppercase'>Size :</h3>
              </div>
              <div className="">
                <select name="" id="" className='border-[1px] border-[#F0F0F0] py-2 w-[150px] ms-[64px] px-2'>
                  <option value="">S</option>
                  <option value="">M</option>
                  <option value="">L</option>
                  <option value="">XL</option>
                  <option value="">XXL</option>
                </select>
              </div>
              <div className=""></div>
            </div>
            <div className="flex gap-x-6 py-6 items-center border-b-[1px] border-[#F0F0F0]">
              <div className="">
                <h3 className='font-sans font-bold text-[16px] text-[#262626] uppercase'>Quantity :</h3>
              </div>
              <div className="flex gap-x-6 justify-around border-[1px] border-[#262626] py-2 w-[150px] ms-[18px]">
                <div className="">-</div>
                <div className="">1</div>
                <div className="">+</div>
              </div>
            </div>
            <div className="flex gap-x-6 items-center py-6 border-b-[1px] border-[#F0F0F0]">
              <div className="">
                <h3 className='font-sans font-bold text-[16px] text-[#262626] uppercase'>Stock :</h3>
              </div>
              <div className="">
                <h3>{singleData.stock}</h3>
              </div>
            </div>
            <div className="flex gap-x-6 items-center py-6 border-b-[1px] border-[#F0F0F0]">
              <button className='font-sans font-bold text-[14px] text-[#262626] h-[60px] w-[200px] border-2 border-[#262626] duration-300 ease-in-out hover:bg-[#000] hover:text-white'>Add to Wish List</button>
              <button className='font-sans font-bold text-[14px] text-[#262626] h-[60px] w-[200px] border-2 border-[#262626] duration-300 ease-in-out hover:bg-[#000] hover:text-white'>Add to Cart</button>
            </div>
            <Accordion collapseAll>
              <Accordion.Panel>
                <Accordion.Title>What is Flowbite?</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>Is there a Figma file available?</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                    has a design equivalent in our Figma file.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>What are the differences between Flowbite and Tailwind UI?</Accordion.Title>
                <Accordion.Content>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                    Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                    components, whereas Tailwind UI offers sections of pages.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        </Container>
      </section>
    </>
  )
}

export default ProductDetails