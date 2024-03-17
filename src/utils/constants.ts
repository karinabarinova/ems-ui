export const EMPLOYEES_KEY = "employees";
export const DEPARTMENTS_KEY = "departments";
export const GET_EMPLOYEES_ENDPOINT = "http://localhost:8000/employees";
export const ITEMS_PER_PAGE = 10;
export const HOME_URL = "/";
/*
    Per the W3C HTML5 specification: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
*/
// export const VALID_EMAIL_REGEX = /^[a-zA-Z0-9.!#$ %& '*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

export const VALID_EMAIL_REGEX =
    /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-' * +/-9=?A-Z^-~]+)*|"(?:[^\s"\\]|\\[\t -~])*")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+/;
