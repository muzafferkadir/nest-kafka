import request from '../request';
import { StickerByIdRequestBody, ResponseBody, StickerByUrlRequestBody } from './request.types';

const sendStickerById = (data: StickerByIdRequestBody) => request.post<ResponseBody>('/v1/messages', data);
const sendStickerByUrl = (data: StickerByUrlRequestBody) => request.post<ResponseBody>('/v1/messages', data);

export = { sendStickerById, sendStickerByUrl };
