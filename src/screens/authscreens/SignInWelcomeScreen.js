import React, {useState, useRef, useEffect} from 'react';

import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {colors, parameters, title} from '../../global/styles';
import * as Animatable from 'react-native-animatable';
import {Icon, Button, SocialIcon} from 'react-native-elements';
import Swiper from 'react-native-swiper';
import {useNavigation} from '@react-navigation/native';

const { width } = Dimensions.get('window');


export default function SignInWelcomeScreen() {


  

  const navigation = useNavigation();
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(showText => !showText);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 3,
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingTop: 20,
          width,
          height: width,
        }}>
        <Text style={[styles.textBlink, {display: showText ? 'none' : 'flex'}]}>
          DISCOVER RESTUARANTS
        </Text>
        <Text style={[styles.textBlink, {display: showText ? 'none' : 'flex'}]}>
          IN YOUR AREA
        </Text>
      </View>

      <View style={{flex: 4, justifyContent: 'center'}}>
        <Swiper autoplay={true} showsPagination={false}> 
          <View style={styles.slide1}>
            <Image
              source={{
                uri: 'https://cdnuploads.aa.com.tr/uploads/Contents/2021/07/28/thumbs_b_c_fc7c22900c996545639aefa76dd36fc1.jpg?v=160810',
              }}
              style={styles.image}
            />
          </View>

          <View style={styles.slide2}>
            <Image
              source={{
                uri: 'https://img-s1.onedio.com/id-61b9941c833a35232269c58e/rev-0/w-620/f-jpg/s-bc6ff264e4f89b3afa6ce2c7a606d83fc6a83955.jpg',
              }}
              style={styles.image}
            />
          </View>

          <View style={styles.slide2}>
            <Image
              source={{
                uri: 'https://yemekyapin.com/uploads/tarif/25810icli-kofte-tarifi-h1529235353-0bd5a2.jpg',
              }}
              style={styles.image}
            />
          </View>

          <View style={styles.slide3}>
            <Image
              source={{
                uri: 'https://www.antepsofrasi.com/wp-content/uploads/2020/12/icli-kofte-disi-etli-tarifi-tAQF6IaW.jpg',
              }}
              style={styles.image}
            />
          </View>

          </Swiper>
          </View>

    <View style={{flex: 4, justifyContent: 'flex-end', marginBottom: 20}}>
        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <Button
            title="SIGN IN"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
            onPress={() => navigation.navigate('SignInScreen')}
          />
        </View>

        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <Button
            title="Create An Account"
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonTitle}
            onPress={() => navigation.navigate('CreateAccountScreen')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#99DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  textBlink: {
    fontSize: 20,
    color: colors.buttons,
    fontWeight: 'bold',
  },
  createButton: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 40,
    paddingHorizontal: 20,
    borderColor: colors.buttons,
  },

  createButtonTitle: {
    color: colors.grey1,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
 
  image: {
    height: '100%',
    width: '100%',
  },
});
