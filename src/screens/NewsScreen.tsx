import React from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Image } from 'react-native';
import { useNews } from '../hooks/useNews';

const NewsScreen = () => {
  const { articles, loading, error, refetch } = useNews();

  if (loading) return <ActivityIndicator style={styles.centered} size="large" />;
  if (error) return <Text style={styles.error}>{error}</Text>;

  return (
    <FlatList
      data={articles}
      keyExtractor={(item) => item.url}
      onRefresh={refetch}
      refreshing={loading}
      renderItem={({ item }) => (
        <View style={styles.card}>
          {item.urlToImage && <Image source={{ uri: item.urlToImage }} style={styles.image} />}
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.description}</Text>
        </View>
      )}
    />
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  error: { textAlign: 'center', color: 'red', marginTop: 20 },
  card: { padding: 16, borderBottomWidth: 1, borderColor: '#ccc' },
  image: { height: 200, width: '100%', borderRadius: 10, marginBottom: 10 },
  title: { fontWeight: 'bold', fontSize: 16, marginBottom: 4 },
});