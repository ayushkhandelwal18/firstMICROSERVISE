const amqp = require('amqplib');

let channel;

async function connectRabbitMQWithRetry(retries = 5, delay = 3000) {
  while (retries) {
    try {
      const connection = await amqp.connect('amqp://rabbitmq');
      channel = await connection.createChannel();
      await channel.assertQueue('taskQueue');
      console.log('Notification Service connected to RabbitMQ');
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

async function start() {
  const channel = await connectRabbitMQWithRetry();
  channel.consume('taskQueue', (msg) => {
    const taskdata = JSON.parse(msg.content.toString());
    console.log('Notification: New Task :', taskdata.title);
    console.log('Notification: Full Task:', taskdata);
    channel.ack(msg);
  });
}

start();
