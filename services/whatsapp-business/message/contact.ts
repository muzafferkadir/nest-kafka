import request from '../request';
import { ContactRequestBody, ResponseBody } from './request.types';

const sendContact = (data: ContactRequestBody) => request.post<ResponseBody>('/v1/messages', data);

export = { sendContact };
