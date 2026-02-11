import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Assets() {
  return (
    <View style={styles.container}>
      <Text style={styles.currentPage}>Current Page: Assets</Text>
      <Text style={styles.title}>Assets Page</Text>
      <Text style={styles.text}>This page is for testing assets</Text>

      <View style={styles.nav}>
        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>→ Home</Text>
        </Link>
        <Link href="/assets/1" style={styles.link}>
          <Text style={styles.linkText}>→ Asset 1</Text>
        </Link>
        <Link href="/assets/2" style={styles.link}>
          <Text style={styles.linkText}>→ Asset 2</Text>
        </Link>
        <Link href="/assets/3" style={styles.link}>
          <Text style={styles.linkText}>→ Asset 3</Text>
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
