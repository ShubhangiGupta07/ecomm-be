const express = require("express");
const userController = require("../app/controller/userController");


module.exports = (app) => {
    //const router = express.Router();
    app.get("/users", userController.getUsers);
    app.post("/createUser", userController.postUsers);
    app.put("/updateUser/:id", userController.putUsers);
    app.patch("/updateUserByKey/:id", userController.patchUsers);
    app.delete("/user/:id", userController.deleteUsers);
}