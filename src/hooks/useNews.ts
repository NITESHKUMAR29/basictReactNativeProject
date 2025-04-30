import { useEffect, useState } from 'react';
import { Article } from '../types/news';
import { fetchTopHeadlines } from '../services/newsService';

export const useNews = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadNews = async () => {
    try {
      const data = await fetchTopHeadlines();
      setArticles(data);
    } catch (err) {
      setError((err as Error).message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNews();
  }, []);

  return { articles, loading, error, refetch: loadNews };
};