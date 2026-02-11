import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function OtherRoute() {
  return (
    <View style={styles.container}>
      <Text style={styles.currentPage}>Current Page: Other Route</Text>
      <Text style={styles.title}>Other Route Page</Text>
      <Text style={styles.text}>This page is for testing other routes</Text>

      <View style={styles.nav}>
        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>→ Home</Text>
        </Link>
        <Link href="/other_route/1" style={styles.link}>
          <Text style={styles.linkText}>→ Other Route 1</Text>
        </Link>
        <Link href="/other_route/2" style={styles.link}>
          <Text style={styles.linkText}>→ Other Route 2</Text>
        </Link>
        <Link href="/other_route/3" style={styles.link}>
          <Text style={styles.linkText}>→ Other Route 3</Text>
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
