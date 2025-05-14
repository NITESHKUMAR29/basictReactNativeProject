import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

interface PujaCardProps {
  event: any;
  onPress: () => void;
}

const PujaCard = ({ event, onPress }: PujaCardProps) => {
  const {
    name,
    mainBenefit,
    participantCount,
    images,
    Event_Config: {
      Temple: { name: templeName, city: templeCity },
      Timeline: { name: dateName, date: eventDate },
    },
  } = event;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      className="bg-white rounded-2xl mb-5 shadow-md overflow-hidden w-full max-w-xl mx-auto"
    >
      <Image source={{ uri: images[0] }} className="w-full h-52 object-cover" />
      <View className="p-4">
        <Text className="text-xl font-bold text-gray-800">{name}</Text>
        {mainBenefit && (
          <Text className="text-sm font-semibold text-pink-600 mt-1">
            {mainBenefit}
          </Text>
        )}
        <View className="mt-3 space-y-2">
          <View className="flex-row items-center gap-2 text-gray-600 text-sm">
            {/* <Image
              source={require("../assets/temple.png")}
              className="w-5 h-5"
            /> */}
            <Text className="truncate">
              {templeName}
              {templeCity ? `, ${templeCity}` : ""}
            </Text>
          </View>
          <View className="flex-row items-center gap-2 text-gray-600 text-sm">
            {/* <Image
              source={require("../assets/calendar.png")}
              className="w-5 h-5"
            /> */}
            <Text className="truncate">
              {new Date(eventDate).toDateString()} - {dateName}
            </Text>
          </View>
        </View>
      </View>
      <View className="border-t px-4 py-3 flex-row justify-between items-center text-sm text-gray-600">
        <Text>{participantCount}+ Booked</Text>
        <TouchableOpacity
          onPress={onPress}
          className="bg-orange-500 px-4 py-1.5 rounded-full"
        >
          <Text className="text-white font-semibold">Book Puja</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default PujaCard;
