import { Container } from "postcss";


const Cart = ({data}) => {
    const{img,category,title,textButton,cardBg,categoryBg}=data
    console.log(textButton)
    return (
        <div className={`card card-compact  shadow-md bg-[${cardBg}]`}>
        <figure><img className="w-full" src={img} alt="Shoes" /></figure>
        <div className="my-4 ml-4 ">
            <span className={`bg-[${categoryBg}] rounded text-[${textButton}] text-sm font-medium px-3 py-1 inline-block`}>{category}</span>
          <h2 className={`card-title text-[${textButton}]`}>{title}</h2>

         
        </div>
      </div>
    );
};

export default Cart;