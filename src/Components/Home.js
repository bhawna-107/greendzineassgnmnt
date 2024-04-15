import { Image, StyleSheet, Text, View} from 'react-native'
import React, { useState } from 'react'
import MyProgressBar from './MyProgressBar'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Background from './Background';
import { green } from '../constants';


const Home = () => {

  return (
    <Background>
    <View>
          <View style={{ alignSelf:'flex-end', marginTop: hp(2),marginRight: wp(5), }}>
            <Image source={require('../assets/homeuserlogo.png')} style={{width: wp(15), height: hp(5)}}/>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('../assets/homelogo.png')} />
          <View style={{position:'absolute', right: wp(35), top: hp(-2), backgroundColor:'#5E5E5EB5', borderRadius: wp(5), paddingHorizontal: wp(2.5), paddingVertical: wp(1.5), width: wp(8), height: hp(4), }}><Text style={{color:'green', fontWeight:'bold', fontSize: wp(4), }}>4</Text></View>

          </View>
        </View>
      <View style={styles.container}>
        <View style ={{marginTop: hp(0), paddingVertical: hp(2), borderRadius: wp(15), justifyContent: 'center', alignItems: 'center', fontSize: hp(2), width: wp(92), backgroundColor: '#1A2C2C99', position: 'absolute', top: hp(0) }}>
        <Text style= {{color:'white', }}>Employee Productivity Dashboard</Text>
        </View>
      
      <View style={styles.example}>
          <View style= {styles.box}>
            <Text style= {{color:'white', }}> Productivity on Monday</Text>
            <Text style= {{color:green}}>4%</Text>
            </View>
          <MyProgressBar progress={0.04} />
        </View>
      
        <View style={styles.example}>
          <View style= {styles.box}>
            <Text style= {{color:'white', }}> Productivity on Tuesday</Text>
            <Text style= {{color:green}}>92%</Text>
            </View>
          <MyProgressBar progress={92} />
        </View>
      
        <View style={styles.example}>
          <View style= {styles.box}>
            <Text style= {{color:'white', }}> Productivity on Wednesday</Text>
            <Text style= {{color:green}}>122%</Text>
            </View>
          <MyProgressBar progress={1.22} />
        </View>
      
        <View style={styles.example}>
          <View style= {styles.box}>
            <Text style= {{color:'white', }}> Productivity on Thursday</Text>
            <Text style= {{color:green}}>93%</Text>
            </View>
          <MyProgressBar progress={0.93} />
        </View>

        <View style={styles.example}>
          <View style= {styles.box}>
            <Text style= {{color:'white', }}> Productivity on Friday</Text>
            <Text style= {{color:green}}>89%</Text>
            </View>
            <View style={styles.progressContainer}>
             <MyProgressBar progress={0.89}  />
            </View>       
         </View>
      
        <View style={styles.example}>
          <View style= {styles.box}>
            <Text style= {{color:'white', }}> Productivity on Saturday</Text>
            <Text style= {{color:green}}>98%</Text>
            </View>
            <MyProgressBar progress={0.98} style={{width: wp(50)}} />
        </View>
        </View>
      {/* </View> */}
      </Background>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(5),
    backgroundColor: '#5E5E5E82',
    opacity: 0.5,
    borderRadius: hp(2.5),
    width: wp(92),
    marginHorizontal: wp(4),
    paddingTop: hp(10),
    paddingBottom: hp(5)

  },
  box: {
    flexDirection: 'row',
        marginBottom: hp(1),
        width: wp(78),
        justifyContent:'space-between',
        paddingLeft: wp(3),

  },
  example: {
    flexDirection:'column',
    marginVertical: hp(1.2),
    marginHorizontal: wp(10),
    justifyContent:'space-between'
  },
  progress: {
    width: '10%', // Adjusted style for ProgressBar
  },
  progressContainer: {
    width: wp(40), // Adjust the width here (60%)
},
});