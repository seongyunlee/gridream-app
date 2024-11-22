import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <View>
      <Text style={styles.title}>core.errors.screenNotFound</Text>
      <TouchableOpacity>
        <Text>NotFound.goHome</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 24,
  },
});
