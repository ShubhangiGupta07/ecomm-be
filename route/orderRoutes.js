const orderController = require("../app/controller/userController");

module.exports = (app) => {
    app.get("/create-order", orderController.getUsers);
    app.post("verify/payment-status", orderController.verifyPaymentSucess);
}