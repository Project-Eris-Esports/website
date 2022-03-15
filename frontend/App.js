import React from 'react';
import TopTabBar from './components/TopTabBar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return(
    <SafeAreaProvider>
      <TopTabBar />
    </SafeAreaProvider>
  )
    // return (
    //   <NavigationContainer>
    //     <Tab.Navigator>
    //         <Tab.Screen name='Home' component={HomeScreen} />
    //         <Tab.Screen name='About' component={AboutScreen} />
    //         <Tab.Screen name='Contact' component={ContactScreen} />
    //     </Tab.Navigator>
    //   </NavigationContainer>
    // )
}



// import { StyleSheet, Text, View } from 'react-native';
// import NavBar from './components/navbar';


// function App() {
//   <View style={styles.container}>
//     <NavBar />
//   </View>
// }

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   center: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });