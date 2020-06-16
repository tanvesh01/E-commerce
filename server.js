var express = require('express');
var mongoose = require('mongoose');
const app = express();
app.use(express.json());
const items = require('./routes/api/items'); //* all routes are here
const Users = require('./routes/api/Users'); //* all routes are here
mongoose.connect("mongodb://localhost/mern", { useNewUrlParser: true }, function () {
    console.log("connect");
});
//* Use Routes
app.use('/api/items', items);
app.use('/api/users', Users);
app.use('/api/auth', require("./routes/api/Auth"));
app.use('/api/shoes', require("./routes/Categories/Shoes"))
const port = 5000;

app.listen(port, () => `Server running on port ${port}`);