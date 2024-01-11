require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const cors = require("cors");
const database = require("./utils/database");
const contactusRoute = require('./routes/contactRoutes')

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json())

app.use(cors());
app.use('/contact', contactusRoute)

app.use((error, req, res, next) => {
    console.log(error);
    const status = false;
    const statusCode = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(statusCode).json({ status: status, message: message, data: data });
  });
  

database
  //   .sync({ force: true })
  // .sync({ alter: true })
.sync()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`server is running on port : ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));