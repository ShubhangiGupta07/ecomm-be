require("dotenv").config();
const express = require ("express");
const mongoose = require("mongoose");
const dbConfig = require("./dbConfig/dbConfig");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 4000;
console.log(process.env.SECRET);
mongoose
.connect(dbConfig.dbUrl)
.then((response) => console.log("connected to the database"))
.catch((err) => console.log("failed to connect to the database", err));
app.use(cors());
app.use(bodyParser.json());

app.get("/health", (req,res) => {
    res.json({ status: 200, message: "application running fine" });
});

//app.use(express.json());

require("./route/user.route")(app);
require("./route/authentication.route")(app);

app.listen(PORT, () => {
    console.log(`server is running on PORT: ${PORT}`);
});