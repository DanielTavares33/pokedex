import "../global.css";
import { Text, View, TextInput, Pressable } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function AboutScreen() {
  return (
    <View className="flex-1 bg-primary h-full">
      <View className="flex-1 max-h-40 justify-center">
        <View className="flex flex-row items-center mt-8 px-4 gap-2">
          <MaterialCommunityIcons name="pokeball" size={32} color="#fff" />
          <Text className="text-2xl font-bold text-white">Pokédex</Text>
        </View>
        <View className="flex flex-row items-center mx-4 mt-4 gap-2">
          <View className="flex flex-row items-center flex-1 bg-white rounded-full px-4 gap-2">
            <MaterialCommunityIcons name="magnify" size={24} color="#6b7280" />
            <TextInput
              placeholder="Search Pokémon"
              className="flex-1 text-base"
            />
          </View>
          <Pressable className="bg-white rounded-full p-2">
            <MaterialCommunityIcons name="filter-variant" size={24} color="#6b7280" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
