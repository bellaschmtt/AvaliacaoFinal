import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      </View>
      <View style={styles.branco}>
        <Text style={styles.title}>Isabella Schmitz e Maria Isadora</Text>
        <Text style={styles.subTitle}>
        Nossa dupla é formada pela Isabella e pela Maria Isadora como diz o titulo, ambas estudantes do terceiro ano do ensino médio integrado ao técnico em informática para internet pelo senac Joinville.
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "#a600ff",
  },
  branco: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: "100%",
  },

  header: {
    width: "100%",
    height: 100,
    backgroundColor: "#a600ff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  subTitle: {
    fontSize: 15,
    textAlign: "justify",
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
});