const express = require("express");
const morgan = require("morgan");
const cors = require('cors');
const bodyparser = require("body-parser");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const productRouter=require('./routes/products')
const path = require('path');
dotenv.config();

const app = express();
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))
app.use(cors())
app.use(morgan("dev"));

// app.use(express.static('./client/dist/client'));
// app.get('/*', function (request, response) {
//     response.sendFile(path.join(__dirname, '/client/dist/client/index.html'));
// });
//routes
app.use('/api/products',productRouter)
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`App listening on port ${port} and on http://127.0.0.1:${port}`);
});