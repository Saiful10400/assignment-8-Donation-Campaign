import { useState } from "react";
import DonationCart from "./DonationCart";


const Donation = () => {
  const [isshow,setIsShow]=useState(false)
  let localstorageData = localStorage.getItem("cart");
  if (localstorageData) {
    localstorageData = JSON.parse(localstorageData);
  } else {
    localstorageData = [];
  }
  return (
    <>
      <div className={localstorageData.length<1 ? "hidden" : "block"}>
        <div className="grid grid-cols-2 gap-6 ">
          {

            isshow ? localstorageData.map((item, idx) => (
              <DonationCart key={idx} data={item}></DonationCart>
            )) : localstorageData.slice(0,4).map((item, idx) => (
              <DonationCart key={idx} data={item}></DonationCart>
            ))



          }
        </div>

        <div className="text-center">
          <button onClick={()=>setIsShow(!isshow)} className={`btn my-10 bg-green-600 text-xl  font-semibold text-white ${localstorageData.length>=5? "inline-block" :"hidden"}`}>
            {isshow?"See less" : "See all"}
          </button>
        </div>
      </div>

      <div className={localstorageData.length<1 ? "block" : "hidden"}>
        <div className="w-full h-[50vh] flex justify-center items-center">
        <h1 className="text-6xl font-bold">You have not donated yet.</h1>
        </div>
      </div>
    </>
  );
};

export default Donation;
