import request from '../request';
import {
  TemplateTextRequestBody,
  ResponseBody,
  TemplateMediaRequestBody,
  TemplateCallToActionRequestBody,
  TemplateQuickReplyRequestBody,
} from './request.types';

const sendTemplateText = (data: TemplateTextRequestBody) => request.post<ResponseBody>('/v1/messages', data);
const sendTemplateMedia = (data: TemplateMediaRequestBody) => request.post<ResponseBody>('/v1/messages', data);
const sendTemplateCallToAction = (data: TemplateCallToActionRequestBody) =>
  request.post<ResponseBody>('/v1/messages', data);
const sendTemplateQuickReply = (data: TemplateQuickReplyRequestBody) =>
  request.post<ResponseBody>('/v1/messages', data);

export = { sendTemplateText, sendTemplateMedia, sendTemplateCallToAction, sendTemplateQuickReply };
