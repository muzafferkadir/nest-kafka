import request from '../request';
import { DocumentByIdRequestBody, ResponseBody, DocumentByUrlRequestBody } from './request.types';

const sendDocumentById = (data: DocumentByIdRequestBody) => request.post<ResponseBody>('/v1/messages', data);
const sendDocumentByUrl = (data: DocumentByUrlRequestBody) => request.post<ResponseBody>('/v1/messages', data);

export = {
  sendDocumentById,
  sendDocumentByUrl,
};
