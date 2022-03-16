import React from 'react';
import TopTabBar from './components/TopTabBar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return(
    <SafeAreaProvider>
      <TopTabBar />
    </SafeAreaProvider>
  )
}