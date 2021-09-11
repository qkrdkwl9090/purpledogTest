import axios from "axios";

const api = axios.create({
  baseURL: "https://hacker-news.firebaseio.com/v0",
});

export const puppleDogApi = {
  getList: (category) => api.get(`${category}.json?print=pretty`),
  getDetailById: (id) => api.get(`/item/${id}.json?print=pretty`),
};
