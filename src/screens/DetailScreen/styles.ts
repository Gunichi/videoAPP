import {
  StyleSheet
} from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  bannerContainer : {
    backgroundColor: 'rgba(25, 120, 106, 0.3)',
    width: '80%',
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover',
  },

  bannerText: {
    color: '#19786A',
    fontSize: 20,
    marginLeft: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },

  bannerIcon: {
    color: '#19786A',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop: 40,
    justifyContent: 'flex-end',
  },

  contentContainer: {
    width: '80%',
    marginTop: 20,
    height: 200,
    borderRadius: 10,
  },

  contentText: {
    color: '#19786A',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },

  contentDetail: {
    color: '#19786A',
    fontSize: 14,
    marginTop: 10,
    fontWeight: 'bold',
  },

  contentPlayer: {
    backgroundColor: 'rgba(25, 120, 106, 0.3)',
    width: '80%',
    height: 200,
    borderRadius: 10,
    resizeMode: 'cover',
    alignContent: 'center',
    alignItems: 'center',
  },

  contentPlayerText: {
    color: '#19786A',
    fontSize: 20,
    marginLeft: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },

  contentPlayerIcon: {
    marginTop: 40,
    backgroundColor: 'rgba(25, 120, 106, 0.3)',
    width: '80%',
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },

  contentPlayerTxt: {
    color: '#19786A',
    fontSize: 20,
    marginLeft: 20,
    fontWeight: 'bold',
  },
})