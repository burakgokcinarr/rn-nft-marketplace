import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { FontLoader } from './src/config/FontLoader';
import RootNavigation from './src/navigation/RootNavigation';

export default function App() {

  const [fontsLoaded] = useFonts(FontLoader);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <RootNavigation/>
    </>
  );
}