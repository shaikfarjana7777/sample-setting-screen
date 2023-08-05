import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, LayoutAnimation } from 'react-native';

const FAQItem = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={styles.faqItem}>
      <TouchableOpacity activeOpacity={0.8} onPress={toggleExpansion}>
        <View style={styles.faqHeader}>
          <Text style={styles.faqQuestion}>{question}</Text>
          <Text style={styles.faqExpand}>{expanded ? '-' : '+'}</Text>
        </View>
      </TouchableOpacity>
      {expanded && <Text style={styles.faqAnswer}>{answer}</Text>}
    </View>
  );
};

const FAQScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Frequently Asked Questions</Text>
      <FAQItem
        question="How do I change my profile picture?"
        answer="To change your profile picture, go to the Settings screen, tap on the Profile section, and select the 'Change Profile Picture' option."
      />
      <FAQItem
        question="Can I delete messages?"
        answer="Yes, you can delete messages in a chat. Press and hold the message you want to delete, then tap on the 'Delete' option."
      />
      <FAQItem
        question="How can I mute a conversation?"
        answer="To mute a conversation, open the chat, tap on the contact's name or group name, and select the 'Mute' option. You can choose to mute it for a specified duration or indefinitely."
      />

     <FAQItem
        question="How can I mute a conversation?"
        answer="To mute a conversation, open the chat, tap on the contact's name or group name, and select the 'Mute' option. You can choose to mute it for a specified duration or indefinitely."
      />

      <FAQItem
        question="How can I mute a conversation?"
        answer="To mute a conversation, open the chat, tap on the contact's name or group name, and select the 'Mute' option. You can choose to mute it for a specified duration or indefinitely."
      />
      {/* Add more FAQItems as needed */}
    </ScrollView>
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
  faqItem: {
    marginBottom: 16,
  },
  faqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  faqQuestion: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  faqExpand: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  faqAnswer: {
    marginTop: 8,
    fontSize: 14,
    color: '#555',
  },
});

export default FAQScreen;
