const fetch = require('node-fetch');
const token = 'APP_USR-2036510705554698-083110-3e9b14efd45e4904bfd600409b9a53cc__LB_LA__-269263086';

const cancelPayment = async (ordersCancel) => {
  return await Promise.all(ordersCancel.map(async order => await cancelMP(order)))
}

const cancelMP = async (id) => {
  const url = `https://api.mercadopago.com/v1/payments/${id}?access_token=${token}`;

  try {

    const response = await fetch(url, {
      method: 'put',
      body: JSON.stringify({ "status": "cancelled" })
    });
    const order = await response.json();
    return order.id;

  } catch (e) { console.log(e) }
}

module.exports = cancelPayment;