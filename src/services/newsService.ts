import axios from 'axios';
import { BASE_URL, API_KEY } from '../config/apiConfig';
import { Article } from '../types/news';

export const fetchTopHeadlines = async (): Promise<Article[]> => {
  const response = await axios.get(`${BASE_URL}/top-headlines`, {
    params: { country: 'us', apiKey: API_KEY },
  });

  return response.data.articles;
};