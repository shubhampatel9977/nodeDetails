const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'], // Update with your Kafka broker(s) information
});

const producer = kafka.producer();

const produceMessage = async () => {
  await producer.connect();

  await producer.send({
    topic: 'my-topic',
    messages: [
      { value: 'Hello Kafka from Node.js!' },
    ],
  });

  await producer.disconnect();
};

produceMessage().catch(console.error);
