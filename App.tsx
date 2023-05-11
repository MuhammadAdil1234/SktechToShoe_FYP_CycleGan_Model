import { Text, View } from 'react-native';
import MainPage from './src/screens/main/main';
import { NavigationContainer} from '@react-navigation/native';
import Drawers from './src/navigation/drawer';
import Home from './src/screens/home/Home';
import Popup from './src/components/poppup/PopUp';
import Card from './src/components/card/Cards';
import SavePicture from './src/screens/savepicture/SavePicture';
import InputSketch from './src/screens/inputsketch/InputSketch';
import OutputReal from './src/screens/outputReal/OutputReal';
import Navigate from './src/navigation/Stack';
function App() {
  return (
    // <NavigationContainer>
    //   <Drawers/>
    // </NavigationContainer>
    // <Home/>
    // <Signup/>
    // <MainPage/>
    // <Popup/>
    // <Card/>
    // <SavePicture/>
    // <InputSketch/>
    <Navigate/>
    // <OutputReal/>
  );
}

export default App;
