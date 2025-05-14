import React from "react";
import { View, FlatList, SafeAreaView } from "react-native";
import PujaCard from "../../PujaCard";
import { Event } from "@/src/interfaces/puja/puja";

const PujaScreen = ({ data }: { data: Event[] }) => {
  console.log(data);
  return (
    <SafeAreaView className="flex-1 p-4">
      <FlatList
        data={data}
        keyExtractor={(item) => item.eventID.toString()}
        renderItem={({ item, index }) => (
          <PujaCard
            event={item}
            onPress={() => console.log("Pressed", item.eventID)}
          />
        )}
        contentContainerStyle={{ paddingVertical: 20 }}
      />
    </SafeAreaView>
  );
};

export default PujaScreen;
