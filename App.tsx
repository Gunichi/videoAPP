
import { Provider } from 'react-native-paper';
import Login from './src/screens/login/login';
import { NotAllowed } from './src/screens/notAllowed/notallowed';
import Register from './src/screens/register/register';
import { Support } from './src/screens/support/support';

export default function App() {
  return (
    <Provider>
      <Support />
    </Provider>
  );
}

