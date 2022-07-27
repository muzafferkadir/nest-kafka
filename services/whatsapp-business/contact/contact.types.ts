export type CreateRequestBody = { blocking: string; contacts: string[]; force_check: string };

export type CheckAsyncRequestBody = { contacts: string[]; force_check: string };

export type AckIdentityRequestBody = { hash: string };
