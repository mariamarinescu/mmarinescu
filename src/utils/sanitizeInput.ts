import sanitizeHtml, { IOptions } from 'sanitize-html';

export const sanitizeInput = (input: string, options?: IOptions): string => {
  return sanitizeHtml(input, {
    allowedTags: options?.allowedTags || [],
    allowedAttributes: options?.allowedAttributes || {},
  });
};
