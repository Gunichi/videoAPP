import {
  StyleSheet
} from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    px: 20,
    py: 20,
    marginTop: 20,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  body: {
    flex: 1,
    alignItems: 'center',
  },
  banner: {
    width: '80%',
    height: '5%',
    borderRadius: 10,
    resizeMode: 'contain',
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  bannerText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#19786A',
  },
  categories : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginTop: 20,
  },
  category : {
    width: 100,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryBanner : {
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: '#BAD7D2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText : {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#19786A',
  },
  progress : {
    width: '80%',
    height: 'auto',
    borderRadius: 10,
    backgroundColor: '#BAD7D2',
    marginTop: 60,
  },
  progressText : {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#19786A',
    marginTop: 10,
    marginLeft: 10,
  },
  progressCourses : {
    backgroundColor: '#FEA800',
    width: '92%',
    borderRadius: 10,
    alignItems: 'center',
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 15,
  },
  progressCoursesDetails : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressCoursesText : {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#19786A',
    padding: 15,
  },
    


})