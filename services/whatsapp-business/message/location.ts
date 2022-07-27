import request from '../request';
import { LocationRequestBody, ResponseBody } from './request.types';

const sendLocation = (data: LocationRequestBody) => request.post<ResponseBody>('/v1/messages', data);

export = { sendLocation };
