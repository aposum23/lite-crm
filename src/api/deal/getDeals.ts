import http from "../instance";

export const getDeals = () => http.httpCore.get('api/v4/leads');