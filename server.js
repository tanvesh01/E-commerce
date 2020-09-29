var express = require("express");
var mongoose = require("mongoose");
const path = require("path");
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
        "mongodb+srv://retro:dedsec@ecom.ycg4m.gcp.mongodb.net/Ecom?retryWrites=true&w=majority"
    )
    .then(() => console.log("Connected to DataBase"))
    .catch((err) => console.log("error: ", err.message));

//* Use Routes
// app.use("/api/items", items);
app.use("/api/users", Users);
app.use("/api/auth", require("./routes/api/Auth"));
app.use("/api/Product", require("./routes/Products/Products"));
app.use("/api/orders", require("./routes/api/Orders"));

if (process.env.NODE_ENV == "production") {
    // set static folder
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port}`);
