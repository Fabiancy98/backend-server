const express = require('express');
const app = express();
const port = 8000 || process.env.port;
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")

dotenv.config();


mongoose.
    connect(process.env.MONGO_URL)
    .then(() => console.log("DBconnection Successful"))
    .catch((err) => {console.log(err);
    });

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);


app.listen(port,()=>{
    console.log('Backend server running on '+port)
});