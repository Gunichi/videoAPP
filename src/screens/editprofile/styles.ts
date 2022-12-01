import { StyleSheet } from "react-native";
import { THEME } from "../../themes/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",

    backgroundColor: "#FFF",
    mt: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    resizeMode: "contain",
    borderRadius: 100,
  },
  button: {
    backgroundColor: "#FEA800",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 12,
  },
  input: {
    width: 360,
    height: 50,
    backgroundColor: '#FFF6E6',
    borderRadius: 5,
    marginTop: 20,
    padding: 10,
    borderWidth:1,
    borderColor: '#BA7E08',
  },
  button1: {
    backgroundColor: "#FEA800",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    marginTop: 20,
    height: 30,
  },

})