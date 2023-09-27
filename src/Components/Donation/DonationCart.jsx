import "../Home/home components/cart.css"
import { NavLink } from 'react-router-dom';

const DonationCart = ({data}) => {
    const{price,title,category,textButton,categoryBg,cardBg,img,textbg,id}=data

    return (
        <div className={`${cardBg} flex lg:h-auto h-36 gap-6 rounded-lg`}>
            <img className="w-[200px]  object-cover rounded-tl-xl rounded-bl-xl"  src={img} alt="" />
            <div className="lg:py-6">
                <span className={`${categoryBg} ${textButton} text-sm font-normal px-2 py-1 rounded`}>{category}</span>
                <h1 className="lg:text-2xl font-normal lg:mb-0 mb-4  lg:font-semibold lg:my-2">{title}</h1>
                <p className={`${textButton} lg:text-xl lg:block inline-block font-semibold`}>${price}</p>
                <NavLink to={`/donate/${id}`}><button className={`text-white ${textbg} btn lg:text-lg lg:font-semibold lg:py-2 rounded-md lg:px-4 lg:mt-5`}>View Details</button></NavLink>
            </div>
        </div>
    );
};

export default DonationCart;