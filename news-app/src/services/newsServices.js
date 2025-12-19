import axios from "axios";
const apikey = import.meta.env.VITE_APP_NEWS_API_KEY;

const newsApi = axios.create({
  baseURL: "https://api.worldnewsapi.com",
  headers: {
    "x-api-key": apikey,
    "User-Agent": "request",
    "Content-Type": "application/json",
  },
});

export const fetchNewsData = async ({ country, language, date }) => {
  try {
    const response = await newsApi.get("/top-news", {
      params: {
        "source-country": country,
        language: language,
        date: date,
      },
    });
    return response.data;
  } catch (err) {
    if (err.response || err.response.status === 404) {
      throw new Error("Invalid API connection");
    }
    throw err;
  }
};

export const fetchSearchNews = async ({ country, language, text, date }) => {
  try {
    const response = await newsApi.get("/search-news", {
      params: {
        text: text,
        "source-country": country,
        language: language,
        date: date,
      },
    });
    return response.data;
  } catch (err) {
    if (err.response || err.response.status === 404) {
      throw new Error("Invalid API connection");
    }
    throw err;
  }
};
