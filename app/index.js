import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Link
        href={{
          pathname: "/user/[id]",
          params: { id: "123" },
        }}
      >
        View user details
      </Link>
      <Link href="/about" style={{ marginTop: 20 }}>
        Go to About Page
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
