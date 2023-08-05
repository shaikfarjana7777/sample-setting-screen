import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';


export default function LikesAndShare() {
  const [checked, setChecked] = useState('first');

  const handlePress = (value) => {
    setChecked(value);
  };

  return (
    <View style={styles.container}>
      <RadioButton.Group onValueChange={handlePress} value={checked}>
        <View style={styles.radioButtonContainer}>
          <RadioButton.Item label="English" value="first" color="#000" />
          <RadioButton.Item label="Africaans" value="second" color="#000" />
          <RadioButton.Item label="Dansk" value="third" color="#000" />
          <RadioButton.Item label="Deutsch" value="fourth" color="#000" />
          <RadioButton.Item label="Espanol" value="five" color="#000" />
          <RadioButton.Item label="Italiano" value="six" color="#000" />
          <RadioButton.Item label="Romana" value="seven" color="#000" />
          <RadioButton.Item label="Svenska" value="eight" color="#000" />
        </View>
      </RadioButton.Group>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonContainer: {
    marginTop: 10,
  },
});
