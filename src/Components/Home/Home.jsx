import { useLoaderData } from "react-router-dom";
import Banner from "./home components/Banner";


const Home = () => {
    let data=useLoaderData()

    return (
        <div>
            <Banner data={data}></Banner>
            
        </div>
    );
};

export default Home;