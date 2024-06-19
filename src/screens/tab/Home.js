import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { FlashList } from "@shopify/flash-list";
import { DATA_1, DATA_2 } from '../../dummy/Data';
import { Theme, Font } from '../../constants'
import { NFTCard } from '../../components';

export default function Home() {

  return (
    <View style={styles.container}>
      <View style={{ flex:1 }}>
        <FlashList
          data={DATA_1}
          renderItem={({ item }) => <NFTCard item={item}/>}
          estimatedItemSize={200}
          horizontal
          //pagingEnabled
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={{ flex:1 }}>
        <Text style={styles.title}>Trending Collections</Text>
        
      </View>
      <View style={{flex:1, backgroundColor: 'blue'}}>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 6,
    backgroundColor: Theme.CARD_BG_COLOR
  },
  title: {
    fontSize: 25,
    fontFamily: Font.extraBold,
    color: Theme.WHITE_COLOR
}
})