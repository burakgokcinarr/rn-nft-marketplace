import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur'
import { Font, Theme } from '../constants'

export default function OnboardingBlurView({ title = '', description = '', onClicked = null }) {
  return (
    <BlurView intensity={50} style={styles.blurContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{description}</Text>
        <BlurView intensity={70} style={styles.button}>
            <Button
                title='Get started now'
                onPress={onClicked}
                color={Theme.WHITE_COLOR}
            />
        </BlurView>
    </BlurView>
  )
}

const styles = StyleSheet.create({
    blurContainer: {
        padding: 20,
        borderRadius: 16,
        overflow: 'hidden',
        gap: 10
    },  
    title: {
        fontSize: 20,
        fontFamily: Font.bold,
        color: Theme.WHITE_COLOR,
        textAlign: 'center'
    },
    desc: {
        fontSize: 14,
        fontFamily: Font.regular,
        color: Theme.DARK_COLOR,
        textAlign: 'center'
    },
    button: {
        padding: 3,
        alignSelf: 'center',
        borderRadius: 20,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: Theme.WHITE_COLOR
    }
})