import "./home components/Cart.css"
import { useLoaderData, useParams } from "react-router-dom";
import Cart from './home components/Cart';

const Page = () => {
  const { id } = useParams();
  const allData = useLoaderData();

let foundedData=allData.find((item)=>item.id===parseInt(id))

console.log(foundedData)

  return (
    <div>
      <img  className="w-full h-[90vh] object-cover rounded-lg " src={foundedData.imgCover} alt="" />
      <div className="min-w-full min-h-[130px] bg-[#0000009c] relative top-[-130px] rounded-bl-lg rounded-br-lg flex justify-start items-center">
        <button className={`btn ${foundedData.textbg} ml-9 border-none rounded-md text-white text-lg font-normal py-7 px-4 leading-[0]`}>Donate $ {foundedData.price}</button>
      </div>
      <div className="relative mt-[-80px]">
        <h1 className="text-[40px] font-bold">{foundedData.title}</h1>
        <p className="text-[15px] mt-6 font-normal text-gray-700">{foundedData.description}</p>
      </div>
    </div>
  );
};

export default Page;
