
import swal from "sweetalert";
import "./home components/Cart.css"
import {   useLoaderData, useParams } from "react-router-dom";




const Page = () => {
  const { id } = useParams();
  const allData = useLoaderData();

let foundedData=allData.find((item)=>item.id===parseInt(id))


// local storeage data load.

const onclickHandle=()=>{
//  get item form local storage.
let localDataQueri=()=>{
  if(!localStorage.getItem("cart")){
    return "[]"
  }
  else{
    return localStorage.getItem("cart")
  }
}


const localstorageData=JSON.parse(localDataQueri())
const dataTobeSet=[...localstorageData,foundedData]
localStorage.setItem("cart",JSON.stringify(dataTobeSet))

// sweet aleart.

swal({
  title: "Good job!",
  text: "You Donated successfully.",
  icon: "success",
  button: "Done",
});

// 

}

  return (
    <div className="px-2 lg:px-0">
      <img  className="w-full lg:h-[90vh] object-cover rounded-lg " src={foundedData.img} alt="" />
      <div className="min-w-full lg:min-h-[130px]  lg:bg-[#0000009c] lg:relative  lg:top-[-130px] rounded-bl-lg rounded-br-lg flex justify-start items-center">
        <button onClick={onclickHandle} className={`btn ${foundedData.textbg} mt-3 lg:mt-0  lg:ml-9 border-none rounded-md text-white text-base lg:text-lg font-normal lg:py-7 lg:px-4 lg:leading-[0]`}>Donate $ {foundedData.price}</button>
      </div>
      <div className="lg:relative lg:mt-[-80px]">
        <h1 className="text-[40px] font-bold">{foundedData.title}</h1>
        <p className="text-[15px] mt-6 font-normal text-gray-700">{foundedData.description}</p>
      </div>
    </div>
  );
};

export default Page;
