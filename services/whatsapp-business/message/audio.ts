import { AudioByUrlRequestBody } from './request.types';
import Message from './message';

class AudioMessage extends Message {
  body: AudioByUrlRequestBody;
  to: string;

  constructor(to: string, link: string, name?: string) {
    super(to);

    const body: AudioByUrlRequestBody = {
      to: to,
      type: 'audio',
      recipient_type: 'individual',
      audio: { provider: { name: name }, link: link },
    };

    this.body = body;
  }
}

export default AudioMessage;
