import express from "express";
import mongoose from "mongoose";
import cors from "cors";




const app = express();

app.use(express.json());
app.use(cors());

const mongoURI = "mongodb+srv://cshashank899:4PqmxLqHApmJzdFn@betaproject.3zayq5h.mongodb.net/?retryWrites=true&w=majority"



mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB!');
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const contactSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  email: String,
  phoneNumber: String,
  company : String,
  title : String,
  employees : String,
  message: String,
});



// const createOrGetclientSchema = new mongoose.Schema({
//    _id: String,
//   _type: String,
//   userName : String,
//   image: String});



const Contact = mongoose.model('Contact', contactSchema);


const User = mongoose.model('User', userSchema);


// const CreateOrGetclient = mongoose.model('CreateOrGetclient', createOrGetclientSchema)

app.get('/api/data', async (req, res) => {
  const data = await User.find();
  res.json(data);
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email: email });
  
      if (user) {
        if (password === user.password) {
          res.send({ message: "Login Successfull", user: user });
        } else {
          res.send({ message: "Password didn't match" });
        }
      } else {
        res.send({ message: "User not registered" });
      }
    } catch (err) {
      console.log(err);
      res.send({ message: "Error occurred" });
    }
  });
  
  app.post("/register", async (req, res)=> {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email: email });
        if(existingUser) {
            res.send({ message: "User already registered" });
        } else {
            const user = new User({
                name,
                email,
                password
            });
            await user.save();
            res.send({ message: "Successfully Registered, Please login now." });
        }
    } catch (err) {
        res.send(err);
    }
});

// change route to /contact
app.post("/contact", async (req, res)=> {
  const { name, lastName, email, phoneNumber, company, title, employees, message } = req.body;
  try {
      const existingContact = await Contact.findOne({ email: email, phoneNumber: phoneNumber });
      if(existingContact) {
          res.send({ message: "Contact information already registered" });
      } else {
          const contact = new Contact({
              name,
              lastName,
              email,
              phoneNumber,
              company,
              title,
              employees,
              message,
          });
          await contact.save();
          res.send({ message: "Contact information saved successfully." });
      }
  } catch (err) {
      res.send(err);
  }
});



// app.post("/createOrGetclient", async (req, res)=> {
//   const client = req.body;
//   try {
//     const result = await CreateOrGetclient.create(client);
//     res.status(200).json('Login Success');
//   } catch (err) {
//     console.log(err);
//     res.status(500).json('Internal Server Error');
//   }
// });



app.listen(9002, () => {
  console.log('Server is listening on port 9002');
});


