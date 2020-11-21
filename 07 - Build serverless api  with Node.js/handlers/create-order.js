const AWS = require('aws-sdk');
const uuid = require('uuid');

const docClient = new AWS.DynamoDB.DocumentClient();

function createOrder(request) {
  if (!request || !request.pizza || !request.address)
    throw new Error('To order pizza please provide pizza type and address where pizza should be delivered')

  return docClient.put({
    TableName: 'pizza-orders',
    Item: {
      orderId: uuid(),
      pizza: request.pizza,
      address: request.address,
      status: 'pending'
    }
  }).promise()
    .then((res) => {
      console.log('Order is created!', res)
      return res
    })
    .catch((createError) => {
      console.log(`Oops, order is not created :(`, createError)
      throw createError
    })
}

module.exports = createOrder;