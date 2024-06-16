import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageBackground } from 'expo-image';
import { Font, Theme } from '../constants'
import { OnboardingBlurView } from '../components';
import { useNavigation } from '@react-navigation/native';

const BG_IMAGE = require('../../assets/onboarding.png');

export default function Onboarding() {

  const navigation = useNavigation();

  const getStartedBtnClicked = () => {
    //alert("started")
    navigation.navigate('tab');
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={BG_IMAGE}
        style={styles.image}>
        <Text style={styles.title}>Welcome to NFT Marketplace</Text>
        <OnboardingBlurView 
          title='Explore and Mint NFTs' 
          description='You can buy and sell the NTFs of the best artists in the world.'
          onClicked={getStartedBtnClicked}
        />
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    ...StyleSheet.absoluteFill,
    resizeMode: 'cover',
    padding: 10,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 40,
    fontFamily: Font.extraBold,
    color: Theme.WHITE_COLOR,
  }
});