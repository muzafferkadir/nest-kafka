import request from '../request';
import { ListRequestBody, ResponseBody } from './request.types';

const sendList = (data: ListRequestBody) => request.post<ResponseBody>('/v1/messages', data);

export = { sendList };
