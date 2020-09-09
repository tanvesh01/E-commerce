var express = require("express");
var mongoose = require("mongoose");
const app = express();
app.use(express.json());
const items = require("./routes/api/items"); //* all routes are here
const Users = require("./routes/api/Users"); //* all routes are here
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
mongoose
    .connect(
        process.env.MONGODB_URI
    )
    .then(() => console.log("Connected to DataBase"))
    .catch((err) => console.log("error: ", err.message));

//* Use Routes
// app.use("/api/items", items);
app.use("/api/users", Users);
app.use("/api/auth", require("./routes/api/Auth"));
app.use("/api/Product", require("./routes/Products/Products"));
app.use("/api/orders", require("./routes/api/Orders"));
const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
