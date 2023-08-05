import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const EmergencyContactsSettings = () => {
  const [emergencyContacts, setEmergencyContacts] = useState([]);

  const addContact = () => {
    
    console.log('Adding a new emergency contact');
  };

  const removeContact = (index) => {
   
    console.log('Removing emergency contact at index', index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Emergency Contacts Settings</Text>
      {emergencyContacts.map((contact, index) => (
        <View key={index} style={styles.contactContainer}>
          <TextInput
            style={styles.contactInput}
            value={contact}
            onChangeText={(text) => {
              // Logic to update the emergency contact at the specified index
              console.log('Updating emergency contact at index', index, 'to', text);
            }}
          />
          <Button title="Remove" onPress={() => removeContact(index)} />
        </View>
      ))}
      <Button title="Add Contact" onPress={addContact} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactInput: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
  },
});

export default EmergencyContactsSettings;
