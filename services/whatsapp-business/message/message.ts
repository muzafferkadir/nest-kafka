import request from '../request';
import { ResponseBody } from './request.types';

abstract class Message {
  to: string;
  type?: string;
  body?: any;
  created_at: number;

  constructor(to: string) {
    this.to = to;
    this.created_at = Date.now();
  }

  async send() {
    if (!this.body) {
      throw new Error('Message body is not defined.');
    }

    return request.post<ResponseBody>('/v1/messages', this.body);
  }

  getTime(): number {
    console.log(this.created_at);
    return this.created_at;
  }
}

export default Message;
