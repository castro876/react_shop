import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa"
import { IconContext } from "react-icons"
import { useEffect, useState } from "react"
 


const Featured = () => {
  
    const [prodData, setproData] = useState(null)

    useEffect(() => {
         const func = async () => {
                const response = await fetch('http://localhost:4000/all_product')
                const data = await response.json()
                setproData(data)
         }
           
         func()
    },[])
 
  

    return ( 
        <div className="small-container">
        
        <h2 className="title">Featured Products</h2>
   
        <div className="row">
            <div className="col-4">
              <img src={`/images/${prodData && prodData[0].image}`} />
                <h4>{prodData && prodData[0].title}</h4>
                
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>
           
                <p>${prodData && prodData[0].price}</p>
                <Link to={`/singleproduct/${prodData && prodData[0]._id}`}><button className="buy-btn">Buy now &#8594;</button></Link>
            </div>
            <div className="col-4">
                <img src={`/images/${prodData && prodData[1].image}`} />
                <h4>{prodData && prodData[1].title}</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>
                <p>${prodData && prodData[1].price}</p>
                <Link to={`/singleproduct/${prodData && prodData[1]._id}`}><button className="buy-btn">Buy now &#8594;</button></Link>            </div>
            <div className="col-4">
              <img src={`/images/${prodData && prodData[2].image}`}  />
                <h4>{prodData && prodData[2].title}</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>
                <p>${prodData && prodData[2].price}</p>
                <Link to={`/singleproduct/${prodData && prodData[2]._id}`}><button className="buy-btn">Buy now &#8594;</button></Link>            </div>
            <div className="col-4">
              <img src={`/images/${prodData && prodData[3].image}`} />
                <h4>{prodData && prodData[3].title}</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>
                <p>${prodData && prodData[3].price}</p>
                <Link to={`/singleproduct/${prodData && prodData[3]._id}`}><button className="buy-btn">Buy now &#8594;</button></Link>            </div>
        </div>
        <h2 className="title">Latest Products</h2>
        <div className="row">
            <div className="col-4">
              <img src={`/images/${prodData && prodData[4].image}`} />
                <h4>{prodData && prodData[4].title}</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>
                <p>${prodData && prodData[4].price}</p>
                <Link to={`/singleproduct/${prodData && prodData[4]._id}`}><button className="buy-btn">Buy now &#8594;</button></Link>            </div>
            <div className="col-4">
             <img src={`/images/${prodData && prodData[5].image}`} />
                <h4>{prodData && prodData[5].title}</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>
                <p>${prodData && prodData[5].price}</p>
                <Link to={`/singleproduct/${prodData && prodData[5]._id}`}><button className="buy-btn">Buy now &#8594;</button></Link>            </div>
            <div className="col-4">
              <img src={`/images/${prodData && prodData[6].image}`} />
                <h4>{prodData && prodData[6].title}</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>
                <p>${prodData && prodData[6].price}</p>
                <Link to={`/singleproduct/${prodData && prodData[6]._id}`}><button className="buy-btn">Buy now &#8594;</button></Link>            </div>
            <div className="col-4">
                <img src={`/images/${prodData && prodData[7].image}`}  />
                <h4>{prodData && prodData[7].title}</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>
                <p>${prodData && prodData[7].price}</p>
                <Link to={`/singleproduct/${prodData && prodData[7]._id}`}><button className="buy-btn">Buy now &#8594;</button></Link>            </div>
        </div>
        <div className="row">
            <div className="col-4">
                <img src={`/images/${prodData && prodData[8].image}`}  />
                <h4>{prodData && prodData[8].title}</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>
                <p>${prodData && prodData[8].price}</p>
                <Link to={`/singleproduct/${prodData && prodData[8]._id}`}><button className="buy-btn">Buy now &#8594;</button></Link>            </div>
            <div className="col-4">
                <img src={`/images/${prodData && prodData[9].image}`}  />
                <h4>{prodData && prodData[9].title}</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>
                <p>${prodData && prodData[9].price}</p>
                <Link to={`/singleproduct/${prodData && prodData[9]._id}`}><button className="buy-btn">Buy now &#8594;</button></Link>            </div>
            <div className="col-4">
              <img src={`/images/${prodData && prodData[10].image}`}  />
                <h4>{prodData && prodData[10].title}</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>
                <p>${prodData && prodData[10].price}</p>
                <Link to={`/singleproduct/${prodData && prodData[10]._id}`}><button className="buy-btn">Buy now &#8594;</button></Link>            </div>
            <div className="col-4">
             <img src={`/images/${prodData && prodData[11].image}`}  />
                <h4>{prodData && prodData[11].title}</h4>
                <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o"></i>
                </div>
                <p>${prodData && prodData[11].price}</p>
                <Link to={`/singleproduct/${prodData && prodData[11]._id}`}><button className="buy-btn">Buy now &#8594;</button></Link>            </div>
        </div>
    </div>
     );
}
 
export default Featured;