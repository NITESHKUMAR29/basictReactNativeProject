import { SafeAreaView } from "react-native-safe-area-context";
import PujaSreen from "../components/screens/puja/PujaSreen";
import { useEffect, useState } from "react";
import { getAllEvents } from "../apis/puja/puja";
import { Text } from "react-native";

export default function Index() {
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getAllData = async () => {
    try {
      setLoading(true);
      const res = await getAllEvents({
        eventType: "111",
        page: 0,
      });

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
    <SafeAreaView className="flex-1 ">
      {loading ? <Text>Loading...</Text> : <PujaSreen data={allData} />}
    </SafeAreaView>
  );
}
