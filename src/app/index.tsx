import { Text, TouchableOpacity, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../hooks/redux/redux";
import { setUser } from "../store/slices/auth/userAuth";

export default function Index() {
  const { user } = useAppSelector((state) => state.userAuth);
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(setUser("Aniket"));
  };
  const apikey =process.env.API_KEY
  console.log({apikey})
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-red-500">{user}</Text>
      <View className="my-5 flex flex-row items-center gap-5">
        <TouchableOpacity
          onPress={handleLogin}
          className="p-4 bg-orange-600 text-white rounded-2xl shadow-sm"
        >
          <Text className="text-white">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(setUser(null))}
          className=" p-4 border-[1px]  rounded-2xl shadow-sm"
        >
          <Text className="text-orange-600">Log Out</Text>
        </TouchableOpacity>

      </View>
        <Text>{apikey}</Text>
    </View>
  );
}
