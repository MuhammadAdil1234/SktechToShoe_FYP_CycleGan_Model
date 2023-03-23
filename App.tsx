import { Text, View } from 'react-native';
import MainPage from './src/screens/main/main';
import { NavigationContainer} from '@react-navigation/native';
import Drawers from './src/navigation/drawer';
import Home from './src/screens/home/Home';
import Signup from './src/screens/signup/Signup';
function App() {
  return (
    <NavigationContainer>
      <Drawers/>
    </NavigationContainer>
    // <Home/>
    // <Signup/>

  );
}

export default App;
