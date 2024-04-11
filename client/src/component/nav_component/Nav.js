import { Link } from "react-router-dom/cjs/react-router-dom";
import { useRef, useState } from "react";


const Nav = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

   

    return ( 
      <>
       <nav className="phone-nav">
        <div className="dropdown" onClick={toggleDropdown}>
         <i class="fa fa-bars dropdown-btn" aria-hidden="true"></i>
         {isOpen && (
        <div className="dropdown-content" onClick={closeDropdown}>
          <Link to={"/"}>Home</Link>
          <Link to={"/allproducts"}>Products</Link>
          <Link to={"/cart"}>Shopping Cart</Link>
          <Link to="#">Contact</Link>
          <Link to="#">About</Link>
          <Link to="#">Policy</Link>
        </div> )}
         </div>
         <div className="right-bar">
         <i class="fa fa-search" aria-hidden="true"></i>
         <i class="fa fa-heart-o" aria-hidden="true"></i>
        <Link to ={"/cart"}><i class="fa fa-shopping-bag" aria-hidden="true"></i></Link>
        </div>
       </nav>
        <nav className="menu-cont">
            <ul>
            <Link to ={"/cart"}><li><img src="/images/shopping.png" width="40px" height="35px" alt="cart" className="shop-cart"/></li></Link>
             <Link to ={"/products"}><li>Policy</li></Link>
              <Link to ={"/allproducts"}><li>Products</li></Link>
              <Link to ={"/products"}><li>Contact</li></Link>
              <Link to ={"/products"}><li>About</li></Link>
              <Link to ={"/"}><li>Home</li> </Link>
              <img src="../images/logo.png" alt="logo" width="125px" className="nav-logo"/>   
            </ul>
        </nav>
        </>
     );
}
 
export default Nav;