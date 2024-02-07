import http from "../instance";

export const getCompany = () => http.httpCore.get('api/v4/companies');