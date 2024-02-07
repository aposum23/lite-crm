import http from "../instance";

export const getContact = () => http.httpCore.get('api/v4/contacts');