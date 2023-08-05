import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function FirstPostNStories() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>First Post & Stories</Text>
      <View style={styles.heading}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingVertical: 24,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
  heading: {
    // Add your desired styles for the heading container
  },
});
