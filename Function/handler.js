'use strict';
  //Our Code is Poetri, create your function, and deploy easily and automatically in cloud
  //make sure your handler’s name matches the value in poetri.yml
  
  module.exports.Function = async (context) => {
  //environments, extract your environments of process.env
  //use context.env locally or when publish on the marketplace
  //const { apiKey } = context.env || process.env
  
  //inputs, extract your inputs of context.body
  const params = context.body
  
  //structure of your endpoint responsem that is a basic object of javascript
  const response = {
    statusCode: 200,
    body: {
      message: 'Go Poetri v.0.1! Your function executed successfully!',
      //you can invoque function, create the functions that you want
      params: youFunction(params)
    }
  };
  
  //return the response that you will receive at your endpoint
  return response
  }
  
  //write your function
  function youFunction (params) {
    return params
  }
  