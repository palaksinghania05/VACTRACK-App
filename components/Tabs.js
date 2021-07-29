import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Slot from './SlotDetails';
import FAQ from './FAQ';
import Home from './Home';

const Tab = createMaterialTopTabNavigator();

export default function Tabs() {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'indigo',
          labelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Slots" component={Slot} />
        <Tab.Screen name="FAQs" component={FAQ} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
