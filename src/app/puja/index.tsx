import { getAllEvents } from "@/src/apis/puja/puja";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Index = () => {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getAllData = async () => {
    try {
      setLoading(true);
      const res = await getAllEvents({
        eventType: "111",
        page: 0,
      });
      console.log(res);
      
      if (res) {
        setAllData(res);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <View>
      <Text>
        {loading ? "Loading..." :"FETCHED"}
        
      </Text>
    </View>
  );
};

export default Index;
