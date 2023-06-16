//imports
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import P from './screens/produtos';
import C from './screens/comprovantes';
import U from './screens/uploads';
import H from './screens/home';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer >
      <Tab.Navigator initialRouteName="C" screenOptions={{
          headerShown: false}}>
      <Tab.Screen name="Produtos" component={P}  />
      <Tab.Screen name="Comprovantes" component={C}  />
      <Tab.Screen name="Uploads" component={U}  />
    </Tab.Navigator>
    </NavigationContainer>
        
  );
}
