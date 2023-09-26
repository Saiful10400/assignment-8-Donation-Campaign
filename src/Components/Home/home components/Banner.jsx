import { useRef, useState } from "react";
import "./banner.css";
import Cart from "./Cart";
import { data } from 'autoprefixer';

const Banner = ({ data }) => {
  const [showData, setShowData] = useState(data);

  const getinput = useRef("");
  const searchHandle = () => {
    const inputfield = getinput.current.value;
    const justifiedData = data.filter(
      (item) => item.category.toUpperCase() === inputfield.toUpperCase()
    );
    justifiedData.length>0 && setShowData(justifiedData)
  };


  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 py-44 banner ">
        <h1 className="text-center text-3xl lg:text-5xl font-bold">
          I Grow By Helping People In Need
        </h1>
        <div className="flex justify-center items-center">
          <input
            ref={getinput}
            type="text"
            placeholder="Search here...."
            className="input input-bordered w-full w-36 lg:max-w-xs rounded-none rounded-bl-lg rounded-tl-lg "
          />
          <button
            className="btn text-white text-base font-semibold bg-[#FF444A] py-[24px] leading-[6px] px-7  rounded-none rounded-br-lg rounded-tr-lg  "
            onClick={searchHandle}
          >
            Search
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 px-3 lg:px-0 lg:grid-cols-4 gap-6 mt-24">
        {
            showData.map((item,idx)=><Cart key={idx} data={item} ></Cart>)
        }
      </div>
    </>
  );
};

export default Banner;
