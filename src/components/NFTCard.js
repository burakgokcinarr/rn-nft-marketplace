import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';
import { Font, Theme } from '../constants';

export default function NFTCard({ item }) {

  const { width, height } = useWindowDimensions();
    
  return (
    <View style={{ ...styles.card, width: width * 0.9 }}>
        <Image
          style={{ ...styles.image, width: width }}
          source={item.uri}
          contentFit="cover"
          transition={100}
        />
        <Text style={styles.title}>{item.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        //width: 350,
        height: 200,
        marginHorizontal: 5,
        borderRadius: 50,
        overflow: 'hidden',
        alignItems: 'center'
    },
    image: {
        //width: 350,
        height: 200,
        backgroundColor: '#0553',
    },
    title: {
        fontSize: 30,
        fontFamily: Font.extraBold,
        textAlign: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 6,
        color: Theme.WHITE_COLOR
    }
})