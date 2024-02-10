import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './Screens/Welcome';
import Allergen from './Screens/Allergen';
import Restrictions from './Screens/Restrictions';
import NutritionalGoals from './Screens/NutritionalGoals';
import Camera from './Screens/Camera';
import Test from './Screens/Test';
import Categories from './Screens/Categories';

const Stack = createNativeStackNavigator();
const App = () => {
  const handleCodeFilled = code => {
    Alert.alert('Code entered', code);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>
        <Stack.Screen name="Camera" component={Camera} options={{ headerShown: false }}/>
        <Stack.Screen name="Test" component={Test} options={{ headerShown: false }}/>
        <Stack.Screen name="NutritionalGoals" component={NutritionalGoals} options={{ headerShown: false }}/>
        <Stack.Screen name="Allergen" component={Allergen} options={{ headerShown: false }}/>
        <Stack.Screen name="Restrictions" component={Restrictions} options={{ headerShown: false }}/>
        <Stack.Screen name="Categories" component={Categories} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
