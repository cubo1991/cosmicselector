import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import UserList from './screens/UserList';
import UserDetailScreen from './screens/UserDetailScreen';
import CreateUserScreen from './screens/CreateUserScreen';

const Stack = createNativeStackNavigator()
const MyStack = () => {
return (
<Stack.Navigator>
<Stack.Screen name="UserList" component={UserList}/>
<Stack.Screen name="CreateUserScreen" component={CreateUserScreen}/>
<Stack.Screen name="UserDetailScreen" component={UserDetailScreen}/>




</Stack.Navigator>
)
  
}
export default function App() {
  return (
    <NavigationContainer>
 <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
