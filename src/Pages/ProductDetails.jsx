import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../components/Container";
import Flex from "../components/Flex";
import { FaStar } from "react-icons/fa";
import { Accordion } from "flowbite-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../components/slice/ProductSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
  let [singleData, setSingleData] = useState([]);
  let productId = useParams();
  let dispatch = useDispatch();

  let getData = () => {
    axios
      .get(`https://dummyjson.com/products/${productId.id}`)
      .then((response) => {
        setSingleData(response.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  let handleAddToCart = (item) => {
    dispatch(addToCart({ ...item, Qty: 1 }));
    toast.success('Added to cart successfully')
  };

  return (
    <>
      <section className="py-10 px-1 lg:px-0">
        <Container>
          <Flex className="flex-wrap  justify-between items-center">
            {singleData?.images?.map((item) => (
              <div className="lg:w-[48%] w-full my-4">
                <img
                  src={item}
                  className="w-full lg:h-[450px] h-[250px]"
                  alt="Pdetails"
                />
              </div>
            ))}
          </Flex>
          <div className="">
            <h3 className="font-sans font-bold text-[39px] text-[#262626] pt-[30px] pb-[18px]">
              Product
            </h3>
            <div className="flex gap-x-4">
              <div className="flex">
                <FaStar className="text-[#FFD881]" />
                <FaStar className="text-[#FFD881]" />
                <FaStar className="text-[#FFD881]" />
                <FaStar className="text-[#FFD881]" />
                <FaStar className="text-[#FFD881]" />
              </div>
              <div className="">
                <h3 className="font-sans font-normal text-[14px] text-[#767676] pb-[18px]">
                  Review
                </h3>
              </div>
            </div>
            <div className="border-b-[1px] border-[#F0F0F0]">
              <h4 className="font-sans font-bold text-[20px] text-[#262626] pb-[18px]">
                ${singleData.price}
              </h4>
            </div>
            <div className="flex gap-x-6 py-6 items-center">
              <div className="">
                <h3 className="font-sans font-bold text-[16px] text-[#262626] uppercase">
                  Color :
                </h3>
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
                <h3 className="font-sans font-bold text-[16px] text-[#262626] uppercase">
                  Size :
                </h3>
              </div>
              <div className="">
                <select
                  name=""
                  id=""
                  className="border-[1px] border-[#F0F0F0] py-2 w-[150px] ms-[64px] px-2"
                >
                  <option value="">S</option>
                  <option value="">M</option>
                  <option value="">L</option>
                  <option value="">XL</option>
                  <option value="">XXL</option>
                </select>
              </div>
              <div className=""></div>
            </div>
            <div className="flex gap-x-6 items-center py-6 border-b-[1px] border-[#F0F0F0]">
              <div className="">
                <h3 className="font-sans font-bold text-[16px] text-[#262626] uppercase">
                  Stock :
                </h3>
              </div>
              <div className="">
                <h3>{singleData.stock}</h3>
              </div>
            </div>
            <div className="flex gap-x-6 items-center py-6 border-b-[1px] border-[#F0F0F0]">
              <button className="font-sans font-bold text-[14px] text-[#262626] h-[60px] w-[200px] border-2 border-[#262626] duration-300 ease-in-out hover:bg-[#000] hover:text-white">
                Add to Wish List
              </button>
              <div>
                <button onClick={() => handleAddToCart(singleData)} className="font-sans font-bold text-[14px] text-[#262626] h-[60px] w-[200px] border-2 border-[#262626] duration-300 ease-in-out hover:bg-[#000] hover:text-white">
                  Add to Cart
                </button>
                <ToastContainer
                  position="top-center"
                  autoClose={900}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover={false}
                  theme="dark"
                />
              </div>
            </div>
            <div className="py-6 border-b-[1px] border-[#F0F0F0]">
              <Accordion
                collapseAll
                className="!border-none lg:w-[750px] w-full"
              >
                <Accordion.Panel>
                  <Accordion.Title className="py-5 border-t-2 px-2 !font-sans !font-bold !text-[14px] !text-[#262626]">
                    FEATURES & DETAILS
                  </Accordion.Title>
                  <Accordion.Content className="py-3 px-2">
                    <p className="mb-2 text-[#767676]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title className="pt-5 border-t-2 px-2 !font-sans !font-bold !text-[14px] !text-[#262626]">
                    SHIPPING & RETURNS
                  </Accordion.Title>
                  <Accordion.Content className="py-3 px-2">
                    <p className="mb-2 text-[#767676]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProductDetails;
