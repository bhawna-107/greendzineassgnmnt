
// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Login from './src/Components/Login';
// import Home from './src/Components/Home';
// import employeeData from './src/Components/employeedata';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();


// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{headerShown: false}}>
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Home" component={Home} />
//       </Stack.Navigator>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={Home} />
//         <Tab.Screen name="EmployeeData" component={employeeData} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/Components/Login';
import Home from './src/Components/Home';
import EmployeeData from './src/Components/Employeedata';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="EmployeeData" component={EmployeeData} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={HomeTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

