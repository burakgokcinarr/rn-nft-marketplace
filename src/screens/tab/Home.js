import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { FlashList } from "@shopify/flash-list";
import { DATA_1, DATA_2 } from '../../dummy/Data';
import { Theme, Font } from '../../constants'
import { NFTCard, TrendCard } from '../../components';

export default function Home() {

  return (
    <View style={styles.container}>
      <ScrollView nestedScrollEnabled={true}>
        <FlashList
            data={DATA_1}
            renderItem={({ item }) => <NFTCard item={item}/>}
            estimatedItemSize={200}
            horizontal
            //pagingEnabled
            showsHorizontalScrollIndicator={false}
          />
        <Text style={styles.title}>Trending Collections</Text>
        <FlashList
          data={DATA_2}
          renderItem={({ item }) => <TrendCard item={item}/>}
          estimatedItemSize={200}
          horizontal
          //pagingEnabled
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.title}>Top Seller</Text>
        <FlashList
          data={DATA_2}
          renderItem={({ item }) => <TrendCard item={item}/>}
          estimatedItemSize={200}
          horizontal
          //pagingEnabled
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.title}>The Best</Text>
        <FlashList
          data={DATA_2}
          renderItem={({ item }) => <TrendCard item={item}/>}
          estimatedItemSize={200}
          horizontal
          //pagingEnabled
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    gap: 5,
    backgroundColor: Theme.CARD_BG_COLOR
  },
  title: {
    fontSize: 25,
    fontFamily: Font.extraBold,
    color: Theme.WHITE_COLOR,
    marginVertical: 5
}
})