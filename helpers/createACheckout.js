import axios from 'axios';


const createACheckout = async (params) => {
  const { data } = await axios({
    method: 'post',
    url: `${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/createCheckout`,
    data: params,
  });

  const { sessionId } = data;
  
  return sessionId;
};


module.exports = createACheckout;