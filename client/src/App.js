import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import Cart from './pages/Cart';
import Home from "./pages/Hero"
import Items from './pages/Items';
import Single from './pages/Single';
import Truck from './pages/Truck';
import Nav from './component/nav_component/Nav'

function App() {

  const initialOptions = {
    "client-id": "AeHrIGOJl5eyQzvwwENwdfQyplb_cJcB4szyEM7-7L_J16OzPX82A7JPahrStRTmrPWcphC9oCoIKj72",
    currency: "USD",
    intent: "capture",
  };


  return (
    
   <Router>
    <>
    <Nav/>
    <Switch>
        <Route exact path = "/" >
         <Home/>
        </Route>
        <Route path = "/singleproduct/:id" >
         <Single/>
        </Route>
        <Route path = "/allproducts" >
         <Items/>
        </Route>
        <Route path = "/cart" >
          <PayPalScriptProvider options={initialOptions} >
           <Cart/>
          </PayPalScriptProvider>
        </Route>
        <Route path = "/complete" >
         <Truck/>
        </Route>
        <Route path = "*" >
         <h1>Opps! Page Not Found</h1>
        </Route>
       </Switch>
    </>
   </Router>
  )
}

export default App;
