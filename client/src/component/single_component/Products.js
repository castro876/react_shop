import { useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';


const Products = () => {
    
    let  id  = useParams()

    const [fun, setfun] = useState(null)
    const endpoint = `https://react-shop-4.onrender.com/single_product/${id}`;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(id) 
    };


    useEffect(() => {
         const func = async () => {
                const response = await fetch(endpoint, options)

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                  }

                const data = await response.json()
                setfun(data)
         }
           
         func()
    },[])
 
    console.log(fun)

    //change qunatity state
     const [Quantity, setQuantity] = useState(1)

    
    //Handler useRef
    const myElementRef = useRef();
    const imgRef = useRef();
    const imgRefA = useRef();
    const imgRefB = useRef();
    const imgRefC = useRef();

  // Function to call method on the DOM element
  const handleClick = () => {
    // Access method of the DOM element using the ref
       console.log(myElementRef.current.src = imgRef.current.src); // Call method on the DOM element
  };    
  
  const handleClickA = () => {
       console.log(myElementRef.current.src = imgRefA.current.src)
  }

  const handleClickB = () => {
    console.log(myElementRef.current.src = imgRefB.current.src)
}

const handleClickC = () => {
    console.log(myElementRef.current.src = imgRefC.current.src)
}
  
//Add To cart Logics
const [dataStorage, setDataStorage] = useState([])

const titleRef = useRef();
const priceRef = useRef();
const sizeRef = useRef();

useEffect(() => {
    // Load data from sessionStorage on component mount
    const storedData = JSON.parse(sessionStorage.getItem('store') || '[]');
    setDataStorage(storedData);
  }, []);

const addToCart = () => {
    
   const title = titleRef.current.innerText
   const price = priceRef.current.innerText.slice(1)
   const size = sizeRef.current.value
   const image = myElementRef.current.src

    try {
        const obj = { 
          title: title,
          price: price,
          quantity: Quantity,
          size: size,
          image: image,
          id: id.id

      }; // Example object
        const newData = [...dataStorage, obj]; // Create new array with the new object
        setDataStorage(newData); // Update state
        sessionStorage.setItem('store', JSON.stringify(newData)); // Update sessionStorage
        alert('Added successfully');
      } catch (error) {
        console.log('Failed to add to sessionStorage: ' + error.message);
      }
}


    return ( 
        <div className="small-container single-product">
        <div className="row">
            <div className="col-2">
                <img src={`/images/${fun && fun.data.image}`} width="100%" id="ProductImg" ref={myElementRef} />

                <div className="small-img-row">
                    <div className="small-img-col">
                        <img src={`/images/${fun && fun.data.image}`} width="100%" className="small-img" ref={imgRef} onClick={handleClick} />
                    </div>
                    <div className="small-img-col">
                        <img src={`/images/${fun && fun.data.image}`} width="100%" className="small-img" ref={imgRefA} onClick={handleClickA} />
                    </div>
                    <div className="small-img-col">
                        <img src={`/images/${fun && fun.data.image}`} width="100%" className="small-img" ref={imgRefB} onClick={handleClickB} />
                    </div>
                    <div className="small-img-col">
                        <img src={`/images/${fun && fun.data.image}`} width="100%" className="small-img" ref={imgRefC} onClick={handleClickC} />
                    </div>
                </div>

            </div>
            <div className="col-2">
                <p>Home / Cart</p>
                <h1 ref={titleRef}>{fun && fun.data.title}</h1>
                <h4 ref={priceRef}>${fun && fun.data.price}</h4>
             
                <input type="number" value={Quantity} id="quantity" onChange={(e) =>  {
                     if (e.target.value >= 1) {
                    setQuantity(parseInt(e.target.value))
                     } else{alert('quantity must be greater than 1')}
                  }}/>
                 <select id="selection" ref={sizeRef}>
                    <option>Select Size</option>
                    <option>XXL</option>
                    <option>XL</option>
                    <option>L</option>
                    <option>M</option>
                    <option>S</option>
                  </select>
                <a type="submit" className="btn" onClick={addToCart}>Add To Cart</a>
            

                <h3>Product Details <i className="fa fa-indent"></i></h3> 
                <br />
                <p>{fun && fun.data.description}</p>
            </div>
        </div>
    </div>
     );
}
 
export default Products;