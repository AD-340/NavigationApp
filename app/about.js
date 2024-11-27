import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function AboutPage() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>About Page</Text>
      <Button title="Push to Home" onPress={() => router.push("/")} />
      <Button
        title="Replace with Home"
        onPress={() => router.replace("/")}
        style={{ marginTop: 10 }}
      />
    </View>
  );
}
