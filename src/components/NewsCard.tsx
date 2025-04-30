import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface NewsCardProps {
  article: {
    title: string;
    description: string;
    urlToImage: string;
  };
}

const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <View style={styles.card}>
      {article.urlToImage && (
        <Image source={{ uri: article.urlToImage }} style={styles.image} />
      )}
      <Text style={styles.title}>{article.title}</Text>
      <Text numberOfLines={3} style={styles.description}>
        {article.description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
  description: {
    fontSize: 14,
    marginHorizontal: 10,
    marginBottom: 10,
  },
});

export default NewsCard;