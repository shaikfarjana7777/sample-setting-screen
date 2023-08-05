import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {Checkbox  ,Divider, Button } from 'react-native-paper';


export default function Notifications() {
  const [medicationReminder, setMedicationReminder] = useState(false);
  const [exerciseReminder, setExerciseReminder] = useState(false);
  const [gpsPreferences, setGPSPreferences] = useState(false);

  const handleMedicationReminderToggle = () => {
    setMedicationReminder((prevValue) => !prevValue);
  };

  const handleExerciseReminderToggle = () => {
    setExerciseReminder((prevValue) => !prevValue);
  };

  const handleGPSPreferencesToggle = () => {
    setGPSPreferences((prevValue) => !prevValue);
  };

  const savePreferences = () => {
   
    //  dispatch an action or make an API call to save the preferences
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.mainHeading}>Notification Preferences</Text>

        <View style={styles.section}>
          <Text style={styles.heading}>Medication Reminders</Text>
          <Checkbox.Item
            label="Receive medication reminders"
            status={medicationReminder ? 'checked' : 'unchecked'}
            onPress={handleMedicationReminderToggle}
          />
        </View>

        <Divider style={styles.divider} />

        <View style={styles.section}>
          <Text style={styles.heading}>Exercise Reminders</Text>
          <Checkbox.Item
            label="Receive exercise reminders"
            status={exerciseReminder ? 'checked' : 'unchecked'}
            onPress={handleExerciseReminderToggle}
          />
        </View>

        <Divider style={styles.divider} />

        <View style={styles.section}>
          <Text style={styles.heading}>GPS and Location Preferences</Text>
          <Checkbox.Item
            label="Allow access to GPS location"
            status={gpsPreferences ? 'checked' : 'unchecked'}
            onPress={handleGPSPreferencesToggle}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button mode="contained" onPress={savePreferences}>
            Save Preferences
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  mainHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 15,
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  divider: {
    marginVertical: 10,
  },
  buttonContainer: {
    marginTop: 20,
    alignSelf: 'center',
    width: '50%',
  },
});
