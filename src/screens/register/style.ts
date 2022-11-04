import { StyleSheet } from "react-native";
import { THEME } from "../../themes/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white", 
    alignItems: "center",
  },
  registerText: {
    color: THEME.COLORS.TEXT_TITLE,
    fontSize: THEME.FONT_SIZE.LG,
    marginTop: 20,
  },
  registerDescription: {
    color: THEME.COLORS.CAPTION_400,
    fontSize: THEME.FONT_SIZE.SM,
    marginTop: 4,
  },
  registerForm: {
    width: "100%",
    marginTop: 20,
    alignItems: 'center'
  },
  registerInput: {
    width: "80%",
    height: 50,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: THEME.COLORS.CAPTION_300,
    marginTop: 20,
    paddingHorizontal: 20,
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.TEXT,
    backgroundColor: '#FFFFFF',
  },
  registerRadio: {
    width: "80%",
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  },
  registerRadioText: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
  },
  registerRadioGroup: {
    alignItems: 'center',
  },
  registerButton: {
    width: "80%",
    height: 50,
    borderRadius: 7,
    marginTop: 20,
    backgroundColor: THEME.COLORS.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center'
  },



  

});