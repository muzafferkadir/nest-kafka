import { TextRequestBody } from './request.types';
import Message from './message';

class TextMessage extends Message {
  body: TextRequestBody;
  to: string;

  constructor(to: string, text: string) {
    super(to);

    const body: TextRequestBody = {
      to: to,
      type: 'text',
      text: { body: text },
    };

    this.body = body;
  }
}

export default TextMessage;
