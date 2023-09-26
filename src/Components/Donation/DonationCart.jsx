import "../Home/home components/cart.css"
import { NavLink } from 'react-router-dom';

const DonationCart = ({data}) => {
    const{price,title,category,textButton,categoryBg,cardBg,imgDon,textbg,id}=data

    return (
        <div className={`${cardBg} flex gap-6 rounded-lg`}>
            <img  src={imgDon} alt="" />
            <div className="py-6">
                <span className={`${categoryBg} ${textButton} text-sm font-normal px-2 py-1 rounded`}>{category}</span>
                <h1 className="text-2xl font-semibold my-2">{title}</h1>
                <p className={`${textButton} text-xl font-semibold`}>${price}</p>
                <NavLink to={`/donate/${id}`}><button className={`text-white ${textbg} btn text-lg font-semibold py-2 rounded-md px-4 mt-5`}>View Details</button></NavLink>
            </div>
        </div>
    );
};

export default DonationCart;