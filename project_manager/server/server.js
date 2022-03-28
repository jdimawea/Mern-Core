// import all dependencies
const express = require('express');
const cors = require('cors');
const app = express();

// config mongoose (uncomment after setting up mongoose.config)
require("./configs/mongoose.config")

// express config for post
app.use(cors())
app.use(express.json(), express.urlencoded({extended: true}));

// uncomment after setting up routes
require("./routes/product.routes")(app);

// listen to the port
app.listen(8000, () => console.log("The server is all fired up on port 8000"));