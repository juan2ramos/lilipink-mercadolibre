const fetch = require('node-fetch');
const token = 'APP_USR-2036510705554698-083110-3e9b14efd45e4904bfd600409b9a53cc__LB_LA__-269263086';
const moment = require('moment')

const cancelOrders = async (timing) => {
  
  return await getOrdersId(buildURL('pending', timing));
}

const makeCancelOrders = async (ids) => {
  return ids.length;
}

const getOrdersId = async (url) => {
  const response = await fetch(url);
  const orders = await response.json();
  
  return orders.results.map( order => order.id );
}

const buildURL = (status, {createdHours, endHours }) => {
  
  const dateCreated = moment().subtract(createdHours, 'hours').toISOString();
  const dateEnd = moment().subtract(endHours, 'hours').toISOString();

  console.log(dateCreated)
  console.log(dateEnd)
  return `https://api.mercadopago.com/v1/payments/search?access_token=${token}&limit=1000&range=date_created&begin_date=${dateCreated}&end_date=${dateEnd}&status=${status}`;
}

module.exports = cancelOrders;
