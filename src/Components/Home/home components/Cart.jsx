import { useNavigate } from "react-router-dom";
import "./cart.css"
const Cart = ({ data }) => {
  const { img, category, title, textButton, cardBg, categoryBg,id } = data;





  // onclick fucntion handle.
  const nevigate=useNavigate()
  const onclickHandle=()=>{
  
    nevigate(`/donate/${id}`)
  }
  return (
    <div onClick={onclickHandle} className={`card card-compact saifulBg shadow-md ${cardBg} cursor-pointer`}>
      <figure>
        <img className="w-full h-[237px] object-cover" src={img} alt="Shoes" />
      </figure>
      <div className="my-4 ml-4 ">
        <span
          className={`${categoryBg} rounded ${textButton} text-sm font-medium px-3 py-1 inline-block`}
        >
          {category}
        </span>
        <h2 className={`card-title ${textButton}`}>{title}</h2>
      </div>
    </div>
  );
};

export default Cart;
