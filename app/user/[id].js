import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";
import { useLocalSearchParams } from "expo-router";

export default function UserProfilePage() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>User Profile Page</Text>
      <Text>User ID: {id}</Text>
      <Button
        title="Go to Home Page"
        onPress={() => router.push("/")}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}
