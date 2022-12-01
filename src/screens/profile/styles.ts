import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    mt: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#FFF",
    width: "100%",
    height: "50%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#19786A",
    borderRadius: 100,
    width: '30%',
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 12,
  },
  body: {
    justifyContent: "center",
    alignItems: "center",
  },
  tinyLogo: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    borderRadius: 100,
  },

})