import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,TouchableOpacity ,View,ScrollView,SafeAreaView,Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import LikesAndShare from './likesNdShare';
import yourPhotos from './yourPhotos';
import Medication from './medremainder';
import FAQScreen from './faqs';




export default function SettingsScreen() {

  const navigation = useNavigation();

const navigateToLikesNComments = () => {
         navigation.navigate('LikesandShare');
}

const navigateToYourPhotos = ()  =>{
  navigation.navigate('YourPhotos');
}

const navigateToFirstPostNStories = () => {
  navigation.navigate('FirstPostNStories');
}
const navigateToMedremainder = () => {
  navigation.navigate('Medremainder'); 
};// Make sure the screen name matches

  const navigateToFaqs = () => {
    navigation.navigate('Faqs'); // Make sure the screen name matches
  };
  const navigateToExerciseremainder = () => {
    navigation.navigate('Exerciseremainder'); // Make sure the screen name matches
  };

  const navigateToNotifications = () => {
    navigation.navigate('Notifications'); // Make sure the screen name matches
  };

  

  const[darkModeEnabled,setDarkModeEnabled]=useState(false);
  const[wifiEnabled,setWiFiEnabled]=useState(false);
  const[followerRequestEnable,setFollowerRequestEnable]=useState(false);
  const[mentionsEnabled,setMentionsEnabled]=useState(false);
  const[accountSuggestionsEnabled,setAccountSuggestionsEnabled]=useState(false);
  const[messageRequestsEnabled,setMessageRequestsEnabled]=useState(true);
  const[messageRemindersEnabled,setMessageRemindersEnabled]=useState(false);
  const[groupRequestEnabled,setGroupRequestEnabled]=useState(false);
  const[originalAudioEnabled,setOriginalAudioEnabled]=useState(false);
  const[remixesEnabled,setRemixesEnabled]=useState(false);
 // const[recentUploadsEnabled,setRecentUploadsEnabled]=useState(false);
  const[remindersEnabled,setRemindersEnabled]=useState(false);
  const[feedbackEnabled,setFeedbackEnabled]=useState(true);
  const[supportRequestsEnabled,setSupportRequestsEnabled]=useState(false);
  const[unrecognizedLoginsEnabled,setUnrecognizedLoginsEnabled]=useState(false);

  
const handleDarkModeToggle = () => {
  setDarkModeEnabled(previousState => !previousState);
};

const handleWiFiToggle = () => {
  setWiFiEnabled(previousState => !previousState);
};

const handleFollowersToggle = () => {
  setFollowerRequestEnable(previousState => !previousState);
};

const handleMentionsToggle = () => {
  setMentionsEnabled(previousState => !previousState);
};

const handleAccountSuggestionsToggle = () => {
  setAccountSuggestionsEnabled(previousState => !previousState);
};

const handleMessageRequestsToggle = ()  =>{
  setMessageRequestsEnabled(previousState => !previousState);
};

const handleMessageRemindersToggle = () => {
   setMessageRemindersEnabled(previousState => !previousState);
};

const handleGroupRequestToggle = () => {
  setGroupRequestEnabled(previousState => !previousState);
};

const handleOriginalAudioToggle = ()  => {
  setOriginalAudioEnabled(previousState => !previousState)
};

const handleRemixesToggle = () => {
  setRemixesEnabled(previousState => !previousState);
};

// const handleRecentUploadsToggle = () => {
//   setRecentUploadsEnabled(previousState => !previousState);
// };

const handleRemindersToggle = () => {
  setRemindersEnabled(previousState => !previousState);
};

const handleFeedbackToggle = () => {
  setFeedbackEnabled(previousState => !previousState);
};

const handleSupportRequestsToggle = () => {
  setSupportRequestsEnabled(previousState => !previousState);
};

const handleUnrecognizedLoginsToggle = () => {
  setUnrecognizedLoginsEnabled(previousState => !previousState);
};



 
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
      </View> */}
      <View style={styles.section} >

      <View style={styles.sectionHeader}>
           <Text style={styles.sectionHeaderText}>Your account</Text>
         </View>

        

         <View style={styles.sectionBody}>
          <View style={styles.rowWrapperFirst}>
            <View style={styles.rowFirst}>
         <TouchableOpacity onPress={navigateToLikesNComments}>                   
                    <View style={styles.row}>
                      <Text style={styles.rowLabel}>Account Center</Text>
                      
                      <View style={styles.rowSpacer} />                      
                        
                        <FeatherIcon
                          color="#ababab"
                          name="chevron-right"
                          size={22} onPress={navigateToLikesNComments}
                        /> 
                        
                             
                      </View>
                      
           
               </TouchableOpacity>
               </View>
           
               </View>
               </View>
        
         <View style={styles.sectionHeader}>
           <Text style={styles.sectionHeaderText}>Preferences</Text>
         </View>
       
         <View style={styles.sectionBody}>
          <View style={styles.rowWrapperFirst}>
            <View style={styles.rowFirst}>
         <TouchableOpacity onPress={navigateToLikesNComments}>                   
                    <View style={styles.row}>
                      <Text style={styles.rowLabel}>Language</Text>
                      <View style={styles.rowSpacer} />                      
                        <Text style={styles.rowValue}>English</Text> 
                        <FeatherIcon
                          color="#ababab"
                          name="chevron-right"
                          size={22} onPress={navigateToLikesNComments}
                        />      
                      </View>
                      
           
               </TouchableOpacity>
               </View>
           </View>
           <View style={styles.rowWrapper}>
            <View style={styles.rowFirst}>
         <TouchableOpacity onPress={handleWiFiToggle}>                   
                    <View style={styles.row}>
                      <Text style={styles.rowLabel}>Use WiFi</Text>
                      <View style={styles.rowSpacer} />                      
                        <Text style={styles.rowValue}></Text> 
                        <Switch  value={wifiEnabled} onValueChange={setWiFiEnabled}   />      
                      </View>
                                 
               </TouchableOpacity>
               </View>
           </View>
           <View style={styles.rowWrapperLast}>
            <View style={styles.rowFirst}>
         <TouchableOpacity onPress={handleDarkModeToggle}>                   
                    <View style={styles.row}>
                      <Text style={styles.rowLabel}>Dark Mode</Text>
                      <View style={styles.rowSpacer} />                      
                        <Text style={styles.rowValue}></Text> 
                        <Switch  value={darkModeEnabled} onValueChange={setDarkModeEnabled}   />      
                      </View>
                                 
               </TouchableOpacity>
               </View>
           </View>


           </View>
           </View>
         
           
      <View style={styles.section} >
        
         <View style={styles.sectionHeader1}>
           <Text style={styles.sectionHeaderText}>Notification & Preferences</Text>
         </View>
       
         <View style={styles.sectionBody}>
          <View style={styles.rowWrapperFirst}>
            <View style={styles.rowFirst}>
            <TouchableOpacity onPress={navigateToMedremainder}>                   
                
            <View style={styles.row}>
                      <Text style={styles.rowLabel}>Medications Reminders</Text>
                      <View style={styles.rowSpacer} />                      
                        <FeatherIcon
                          color="#ababab"
                          name="chevron-right"
                          size={22} 
                          //onPress={() => navigation.navigate('Medication')}
                          onPress={navigateToMedremainder}
                          style={{ paddingRight: 7}}
                        />      
                      </View>
                      
           
               </TouchableOpacity>
               </View>
           </View>
           <View style={styles.rowWrapper}>
            <View style={styles.rowFirst}>
         <TouchableOpacity onPress={navigateToYourPhotos}>                   
                    <View style={styles.row}>
                      <Text style={styles.rowLabel}>Exercise Reminders</Text>
                      <View style={styles.rowSpacer} />                      
                        <Text style={styles.rowValue}></Text> 
                        <FeatherIcon
                          color="#ababab"
                          name="chevron-right"
                          size={22}
                          onPress={navigateToYourPhotos}
                          style={{ paddingRight: 7}}
                        />       
                      </View>
                                 
               </TouchableOpacity>
               </View>
           </View>
           <View style={styles.rowWrapperLast}>
            <View style={styles.rowFirst}>
         <TouchableOpacity  onPress={navigateToNotifications}>                   
                    <View style={styles.row}>
                      <Text style={styles.rowLabel}>GPS & Location Tracking</Text>
                      <View style={styles.rowSpacer} />                      
                        <Text style={styles.rowValue}></Text> 
                        <FeatherIcon
                          color="#ababab"
                          name="chevron-right"
                          size={22}
                          onPress={navigateToNotifications}
                          style={{ paddingRight: 7}}
                        />      
                      </View>          
                                </TouchableOpacity>
               </View>
           </View>

           <View style={styles.rowWrapper}>
            <View style={styles.rowFirst}>
         <TouchableOpacity onPress={navigateToYourPhotos}>                   
                    <View style={styles.row}>
                      <Text style={styles.rowLabel}> Website Permissions</Text>
                      <View style={styles.rowSpacer} />                      
                        <Text style={styles.rowValue}></Text> 
                        <FeatherIcon
                          color="#ababab"
                          name="chevron-right"
                          size={22}
                          onPress={navigateToYourPhotos}
                          style={{ paddingRight: 7}}
                        />       
                      </View>
                                 
               </TouchableOpacity>
               </View>
           </View>


           </View>
           </View>
         



        <View style={styles.section} >
        
        <View style={styles.sectionHeader1}>
          <Text style={styles.sectionHeaderText}>Health Goals</Text>
        </View>
      
        <View style={styles.sectionBody}>
        <View style={styles.rowWrapperFirst}>
            <View style={styles.rowFirst}>
         <TouchableOpacity onPress={handleFollowersToggle}>                   
                    <View style={styles.row}>
                      <Text style={styles.rowLabel}>Step Counter</Text>
                      <View style={styles.rowSpacer} />                      
                        <Text style={styles.rowValue}></Text> 
                        <Switch  value={followerRequestEnable} onValueChange={setFollowerRequestEnable}   />      
                      </View>
                                 
               </TouchableOpacity>
               </View>
           </View>
          <View style={styles.rowWrapper}>
           <View style={styles.rowFirst}>
           <TouchableOpacity onPress={handleMentionsToggle}>                   
                    <View style={styles.row}>
                      <Text style={styles.rowLabel}>Water Intake Reminder</Text>
                      <View style={styles.rowSpacer} />                      
                        <Text style={styles.rowValue}></Text> 
                        <Switch  value={mentionsEnabled} onValueChange={setMentionsEnabled}   />      
                      </View>
                                 
               </TouchableOpacity>
              </View>
          </View>
          <View style={styles.rowWrapperLast}>
           <View style={styles.rowFirst}>
           <TouchableOpacity onPress={handleAccountSuggestionsToggle}>                   
                    <View style={styles.row}>
                      <Text style={styles.rowLabel}>Calorie Intake Reminder</Text>
                      <View style={styles.rowSpacer} />                      
                        <Text style={styles.rowValue}></Text> 
                        <Switch  value={accountSuggestionsEnabled} onValueChange={setAccountSuggestionsEnabled}   />      
                      </View>
                                 
                 
            </TouchableOpacity>
              </View>
          </View>


          </View>
          </View>
     





          <View style={styles.section} >
        
        <View style={styles.sectionHeader1}>
          <Text style={styles.sectionHeaderText}>Messages</Text>
        </View>
      
        <View style={styles.sectionBody}>
        <View style={styles.rowWrapperFirst}>
            <View style={styles.rowFirst}>
         <TouchableOpacity onPress={handleMessageRequestsToggle}>                   
                    <View style={styles.row}>
                      <Text style={styles.rowLabel}>Message Requests</Text>
                      <View style={styles.rowSpacer} />                      
                        <Text style={styles.rowValue}></Text> 
                        <Switch  value={messageRequestsEnabled} onValueChange={setMessageRequestsEnabled}   />      
                      </View>
                                 
               </TouchableOpacity>
               </View>
           </View>
          <View style={styles.rowWrapper}>
           <View style={styles.rowFirst}>
           <TouchableOpacity onPress={handleMessageRemindersToggle}>                   
                    <View style={styles.row}>
                      <Text style={styles.rowLabel}>Message Reminder</Text>
                      <View style={styles.rowSpacer} />                      
                        <Text style={styles.rowValue}></Text> 
                        <Switch  value={messageRemindersEnabled} onValueChange={setMessageRemindersEnabled}   />      
                      </View>
                                 
               </TouchableOpacity>
              </View>
          </View>
          <View style={styles.rowWrapperLast}>
           <View style={styles.rowFirst}>
           <TouchableOpacity onPress={handleGroupRequestToggle}>                   
                    <View style={styles.row}>
                      <Text style={styles.rowLabel}>Group Requests</Text>
                      <View style={styles.rowSpacer} />                      
                        <Text style={styles.rowValue}></Text> 
                        <Switch  value={groupRequestEnabled} onValueChange={setGroupRequestEnabled}   />      
                      </View>
                                 
                 
            </TouchableOpacity>
              </View>
          </View>


          </View>
          </View>
     




          <View style={styles.section} >
        
        <View style={styles.sectionHeader1}>
          <Text style={styles.sectionHeaderText}>Live & Reels</Text>
        </View>
      
        <View style={styles.sectionBody}>
        <View style={styles.rowWrapperFirst}>
            <View style={styles.rowFirst}>
         <TouchableOpacity onPress={handleOriginalAudioToggle}>                   
                    <View style={styles.row}>
                      <Text style={styles.rowLabel}>Original Audio</Text>
                      <View style={styles.rowSpacer} />                      
                        <Text style={styles.rowValue}></Text> 
                        <Switch  value={originalAudioEnabled} onValueChange={setOriginalAudioEnabled}   />      
                      </View>
                                 
               </TouchableOpacity>
               </View>
           </View>
          <View style={styles.rowWrapper}>
           <View style={styles.rowFirst}>
           <TouchableOpacity onPress={handleRemixesToggle}>                   
                    <View style={styles.row}>
                      <Text style={styles.rowLabel}>Remixes</Text>
                      <View style={styles.rowSpacer} />                      
                        <Text style={styles.rowValue}></Text> 
                        <Switch  value={remixesEnabled} onValueChange={setRemixesEnabled}   />      
                      </View>
                                 
               </TouchableOpacity>
              </View>
          </View>
          <View style={styles.rowWrapperLast}>
           <View style={styles.rowFirst}>
           <TouchableOpacity onPress={navigateToYourPhotos} > 
                              
                    <View style={styles.row}>
                      <Text style={styles.rowLabel}>Recent Uploads</Text>
                      <View style={styles.rowSpacer} />                      
                        <Text style={styles.rowValue}></Text> 
                        <FeatherIcon
                          color="#ababab"
                          name="chevron-right"
                          size={22}
                          onPress={navigateToYourPhotos}
                          style={{ paddingRight: 7}}
                        />        
                      </View>
                                 
                 
            </TouchableOpacity>
              </View>
          </View>


          </View>
          </View>
     




          <View style={styles.section} >
        
        <View style={styles.sectionHeader1}>
          <Text style={styles.sectionHeaderText}>From Instagram</Text>
        </View>
      
        <View style={styles.sectionBody}>
        <View style={styles.rowWrapperFirst}>
            <View style={styles.rowFirst}>
         <TouchableOpacity onPress={handleRemindersToggle}>                   
                    <View style={styles.row}>
                      <Text style={styles.rowLabel}>Reminders & Notification</Text>
                      <View style={styles.rowSpacer} />                      
                        <Text style={styles.rowValue}></Text> 
                        <Switch  value={remindersEnabled} onValueChange={setRemindersEnabled}   />      
                      </View>
                                 
               </TouchableOpacity>
               </View>
           </View>
          <View style={styles.rowWrapper}>
           <View style={styles.rowFirst}>
           <TouchableOpacity onPress={handleFeedbackToggle}>                   
                    <View style={styles.row}>
                      <Text style={styles.rowLabel}>Product Launch & Feedbacks</Text>
                      <View style={styles.rowSpacer} />                      
                        <Text style={styles.rowValue}></Text> 
                        <Switch  value={feedbackEnabled} onValueChange={setFeedbackEnabled}   />      
                      </View>
                                 
               </TouchableOpacity>
              </View>
          </View>
          <View style={styles.rowWrapper}>
           <View style={styles.rowFirst}>
           <TouchableOpacity onPress={handleSupportRequestsToggle}>                   
                    <View style={styles.row}>
                      <Text style={styles.rowLabel}>Support Requests</Text>
                      <View style={styles.rowSpacer} />                      
                        <Text style={styles.rowValue}></Text> 
                        <Switch  value={supportRequestsEnabled} onValueChange={setSupportRequestsEnabled}   />      
                      </View>
                                 
               </TouchableOpacity>
              </View>
          </View>
          <View style={styles.rowWrapper}>
           <View style={styles.rowFirst}>
           <TouchableOpacity onPress={handleUnrecognizedLoginsToggle}>                   
                    <View style={styles.row}>
                      <Text style={styles.rowLabel}>Unrecognized Logins</Text>
                      <View style={styles.rowSpacer} />                      
                        <Text style={styles.rowValue}></Text> 
                        <Switch  value={unrecognizedLoginsEnabled} onValueChange={setUnrecognizedLoginsEnabled}   />      
                      </View>
                                 
                 
            </TouchableOpacity>
              </View>
          </View>


          <View style={styles.rowWrapper}>
            <View style={styles.rowFirst}>
         <TouchableOpacity onPress={navigateToYourPhotos}>                   
                    <View style={styles.row}>
                      <Text style={styles.rowLabel}>Time Spent</Text>
                      <View style={styles.rowSpacer} />                      
                        <Text style={styles.rowValue}></Text> 
                        <FeatherIcon
                          color="#ababab"
                          name="chevron-right"
                          size={22}
                          onPress={navigateToYourPhotos}
                          style={{ paddingRight: 7}}
                        />       
                      </View>
                                 
               </TouchableOpacity>
               </View>
           </View>


          <View style={styles.rowWrapperLast}>
           <View style={styles.rowFirst}>
           <TouchableOpacity  onPress={navigateToFaqs}> 
                              
                    <View style={styles.row}>
                      <Text style={styles.rowLabel}>FAQs</Text>
                      <View style={styles.rowSpacer} />                      
                        <Text style={styles.rowValue}></Text> 
                        <FeatherIcon
                          color="#ababab"
                          name="chevron-right"
                          size={22}
                          onPress={navigateToFaqs}
                          style={{ paddingRight: 7}}
                        />        
                      </View>
                                 
                 
            </TouchableOpacity>
              </View>
          </View>


          </View>
          </View>
     
   </SafeAreaView>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    
     backgroundColor: '#f8f8f8',
    paddingVertical: 20,
    
    
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
  },
 
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f1f1f',
  },
  section: {
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  subSection:{
    
    paddingVertical: 0,
  },
  sectionHeader: {
    padding: 8,
    paddingTop:10,
    paddingLeft: 12,
  },
  sectionHeader1: {
    
    padding: 8,
    paddingLeft: 12,
  },
  sectionHeaderText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#adadad',
    textTransform: 'uppercase',
  },
  
  sectionBody: {
    borderRadius: 12,
      shadowColor: 'rgba(0,0,0,0.25)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  profile: {
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 9999,
    marginRight: 12,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#292929',
  },
  profileHandle: {
    marginTop: 2,
    fontSize: 16,
    fontWeight: '400',
    color: '#858585',
  },
  profileAction: {
    marginTop: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    borderRadius: 12,
  },
  profileActionText: {
    marginRight: 8,
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  profileHandle: {
    marginTop: 2,
    fontSize: 16,
    fontWeight: '400',
    color: '#858585',
  },
  profileAction: {
    marginTop: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    borderRadius: 12,
  },
  profileActionText: {
    marginRight: 8,
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  rowLabel: {
    fontSize: 17.6,
    color: '#000',
   fontStyle:'normal',
    
   },
  rowValue: {
    fontSize: 17,
    color: '#ababab',
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  rowWrapper: {
   paddingLeft:24,
   borderTopWidth:0,
   borderRadius:1,
   borderColor: '#f8f8f8',
   backgroundColor:'#fff',
   borderBottomWidth: 2,
    
  },
  rowWrapperFirst: {
    paddingLeft:24,
    borderTopWidth:0,    
    borderColor: '#f8f8f8',
    backgroundColor:'#fff',
    borderBottomWidth: 2, 
    borderTopLeftRadius:12,
    borderTopRightRadius:12,
   },
   rowWrapperLast: {
    paddingLeft:24,
    borderTopWidth:0,    
    borderColor: '#f8f8f8',
    backgroundColor:'#fff',
    borderBottomWidth: 2, 
    borderBottomLeftRadius:12,
    borderBottomRightRadius:12,
   },
  row: {
    height:58,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 13,
    paddingRight: 12,
    paddingBottom: 13,
    paddingLeft: 0,
    
    
    
    
  },
  rowFirst: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    
  },
  rowLast: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  }
  
);
  
