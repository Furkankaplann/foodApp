import React, {useState} from 'react';
import {TextInput, StyleSheet, View, Text, Alert} from 'react-native';
import {Button} from 'react-native-elements';
import {parameters} from '../../global/styles';

import { useNavigation } from '@react-navigation/native';

const CreateAccountScreen = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const validateEmail = (text) => {
    setEmail(text.replace(/[^a-zA-Z0-9@._-]/g, ''));
  };

  const validatePhone = (text) => {
    setPhone(text.replace(/[^0-9]/g, ''));
  };

  const handleCreateAccount = () => {
    if (!name || !surname || !email || !phone || !password) {
      Alert.alert('Error', 'Please fill in all required fields.');
    } else {
      navigation.navigate('HomePageScreen');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Surname"
        value={surname}
        onChangeText={setSurname}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => validateEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={validatePhone}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <View style={{marginVertical: 20}}>
        <Button
          title="Create Account"
          buttonStyle={parameters.styledButton}
          titleStyle={parameters.buttonTitle}
          onPress={handleCreateAccount}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#ff8c52',
  },
  input: {
    width: '80%',
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginHorizontal: 15,
  },
});

export default CreateAccountScreen;
