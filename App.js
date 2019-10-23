import React, { useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Bismillah');
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="change Text" onPress={() => setOutputText('React Native using Hooks in 2019')} />
    </View>
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
