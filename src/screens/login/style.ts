import { StyleSheet } from 'react-native';
import { THEME } from '../../themes/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    marginTop: 20,
    alignItems: 'center',
    alignContent: 'center',
  },

  loginForm: {
    marginTop: 20,
    alignItems: 'center',
    alignContent: 'center',
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

  button: {
    width: 300,
    height: 50,
    backgroundColor: '#FEA800',
    color: '#FFFFFF',
    borderRadius: 5,
    marginTop: 30,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    justifyContent: 'center',
  },

  boxText: {
    marginTop: 20
  },

  span: {
    color: '#FEA800',
  }
})

