import { sanitizeInput } from './sanitizeInput';

export const sanitizedMessage = (userMessage: string) =>
  sanitizeInput(userMessage, {
    allowedTags: ['b', 'i'], // Allow <b> and <i> tags
    allowedAttributes: { a: ['href'] }, // Allow href attribute for <a> tags
  });
