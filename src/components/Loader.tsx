// components/Loader.tsx
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Loader: React.FC = () => (
  <View className="flex items-center justify-center py-4">
    <ActivityIndicator size="large" color="#FF9800" />
  </View>
);

export default Loader;
