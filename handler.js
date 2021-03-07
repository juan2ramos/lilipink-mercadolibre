'use strict';

const cancelOrders = require('./src/');
const cancel = require('./src/cancel');

module.exports.main = async (context) => {

  const timing = { createdHours: 4800, endHours: 53 }

  const ordersCancel = await cancelOrders(timing)
  console.log(ordersCancel)

  const cancelR = await cancel(ordersCancel)
  console.log(cancelR);


  return {
    body: { message: 'Running again' }
  };

}


module.exports.main();
