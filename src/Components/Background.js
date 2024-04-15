import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Background = ({ children }) => {
  return (
    <View style = {styles.container} >
        <View style= {{ position: "absolute"}}>
            { children }
        </View>
    </View>
  )
}

export default Background;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
});