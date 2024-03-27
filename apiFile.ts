import { base_url } from "./constants";

export const categoriesApi = {
  get: async (options: RequestInit, params = "") => {
    const res = await fetch(base_url + "/categories" + params, options);
    const data = await res.json();
    return data.data;
  },
};
export const servicesApi = {
  get: async (options: RequestInit, params = "") => {
    const res = await fetch(base_url + "/services" + params, options);
    const data = await res.json();
    return data.data;
  },
};
export const projectsApi = {
  get: async (options: RequestInit, params = "") => {
    const res = await fetch(base_url + "/samples" + params, options);
    const data = await res.json();
    return data.data;
  },
};
