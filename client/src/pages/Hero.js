import Brands from "../component/hero_component/Brands";
import Categories from "../component/hero_component/Categories";
import Featured from "../component/hero_component/Featured";
import Footer from "../component/hero_component/Footer";
import Offer from "../component/hero_component/Offer";
import Testimonial from "../component/hero_component/Testimonial";
import { Link } from "react-router-dom/cjs/react-router-dom";


const Home = () => {
    return ( 
        <>
        <div className="header">
        <div className="container">
            <div className="row">
                <div className="col-2">
                    
                    <h1 style={{color:'#ff523b'}} >Give Your Workout <br /> A New Style!</h1>
                    <p>Success isn't always about greatness. It;s about consistency. Consistent <br /> hard work gains
                        success. Greatness will come.</p>
                        <Link to ={"/allproducts"} className='btn'>Explore Now &#8594;</Link>
                </div>
                <div className="col-2">
                    <img src="/images/home_pic2.png" className="hero-img"/>
                </div>
            </div>
        </div>
    </div>
           {/* Categories Section */}
           <Categories/>
           {/* Featured Section */}
           <Featured/>
           {/* Offer Section */}
           <Offer/>
           {/* Testimonial Section */}
           <Testimonial/>
           {/* Brands Section */}
           <Brands/>
           {/* Footer Section */}
           <Footer/>
    </>         
 
     )
}
 
export default Home;