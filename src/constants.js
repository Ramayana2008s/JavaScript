export const IS_NODE          = (typeof window === 'undefined');
export const API_BASE         = 'http://api.temp-mail.org/request/';
export const API_FORMAT       = '/format/' + (IS_NODE ? 'json' : 'jsonp?callback=messages');
export const ENDPOINT_INBOX   = 'mail/id';
export const ENDPOINT_DOMAINS = 'domains';
export const ENDPOINT_DELETE  = 'delete/id';
export const ADDRESS_DOMAINS  = ['dlemail.ru', 'flemail.ru', 'shotmail.ru', 'walkmail.ru'];
