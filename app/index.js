import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.currentPage}>Current Page: Home</Text>
      <Text style={styles.title}>Home Page</Text>
      <Text style={styles.text}>Bug reproduction app with expo-router</Text>

      <View style={styles.nav}>
        <Link href="/assets" style={styles.link}>
          <Text style={styles.linkText}>→ Assets</Text>
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
