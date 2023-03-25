import { Text, View } from 'react-native';
import MainPage from './src/screens/main/main';
import { NavigationContainer} from '@react-navigation/native';
import Drawers from './src/navigation/drawer';
import Home from './src/screens/home/Home';
import Signup from './src/screens/signup/Signup';
import Popup from './src/components/poppup/PopUp';
import Card from './src/components/card/Cards';
function App() {
  return (
    <NavigationContainer>
      <Drawers/>
    </NavigationContainer>
    // <Home/>
    // <Signup/>
    // <MainPage/>
    // <Popup/>
    // <Card/>
  );
}

export default App;
