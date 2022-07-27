import request from '../request';
import { ButtonRequestBody, ResponseBody } from './request.types';

const sendButton = (data: ButtonRequestBody) => request.post<ResponseBody>('/v1/messages', data);

export = { sendButton };
