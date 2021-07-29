import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Card } from 'react-native-paper';

export default function Home({ navigation }) {
  return (
    <View style={styles.homeComponent}>
      <Card style={styles.mainCard}>
        <Text style={styles.text}>Welcome to the</Text>
        <Text style={styles.app}>VACTRACK App</Text>
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => navigation.navigate('VACTRACK App')}>
          <Text style={styles.buttonText}>    Get Started</Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  homeComponent: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 35,
    backgroundColor: '#1c2732',
  },
  mainCard: {
    height: '50%',
    width: '90%',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
  },
  app: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'green',
  },
  homeButton: {
    backgroundColor: '#2097f3',
    width: 150,
    marginTop: 100,
    textAlign: 'center',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
