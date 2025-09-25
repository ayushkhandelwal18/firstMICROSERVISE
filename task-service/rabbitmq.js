const amqp = require('amqplib');

let channel;

async function connectRabbitMQWithRetry(retries = 5, delay = 3000) {
  while (retries) {
    try {
      const connection = await amqp.connect('amqp://rabbitmq:5672'); // service name
      channel = await connection.createChannel();
      await channel.assertQueue('taskQueue');
      console.log('Connected to RabbitMQ');
      return channel;
    } catch (err) {
      console.error('Failed to connect to RabbitMQ', err);
      retries--;
      console.log(`Retries left: ${retries}`);
      await new Promise(res => setTimeout(res, delay));
    }
  }
  throw new Error('Could not connect to RabbitMQ');
}

function getChannel() {
  return channel;
}

module.exports = { connectRabbitMQWithRetry, getChannel };
