
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/Components/Login';
import Home from './src/Components/Home';
import EmployeeData from './src/Components/Employeedata';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// function HomeTabNavigator() {
//   return (
//     <Tab.Navigator screenOptions={{ headerShown: false }}>
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="EmployeeData" component={EmployeeData} />
//     </Tab.Navigator>
//   );
// }
function HomeTabNavigator() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false, // Disable the header
      tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'md-home' : 'md-home-outline';
          } else if (route.name === 'EmployeeData') {
            iconName = focused ? 'md-person' : 'md-person-outline';
          }

          // Return the Ionicons component with appropriate name, color, and size
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#006600',
        inactiveTintColor: '#8e8e93',
      }}
      tabBarStyle={{
        backgroundColor: 'black', // Set the background color of the bottom navigation
      }}
    >
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

