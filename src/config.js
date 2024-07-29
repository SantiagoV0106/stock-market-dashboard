const BASE_URL = import.meta.env.VITE_BASE_URL
const API_KEY = import.meta.env.VITE_API_TOKEN


export const getUrlPath = path => `${BASE_URL}${path}&token=${API_KEY}`