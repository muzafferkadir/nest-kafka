const { Kafka, Partitioners } = require('kafkajs');

const clientId = 'admin';

const kafka = new Kafka({
  clientId,
  brokers: [`kafka:9092`],
});

async function main(params) {
  const admin = kafka.admin();

  // remember to connect and disconnect when you are done
  await admin.connect();
  // await admin.createPartitions({ topicPartitions: [{ topic: 'test' }] })
  console.log(await admin.listGroups());
  console.log(await admin.fetchTopicOffsets('test'));
  console.log('offsets: ', JSON.stringify(await admin.fetchOffsets({ groupId: 'customer', topics: ['test'] })));
  await admin.disconnect();
}

main();
