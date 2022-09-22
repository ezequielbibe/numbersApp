import React, { useState } from 'react';
import { useFonts  } from 'expo-font';  
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Header } from './components/index';
import { StartGame, GameStarted } from './screens/index';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});

export default function App() {
  const [numberSelected,  setNumberSelected] = useState(0);
  const [loaded] = useFonts({
    'Lato-Black' : require('./assets/fonts/Lato-Black.ttf'),
    'Lato-Bold' : require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Light' : require('./assets/fonts/Lato-Light.ttf'),
    'Lato-Italic' : require('./assets/fonts/Lato-Italic.ttf'),
    'Lato-Regular' : require('./assets/fonts/Lato-Regular.ttf'),
  });

  const onHandleStartGame = (numberSelected) => {
    setNumberSelected(numberSelected);
  }
  if(!loaded) {
    return(
      <View style={styles.containerLoader}>
        <ActivityIndicator size='large' />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Header />
      {numberSelected ? <GameStarted numberSelected={numberSelected} onHandleStartGame={onHandleStartGame}/> : <StartGame onHandleStartGame={onHandleStartGame}/>}
    </View>
  );
}