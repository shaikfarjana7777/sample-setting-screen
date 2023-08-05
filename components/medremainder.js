import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList ,Image} from 'react-native';
import { Picker } from '@react-native-picker/picker';
//import { BlurView } from 'expo-blur';

export default function Medication() {
  const [medicationName, setMedicationName] = useState('');
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [selectedTime, setSelectedTime] = useState('');
  const [medicationList, setMedicationList] = useState([]);

  const handleSetReminder = () => {
    if (medicationName && selectedDay && selectedTime) {
      const newMedication = {
        id: Date.now().toString(),
        name: medicationName,
        day: selectedDay,
        time: selectedTime,
      };
      setMedicationList((prevMedications) => [...prevMedications, newMedication]);
      setMedicationName('');
      setSelectedDay('Monday');
      setSelectedTime('');
      alert(`Medication set for ${selectedDay} at ${selectedTime}`);
    } else {
      alert('Please enter medication name, select day, and set reminder time.');
    }
  };

  const handleDeleteMedication = (id) => {
    setMedicationList((prevMedications) => prevMedications.filter((med) => med.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.todoItem}>
      <Text>{item.name} - {item.day} at {item.time}</Text>
      <View style={styles.buttonContainer}>
        
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'black',marginLeft:230,marginBottom:2 }]}
          onPress={() => handleDeleteMedication(item.id)}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>

<View style={styles.circle}>
        <Image
          //source={require('../components/src/profilelogo.png')} // Replace with the actual relative path
          source={require('../assets/profilelogo.jpeg')}
          style={styles.profileLogo}
        />
      </View>
      
      
      
      
      
      <TextInput
        style={styles.input}
        placeholder="Medication Name"
        value={medicationName}
        onChangeText={setMedicationName}
      />

      <Picker
        selectedValue={selectedDay}
        onValueChange={(itemValue) => setSelectedDay(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Monday" value="Monday" />
        <Picker.Item label="Tuesday" value="Tuesday" />
        <Picker.Item label="Wednesday" value="Wednesday" />
        <Picker.Item label="Thursday" value="Thursday" />
        <Picker.Item label="Friday" value="Friday" />
        <Picker.Item label="Saturday" value="Saturday" />
        <Picker.Item label="Sunday" value="Sunday" />
        <Picker.Item label="Everyday" value="Everyday" />
      </Picker>

      <TextInput
        style={styles.inputtime}
        placeholder="Set Reminder Time (e.g., 12:00 PM)"
        value={selectedTime}
        onChangeText={setSelectedTime}
      />
       
      <TouchableOpacity style={styles.button} onPress={handleSetReminder}>
        <Text style={styles.buttonText}>Set Medication Reminder</Text>
      </TouchableOpacity>
      

      <FlatList
        data={medicationList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'bottom',
    alignItems: 'center',
    backgroundColor: 'rosybrown',
    //marginTop: , // You can adjust this value as per your preference
    flex: 1, // Add flex: 1 to allow the container to take up the available space
  },
    
  
  input: {
    borderWidth: 3,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 130,
    width: '80%',
    
  },
  inputtime: {
    borderWidth: 3,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    width: '80%',
    
  },
  picker: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    marginTop: 5,
    width: '80%',
    color:'white',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: 'black',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 15,
  },
  list: {
    width: '80%',
    marginTop: 20,
  },
  todoItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5,
  },

  circle: {
    width: 60,
    height: 60,
    borderRadius: 35,
    backgroundColor: 'black',
    position: 'absolute',
    top: 10,
    right: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileLogo: {
    width: 50, // Adjust the size of the profile logo as needed
    height: 50,
    borderRadius: 30, // Make it a circle by using half of the width and height
  },
  
});
