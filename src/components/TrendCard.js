import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { Image } from 'expo-image';
import { Font, Theme } from '../constants';
import { AntDesign } from '@expo/vector-icons';

export default function TrendCard({ item }) {

  const { width, height } = useWindowDimensions();
    
  return (
    <View style={{ ...styles.card, width: width * 0.5 }}>
        <Image
          style={{ ...styles.image }}
          source={item.uri}
          contentFit="cover"
          transition={100}
        />
       <View style={styles.subView}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.likeView}>
          <AntDesign name="heart" size={17} color={Theme.RED_COLOR} />
          <Text style={styles.title}>{item.like}</Text>
        </View>
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        //width: 350,
        height: 200,
        marginHorizontal: 5,
        overflow: 'hidden'
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
        justifyContent: 'space-around',
        marginVertical: 5
    },
    likeView: {
      flexDirection: 'row',
      gap: 5
    }
})