const Stripe = require('./../stripe');


const createCheckout = async (req, res) => {
  const domainURL = process.env.DOMAIN_URL;
  const { line_items, customer_email } = req.body;

  if (!line_items || !customer_email) {
    return res.status(400).json({
      error: 'Missing required sessions parameters.'
    });
  };

  try {
    let session = await Stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      success_url: `${domainURL}/success`,
      cancel_url: `${domainURL}/cancel`,
      line_items,
      customer_email,
      shipping_address_collection: {
        allowed_countries: ['US']
      }
    });

    res.status(200).json({ sessionId: session.id });

  } catch (error) {
    console.log('Stripe Checkout Error:', error);

    res.status(400).json({ error: 'An error occured- unable to create session.'})
  };
};


module.exports = createCheckout;