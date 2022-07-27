//Request types
export type RequestBody = {
  to: string;
  type: string;
  recipient_type?: string;
};

export type TextRequestBody = RequestBody & { text: { body: string } };

export type TextUrlRequestBody = RequestBody & { text: { body: string }; preview_url: boolean };

export type ImageByIdRequestBody = RequestBody & {
  image: { caption: string; id: string };
};

export type ImageByUrlRequestBody = RequestBody & {
  image: { provider: { name: string }; link: string; caption: string };
};

export type AudioByIdRequestBody = RequestBody & {
  audio: { id: string };
};

export type AudioByUrlRequestBody = RequestBody & {
  audio: { provider?: { name: string }; link: string };
};

export type VideoByIdRequestBody = RequestBody & {
  video: { caption: string; id: string };
};

export type VideoByUrlRequestBody = RequestBody & {
  video: { provider: { name: string }; caption: string; link: string };
};

export type DocumentByIdRequestBody = RequestBody & {
  document: { caption: string; id: string; filename: string };
};

export type DocumentByUrlRequestBody = RequestBody & {
  document: { provider: { name: string }; caption: string; link: string; filename: string };
};

export type ListRequestBody = RequestBody & {
  interactive: {
    type: string;
    header: { type: string; text: string };
    body: { text: string };
    footer: { text: string };
    action: {
      button: string;
      sections: { title: string; rows: { id: string; title: string; description: string }[] }[];
    };
  };
};

export type ButtonRequestBody = RequestBody & {
  button: {
    header: { type: string; text: string };
    body: { text: string };
    footer: { text: string };
    buttons: { type: string; reply: { payload: string; title: string } }[];
  };
};

export type TemplateTextRequestBody = RequestBody & {
  template: {
    namespace: string;
    name: string;
    language: { policy: string; code: string };
    components: { type: string; parameters: { type: string; text: string }[] }[];
  };
};

export type TemplateMediaRequestBody = RequestBody & {
  template: {
    namespace: string;
    name: string;
    language: { policy: string; code: string };
    components: (
      | { type: string; parameters: { type: string; caption: string; link: string }[] }
      | { type: string; parameters: { type: string; text: string }[] }
    )[];
  };
};

export type TemplateCallToActionRequestBody = RequestBody & {
  template: {
    namespace: string;
    name: string;
    language: { policy: string; code: string };
    components: (
      | { type: string; parameters: { type: string; text: string } }
      | { type: string; sub_type: string; index: string; parameters: { type: string; text: string }[] }
    )[];
  };
};

export type TemplateQuickReplyRequestBody = RequestBody & {
  template: {
    namespace: string;
    name: string;
    language: { policy: string; code: string };
    components: (
      | { type: string; parameters: { type: string; text: string } }
      | { type: string; sub_type: string; index: string; parameters: { type: string; payload: string }[] }
    )[];
  };
};

export type ContactRequestBody = RequestBody & {
  contacts: {
    addresses: {
      city: string;
      country: string;
      country_code: string;
      state: string;
      street: string;
      type: string;
      zip: string;
    }[];
    birthday: string;
    emails: { email: string; type: string }[];
    ims: any[];
    name: { first_name: string; formatted_name: string; last_name: string };
    org: { company: string };
    phones: { phone: string; type: string }[];
    urls: any[];
  }[];
};

export type LocationRequestBody = RequestBody & {
  location: { longitude: string; latitude: string; name: string; address: string };
};

export type StickerByIdRequestBody = RequestBody & {
  sticker: { id: string };
};

export type StickerByUrlRequestBody = RequestBody & {
  sticker: { provider: { name: string }; link: string };
};

export type ResponseBody = { messages: { id: string }[]; meta: { api_status: string; version: string } };
