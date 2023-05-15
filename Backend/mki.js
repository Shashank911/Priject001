// import express from "express";

// import mongoose from "mongoose";
// import cors from "cors";


// const app = express()
// app.use(express.json())
// // app.use(express.urlencoded(true))


// app.use(cors());

// const CONNECT_URL = "mongodb+srv://cshashank899:tS4HOhTVrXFk1l0T@projectbeta.rmy45gl.mongodb.net/"
// const PORT = process.env.PORT || 9002;

// const userSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     password: String
// })

// const User = new mongoose.model("User", userSchema);

// //Routes
// app.post("/login", (req, res)=> {
//     const { email, password} = req.body
//     User.findOne({ email: email}, (err, user) => {
//         if(user){
//             if(password === user.password ) {
//                 res.send({message: "Login Successfull", user: user})
//             } else {
//                 res.send({ message: "Password didn't match"})
//             }
//         } else {
//             res.send({message: "User not registered"})
//         }
//     })
// }) 

// app.post("/register", async (req, res)=> {
//     const { name, email, password} = req.body
//     User.findOne({email: email}, (err, user) => {
//         if(user){
//             res.send({message: "User already registerd"})
//         } else {
//             const user = new User({
//                 name,
//                 email,
//                 password
//             })
//             user.save(err => {
//                 if(err) {
//                     res.send(err)
//                 } else {
//                     res.send( { message: "Successfully Registered, Please login now." })
//                 }
//             })
//         }
//     })
    
// }) 

// mongoose.connect(CONNECT_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
//   .catch((error) => console.log(error.message));
