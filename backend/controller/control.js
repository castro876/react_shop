const Mod = require('../Models/db_schema')
const Usrmod = require('../Models/db_user_schema')
const paypal = require('paypal-rest-sdk')
const bcrypt = require('bcrypt')

//Paypal token
paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'AeHrIGOJl5eyQzvwwENwdfQyplb_cJcB4szyEM7-7L_J16OzPX82A7JPahrStRTmrPWcphC9oCoIKj72',
    'client_secret': 'EHipMroRm2CnVkbWbQUAvV16b0IxNlyvP1MScBS4rhQdfokmECRJ39RXXCc5pzLA3ME50M3lBTNUrfhU'
  })

//Get request user page endpoint => /add_user
const createUserPage = (req, res) => {
    res.render('create')
}

//Post request user page endpoint => /add_user
const createUser = async (req, res) => {
    try {
        const usrData = await Mod.create(req.body)
        res.json(usrData)
       console.log('Added to database')
      return
   } catch (error) {
       console.log(error)
   }
  
}

//Get request all user endpoint => /all_user
const allProduct = async (req, res) => {
    try {
        const productInfo = await Mod.find({})
        console.log(productInfo)
        res.status(200).json(productInfo)
    } catch (error) {
        console.log('no product found')
    }
       
}

//Get request single user endpoint => /all_user
const singleUser = async (req, res) => {
    
        console.log(req.body.id)
        const usr = await Mod.findById(req.body.id)
        res.json({data:usr})
       
}


//Post request single user endpoint => /all_user
const checoutkUser = async (req, res) => {
    
    const usrExist = await Usrmod.findOne({ email: req.body.email });

        const usrName = req.body.username;
        const usrEmail = req.body.email;
        const usrPassword = req.body.password;
        let errorMessage = '';
        const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        const regexSymbol = /<|>|\s/g;
        
        
  if(usrExist) {
       const validPass = await bcrypt.compare(req.body.password, usrExist.password);
            if(validPass) {
              res.json({ result: true });
                 }
       } else{
       
          if (!usrEmail) {
                errorMessage = "Email field cannot be empty";
                console.log(errorMessage);
                 res.json({ msg: errorMessage, result: false });
            } else if (!usrName || usrName.length < 4) {
                errorMessage = "Password must be at least 4 characters";
                console.log(errorMessage);
                 res.json({ msg: errorMessage, result: false });
            } else if (!usrPassword || usrPassword.length <= 8) {
                errorMessage = "Password must be at least 8 characters";
                console.log(errorMessage);
                 res.json({ msg: errorMessage, result: false });
            } else if (!usrEmail.match(regex)) {
                errorMessage = "Invalid email";
                console.log(errorMessage);
                 res.json({ msg: errorMessage, result: false });
            } else if (usrName.match(regexSymbol)) {
                errorMessage = "No spaces should be included";
                console.log(errorMessage);
                 res.json({ msg: errorMessage, result: false });
            } else{
                 
               try {
                 if (!usrExist) {
                    //create hash password and store it into db
                 const salt = await  bcrypt.genSalt();
                 const hash = await bcrypt.hash(req.body.password, salt);
                  
                 const user_record = await Usrmod.create({
                  username: req.body.username,
                  email: req.body.email,
                  password: hash
                 })
                 res.json({ result: true })
                 console.log('saved to database')
              } 

               } catch (error) {
                  console.log(error)
               }
         }
     }

      }
    
   

module.exports = {createUserPage, createUser, allProduct, singleUser, checoutkUser}      
        