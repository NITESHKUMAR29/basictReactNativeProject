import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ActivityIndicator,
  Text,
} from 'react-native';
import PujaCard from '../components/PujaCard';
import { fetchPuja } from '../services/apis/pujaService';

import { Event } from '../types/puja';


export default function PujaListScreen() {
  const [allData, setAllData] = useState<Event[]>([]); // Full list from API
  const [filteredData, setFilteredData] = useState<Event[]>([]); // Filtered by search
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPujas();
  }, []);

  const loadPujas = async () => {
    try {
      const res = await fetchPuja(); // API call
      if (res?.response) {
        setAllData(res.response);
        setFilteredData(res.response);
      }
    } catch (err) {
      console.error('Failed to load pujas:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (text: string) => {
    setSearchText(text);
    const filtered = allData.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase()) ||
      item?.Event_Config?.Temple?.name?.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleCardPress = (item: Event) => {
    console.log('Redirect to:', item.urlExtension);
  };

  if (loading) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (filteredData.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search For puja or Temple..."
          value={searchText}
          onChangeText={handleSearch}
        />
        <View style={styles.center}>
          <Text>No pujas found.</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search For puja or Temple..."
        value={searchText}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.eventID.toString()}
        renderItem={({ item, index }) => (
          <PujaCard
            value={item}
            idx={index}
            onPress={() => handleCardPress(item)}
          />
        )}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  list: {
    paddingVertical: 16,
  },
  searchBar: {
    height: 45,
    margin: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 16,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});