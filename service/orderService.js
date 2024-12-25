const RazorPay = require("razorpay");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  createOrderService: async (reqBody) => {
    const instance = new RazorPay({
      key_id: process.env.KEY_ID,
      key_secret: process.env.KEY_SECRET,
    });

    const orderId = uuidv4();
    const data = await instance.orders.create({
      amount: reqBody.amount,
      currency: "INR",
      receipt: orderId,
      payment_capture: true,
    });
  },
  verifyOrderService: (reqBody)=>{
    
  }
};
