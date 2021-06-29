require('dotenv').config({path: __dirname + '/../../.env'});
const Stripe = require('stripe')(process.env.STRIPE_SEC_KEY);


module.exports = Stripe;