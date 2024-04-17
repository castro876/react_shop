import { useState, useEffect, useRef } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { FaDivide } from "react-icons/fa";
import Truck from "../../pages/Truck";



const CartDetails = () => {
  const [cartStorage, setCartStorage] = useState([]);
  const [itemExist, setitemExist] = useState(false)

  useEffect(() => {
    // Load data from sessionStorage on component mount
    const cartData = JSON.parse(sessionStorage.getItem("store") || "[]");
    setCartStorage(cartData);

  }, []);

   

  // Function to remove an item
  const deleteHandler = (index) => {
    // Create a copy of the cartStorage array
    const updatedCart = [...cartStorage];
    // Remove the item at the specified index
    updatedCart.splice(index, 1);
    // Update sessionStorage
    sessionStorage.setItem("store", JSON.stringify(updatedCart));
    // Update state to reflect the removal
    setCartStorage(updatedCart)
    //Refresh page
    window.location.reload();
  };

  // Calculate subtotal
  const subtotal = cartStorage.reduce((acc, item) => {
    const price = parseFloat( item.price);
    const quantity = parseInt(item.quantity);

    if (!isNaN(price) && !isNaN(quantity)) {
      return acc + (price * quantity);
    } else {
      return acc;
    }
  }, 0);

  // Define shipping cost
  const shippingCost = 0; // Assuming shipping is free

  // Calculate total
  const total = subtotal + shippingCost;


  //Submit form to backend 
  const [username, setUsername] = useState(null) 
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null) 
  
  const [isVerified, setisVerified] = useState(false)
  const [isError, setisError] = useState('')
  const [isPlaced, setisPlaced] = useState(false)


    const fetchInfo = async (e) => {
      e.preventDefault();
      
      // Validate user input
      const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      const regexSymbol = /<|>|\s/g;
  
      if (!email) {
          setisError("Email field cannot be empty");
          setisVerified(false);
      } else if (!username || username.length < 4) {
          setisError("Username must be at least 4 characters");
          setisVerified(false);
      } else if (!password || password.length <= 8) {
          setisError("Password must be at least 8 characters");
          setisVerified(false);
      } else if (!email.match(regex)) {
          setisError("Invalid email");
          setisVerified(false);
      } else if (username.match(regexSymbol)) {
          setisError("No spaces should be included in username");
          setisVerified(false);
      } else {
          setisError(""); // Clear error message if all validation passes
          setisVerified(true); // Set verification status to true if all validation passes
  
          // Proceed with fetching data
          const fetchData = {
              username: username,
              email: email,
              password: password
          };
  
          const endpoint = `https://react-shop-4.onrender.com/checkout`;
  
          const options = {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(fetchData)
          };
  
          try {
              const response = await fetch(endpoint, options);
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              const data = await response.json();
                console.log(data.result);
              // Handle successful response
               setUsername('')
               setPassword('')
               setEmail('')

          } catch (error) {
              console.error('Error:', error);
              // Handle error
          }
      }
  };
  
       
      
        {/** PayPal SDK Here --> */}
        const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
        const [currency, setCurrency] = useState(options.currency);
    
        const onCurrencyChange = ({ target: { value } }) => {
            setCurrency(value);
            dispatch({
                type: "resetOptions",
                value: {
                    ...options,
                    currency: value,
                },
            });
        }
    
        
        const onCreateOrder = (data, actions) => {
          return actions.order.create({
              purchase_units: [
                  {
                      amount: {
                          currency_code: "USD",
                          value: total.toFixed(2),
                          breakdown: {
                              item_total: { currency_code: "USD", value: subtotal.toFixed(2) },
                              shipping: { currency_code: "USD", value: shippingCost.toFixed(2) },
                              handling: { currency_code: "USD", value: "0.00" },
                              tax_total: { currency_code: "USD", value: "0.00" },
                              shipping_discount: { currency_code: "USD", value: "0.00" }
                          }
                      },
                      items: cartStorage.map(item => ({
                          name: item.title,
                          unit_amount: { currency_code: "USD", value: item.price },
                          quantity: item.quantity,
                          description: item.description,
                          category: "PHYSICAL_GOODS"
                      }))
                  }
              ]
          });
      };
      
    
        const onApproveOrder = (data,actions) => {
            return actions.order.capture().then((details) => {
                const name = details.payer.name.given_name;
                setisPlaced(true)
                setTimeout(() => {
                  window.location.href = '/'
                }, 10000);
                
                {/*console.log(details.purchase_units[0])*/}
            });
        }

             {/**Button styles */}

             const mystyle = {
              color: "gold",
              layout: "vertical",
            }

      const overlayHandler = () => {
        setisVerified(false)
      }
      

     //Over effect javascript code
   
      const buttonRef = useRef(null)
     
  
      const handleClick = () => {
        // Add 'animate' class to the button
        buttonRef.current.classList.add('animate');
    
        // Remove 'animate' class after 10 seconds
        setTimeout(() => {
          buttonRef.current.classList.remove('animate');
        }, 10000);

      };
        

        const [isProcess, setisProcess] = useState()
        setTimeout(() => {
          setisProcess('Order Placed')
        }, 9000);
       
        setTimeout(() => {
          if (buttonRef.current) {
            // Trigger the click event programmatically
            buttonRef.current.click();
          }
        }, 100);
        
    

  return (
    
    <div className="small-container cart-page">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {cartStorage.map((item, index) => (
            <tr key={item.id}>
              <td>
                <div className="cart-info">
                  <img src={item.image} alt={item.title} />
                  <div>
                    <p>{item.title}</p>
                    <small>${item.price}</small>
                  </div>
                </div>
              </td>
              <td>
                <p>{item.size}</p>
              </td>
              <td>
                <p>{item.quantity}</p>
              </td>
              <td>${parseFloat(item.price).toFixed(2)}</td>
              <td>
                <a
                  href="#"
                  className="remove-item"
                  onClick={() => deleteHandler(index)}
                >
                  <i class="fa fa-trash-o" aria-hidden="true"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="total-price">
        <table>
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td id="subtotal">${subtotal.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>{ shippingCost <= 0 ? 'FREE' : '$' + shippingCost.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td id="total">${total.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>

       { !isVerified  && cartStorage.length && !isPlaced> 0 ? (<div className="col-2" style= {{marginTop: '0px'}}>
         <div className="form-container">
            <div className="form-btn">
                <span onclick="register()">REGISTER</span>
                <hr id="Indicator-Two" />
            </div>

            <form id="RegForm">
                <input type="text" placeholder="Username" name="username" onChange={(e) => setUsername(e.target.value)}/>
                <input type="email" placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" name="password"  onChange={(e) => setPassword(e.target.value)}/>
                <button className="btn check-btn" onClick={ (e) => {fetchInfo(e)}}>Checkout &#8594;</button>
                <p>{isError}</p>
            </form>    
        </div>
    </div>) : <></>}
      
     {/*Order overlay effect*/}

       {isPlaced ? (
            <div className="overlay" onClick={overlayHandler} style={{ paddingTop: '0px'}}>          
    <div className="html">
     <div className="body">    
     <button className="order" ref={buttonRef}
      onClick={handleClick} ><span className="default">{isProcess}</span><span className="success">Order Placed<svg viewbox="0 0 12 10">
            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
        </svg></span>
    <div className="box"></div>
    <div className="truck">
        <div className="back"></div>
        <div className="front">
            <div className="window"></div>
        </div>
        <div className="light top"></div>
        <div className="light bottom"></div>
    </div>
    <div className="lines"></div>
    </button>
   </div>
 </div>
 </div>
 ) : <></>}

         
          {!isVerified ? <></> : (
            <div className="overlay" onClick={overlayHandler}>
                <div className="button-container">
                  <h1>Verified &#10003;</h1>
                    <PayPalButtons 
                        style={mystyle}
                        createOrder={(data, actions) => onCreateOrder(data, actions)}
                        onApprove={(data, actions) => onApproveOrder(data, actions)}
                    />
                    <select value={currency} onChange={onCurrencyChange}>
                            <option value="USD">💵 USD</option>
                            <option value="EUR">💶 Euro</option>
                    </select>
                </div>
                </div>
            )}

    </div>
  );
};

export default CartDetails;
