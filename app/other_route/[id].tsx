import { StyleSheet, Text, View } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";

export default function OtherRouteDetail() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.currentPage}>Current Page: Other Route / {id}</Text>
      <Text style={styles.title}>Other Route Detail</Text>
      <Text style={styles.text}>Viewing other route with ID: {id}</Text>

      <View style={styles.nav}>
        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>→ Home</Text>
        </Link>
        <Link href="/other_route" style={styles.link}>
          <Text style={styles.linkText}>→ Other Route</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  currentPage: {
    fontSize: 12,
    color: "#666",
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  nav: {
    marginTop: 20,
  },
  link: {
    marginVertical: 5,
  },
  linkText: {
    fontSize: 16,
    color: "#007bff",
    textDecorationLine: "underline",
  },
});
