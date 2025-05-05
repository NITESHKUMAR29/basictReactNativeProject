import React, { useState } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from 'react-native';
import PujaCard from '../components/NewsCard';
import { Platform, StatusBar } from 'react-native';

const DATA = [
  {
    name: 'Adi Veni Madhav Prayagraj - Kumbh Mela Special',
    mainBenefit: 'prosperity and mental peace',
    images: ['https://utsav-dev-v2-media.gumlet.io/Communities/1726670473691_dp_cover_6.webp'],
    participantCount: 124,
    urlExtension: 'ganesh-puja',
    UrlParams: [{ urlParam: 'ganesh' }],
    templeName: 'Ganesh Temple',
    Event_Config: {
      Temple: {
        name: 'Adi Veni Madhav',
        city: 'Prayagraj',
      },
      Timeline: {
        date: '2025-09-15',
        name: 'Ganesh Chaturthi',
      },
    },
  },
  {
    name: 'Lakshmi Puja',
    mainBenefit: 'Wealth and Prosperity',
    images: ['https://utsav-dev-v2-media.gumlet.io/Events/1731754271686_image.webp'],
    participantCount: 300,
    urlExtension: 'lakshmi-puja',
    UrlParams: [{ urlParam: 'lakshmi' }],
    templeName: 'Lakshmi Temple',
    Event_Config: {
      Temple: {
        name: 'Lakshmi Temple',
        city: 'Delhi',
      },
      Timeline: {
        date: '2025-10-23',
        name: 'Diwali',
      },
    },
  },
  // Add more static data here
];

export default function PujaListScreen() {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(DATA);

  const handleSearch = (text: string) => {
    setSearchText(text);
    const filtered = DATA.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleCardPress = (item: any) => {
    console.log('Redirect to:', item.urlExtension);
  };

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
        keyExtractor={(item, index) => index.toString()}
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
});
