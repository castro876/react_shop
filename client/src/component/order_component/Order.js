import React, { useRef, useState } from 'react';


const Order = () => {
    const buttonRef = useRef()
   

    const handleClick = () => {
      // Add 'animate' class to the button
      buttonRef.current.classList.add('animate');
  
      // Remove 'animate' class after 10 seconds
      setTimeout(() => {
        buttonRef.current.classList.remove('animate');
      }, 10000);
    };

    setTimeout(() => {
        buttonRef.current.click()
        buttonRef.current.disabled = true;
      }, 100);
    
      const [isProcess, setisProcess] = useState()
      setTimeout(() => {
        setisProcess('Order Placed')
      }, 9000);
    

      const addto = () => {
        window.location.href = 'http://127.0.0.1:4000/add_user'
      }


    return (  
<>
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
 <button onClick={addto}>Next</button>
        </>
    );
}
 
export default Order;

































