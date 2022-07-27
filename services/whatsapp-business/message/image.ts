import request from '../request';
import { ImageByIdRequestBody, ResponseBody, ImageByUrlRequestBody } from './request.types';

const sendById = (data: ImageByIdRequestBody) => request.post<ResponseBody>('/v1/messages', data);
const sendByUrl = (data: ImageByUrlRequestBody) => request.post<ResponseBody>('/v1/messages', data);

export = {
  sendById,
  sendByUrl,
};
