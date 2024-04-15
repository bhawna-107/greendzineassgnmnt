import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import React, { useState } from 'react'
import Background from './Background'
import { green } from '../constants'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Login = ({navigation}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    console.log(email);
    console.log(password);

    const handleLogin = () => {
        if(email === "anyoneuser111@gmail.com" && password === "anyoneuser"){
            Alert.alert(`Thank You ${email}`);
            navigation.navigate('Dashboard');
        }else{
            Alert.alert(`email and password not correct`);
        }
    }
  return (
    <Background>
        <View style= {styles.container}>
            <Image source={require('../assets/loginlogo.png')} style={styles.image}/>

            <Text style= {{color: '#36A546CC', opacity: 1, marginVertical: hp(5), fontSize: hp(2), opacity:1}}>We are Electric</Text>
            <TextInput style = {styles.textInput}
            placeholder="E-mail"
            placeholderTextColor="#FFFFFFB3"
            value={email}
            onChangeText={(email) => setEmail(email)} />
            

          <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor="#FFFFFFB3"
          secureTextEntry={true}
          value= {password}
          onChangeText={(password) => setPassword(password)}
        />
            <TouchableOpacity style={styles.btn} onPress={handleLogin}>
                <Text style= {styles.text}>
                    Login
                </Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style= {{color: green, marginTop: hp(3), fontSize: hp(2)}}>
                    Forgot password?
                </Text>
            </TouchableOpacity>

        </View>
    </Background>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal: 10,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        marginTop: hp(23),
       
    },
    btn: {
        padding: 13,
        borderRadius: wp(50),
        width: wp(70),
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: wp(13),
        backgroundColor: green, // Use backgroundColor instead of background
        borderWidth: 2, // Use borderWidth instead of border
        borderColor: '#8CFF0026', // Specify the border color
        opacity: 1,
        marginTop: hp(4),
        color: 'white',
      },
      textInput : {
        backgroundColor: '#1F1919', // Background color
        opacity: 0.6, // Opacity (value between 0 and 1)
        shadowColor: '#4A494947', // Box shadow color
        shadowOffset: { width: 0, height: 0 }, // Box shadow offset
        shadowOpacity: 0.5, // Box shadow opacity (value between 0 and 1)
        shadowRadius: 3, // Box shadow blur radius
        elevation: 3, // Android-specific elevation (for shadow)
        borderRadius: wp(50),
        width: wp(70),
        marginHorizontal: wp(12),
        marginVertical: hp(2),
        paddingLeft: wp(4),
        paddingVertical: hp(1.5),
        fontSize: hp(3),
      },
    text: {
        color: '#FFFFFF8C',
        opacity: 1,
        fontSize: hp(2),
        fontWeight: 'bold',
    }
})