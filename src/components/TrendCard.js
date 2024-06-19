import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';
import { Font, Theme } from '../constants';

export default function TrendCard({ item }) {

  const { width, height } = useWindowDimensions();
    
  return (
    <View style={{ ...styles.card, width: width * 0.8 }}>
        <Image
          style={{ ...styles.image, width: width }}
          source={item.uri}
          contentFit="cover"
          transition={100}
        />
       <View style={styles.subView}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.title}>{item.like}</Text>
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        //width: 350,
        height: 200,
        marginHorizontal: 5
    },
    image: {
        //width: 350,
        height: 150,
        borderRadius: 30
    },
    title: {
        fontSize: 13,
        fontFamily: Font.extraBold,
        textAlign: 'center',
        color: Theme.WHITE_COLOR
    },
    subView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})