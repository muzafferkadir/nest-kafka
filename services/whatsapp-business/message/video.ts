import request from '../request';
import { VideoByIdRequestBody, ResponseBody, VideoByUrlRequestBody } from './request.types';

const sendVideoById = (data: VideoByIdRequestBody) => request.post<ResponseBody>('/v1/messages', data);
const sendVideoByUrl = (data: VideoByUrlRequestBody) => request.post<ResponseBody>('/v1/messages', data);

export = {
  sendVideoById,
  sendVideoByUrl,
};
