const express = require("express");
const router = express.Router();
const brainTreeController = require("../controller/braintree");
const app = express();

// Enable CORS for all routes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://main.d1ziuvgl1oep8g.amplifyapp.com');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
router.post("/braintree/get-token", brainTreeController.ganerateToken);
router.post("/braintree/payment", brainTreeController.paymentProcess);

module.exports = router;