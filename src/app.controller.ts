import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Client, ClientKafka, MessagePattern, Payload, Transport } from '@nestjs/microservices';
import whatsappBusiness from 'services/whatsapp-business';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService /* , @Inject('kafka') private readonly client: ClientKafka*/) {}

  @MessagePattern('test') // Our topic name
  getMessage(@Payload() message) {
    console.log(message.value);
    return 'Hello World';
  }

  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'kafkaSample',
        brokers: [`kafka:9092`],
      },
    },
  })
  client: ClientKafka;

  async onModuleInit() {
    this.client.subscribeToResponseOf('test');
    await this.client.connect();
  }

  @Get()
  getHello() {
    return this.client.send('test', {
      type: 'text',
      to: '<phoneNumber>',
      text: {
        body: 'hello',
        replied_message: false,
        is_group: false,
      },
    }); // args - topic, message
  }

  @Get('kafka-test')
  testKafka() {
    //return this.client.emit('medium.rocks', { foo: 'bar' });
  }
}
