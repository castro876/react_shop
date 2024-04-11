const Form = () => {
    return ( 
        <>
        <div className="col-2" style= {{marginTop: '100px'}}>
        <div className="form-container">
            <div className="form-btn">
                <span onclick="register()">REGISTER</span>
                <hr id="Indicator-Two" />
            </div>

            <form id="RegForm" action="/products/checkout" method="post">
                <input type="text" placeholder="Username" name="username" />
                <input type="email" placeholder="Email" name="email" />
                <input type="password" placeholder="Password" name="password" />
                <button className="btn check-btn">Checkout &#8594;</button>
                 <p>ErrorMessage</p>
            </form>    
        </div>
    </div>
    
    <div className="col-2" style={{marginTop: '100px'}}>
        <div className="form-container">
            <div className="form-btn">
                <span onclick="register()">LOGIN</span>
                <hr id="Indicator-Two" />
            </div>

            <form id="RegForm" action="/products/cashout" method="post">
                <input type="email" placeholder="Email" name="email" />
                <input type="password" placeholder="Password" name="password" />
                <button className="btn checkout-btn">Checkout &#8594;</button>
                 <p>ErrorMessage</p>
            </form>    
        </div>
    </div><br/><br/>
    </>
     );
}
 
export default Form;