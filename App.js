import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,TouchableOpacity ,View,ScrollView,SafeAreaView,Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import SettingsScreen from './components/settings';
import LikesAndShare from './components/likesNdShare';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import YourPhotos from './components/yourPhotos';
import FirstPostNStories from './components/firstPostNStories';
import Medication from './components/medremainder';
import FAQScreen from './components/faqs';
//import exercise from './components/exerciseremainder'
import Notifications from './components/notifications';



const Stack = createNativeStackNavigator();

export default function App() {
  return(
    

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerTitle: 'Settings',
            headerTitleStyle: {
              fontSize: 35,
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="LikesandShare" component={LikesAndShare} />
        <Stack.Screen name="YourPhotos" component={YourPhotos} />
        <Stack.Screen name="FirstPostNStories" component={FirstPostNStories} />
        <Stack.Screen name="Medremainder" component={Medication} />
        <Stack.Screen name="Faqs" component={FAQScreen} />
        <Stack.Screen name="Notifications" component={Notifications} />




      </Stack.Navigator>
    </NavigationContainer>

  );
}
//<Stack.Screen name="Exerciseremainder" component={ExerciseReminder} />