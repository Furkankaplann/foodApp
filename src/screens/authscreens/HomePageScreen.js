import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const HomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.slideContainer}>
        <Swiper autoplay={true} showsPagination={false}>
          <View style={styles.slide}>
            <Image
              source={{
                uri: 'https://cdnuploads.aa.com.tr/uploads/Contents/2021/07/28/thumbs_b_c_fc7c22900c996545639aefa76dd36fc1.jpg?v=160810',
              }}
              style={styles.image}
            />
          </View>

          <View style={styles.slide}>
            <Image
              source={{
                uri: 'https://img-s1.onedio.com/id-61b9941c833a35232269c58e/rev-0/w-620/f-jpg/s-bc6ff264e4f89b3afa6ce2c7a606d83fc6a83955.jpg',
              }}
              style={styles.image}
            />
          </View>

          <View style={styles.slide}>
            <Image
              source={{
                uri: 'https://yemekyapin.com/uploads/tarif/25810icli-kofte-tarifi-h1529235353-0bd5a2.jpg',
              }}
              style={styles.image}
            />
          </View>

          <View style={styles.slide}>
            <Image
              source={{
                uri: 'https://www.antepsofrasi.com/wp-content/uploads/2020/12/icli-kofte-disi-etli-tarifi-tAQF6IaW.jpg',
              }}
              style={styles.image}
            />
          </View>
        </Swiper>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slideContainer: {
    width,
    height: width,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
  },
});

export default HomePage;