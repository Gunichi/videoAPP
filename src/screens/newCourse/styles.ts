import { StyleSheet } from 'react-native';
import { THEME } from '../../themes/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  newContent: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    backgroundColor: "#FEA800",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    margin: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 12,
  },
  input: {
    width: 300,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginTop: 20,
    padding: 10,
    borderWidth:1,
    borderColor: THEME.COLORS.CAPTION_300,
  },

});