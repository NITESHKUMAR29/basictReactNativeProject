import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Link href="/puja">
        <Text className="text-red-500">Puja</Text>
      </Link>
    </View>
  );
}
