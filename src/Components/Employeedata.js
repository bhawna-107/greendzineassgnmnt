import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Background from './Background';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const EmployeeScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredEmployees, setFilteredEmployees] = useState([]);

    const employeeData = [
        { EMPID: 1, Name: 'John Doe', DOB: '16-11-2000', Role: 'HR' },
        { EMPID: 2, Name: 'Jane Smith', DOB: '17-10-2001', Role: 'IT' },
        { EMPID: 3, Name: 'Alice Johnson',DOB: '11-12-2000', Role: 'Finance' },
        { EMPID: 4, Name: 'Alice Johnson', DOB: '18-1-1999', Role: 'Finance' },
        // Add more employee data
    ];
    // Initially show all employees
    useState(() => {
      setFilteredEmployees(employeeData);
  }, []);


    const handleSearch = () => {
        // Filter employee data based on the search query
        const filteredData = employeeData.filter(employee =>
            employee.Name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredEmployees(filteredData);
        console.log(filteredEmployees);
    };

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
            <TextInput
                style={styles.input}
                placeholder="Search with name"
                placeholderTextColor={'white'}
                value={searchQuery}
                onChangeText={setSearchQuery}
                
            />
            <TouchableOpacity onPress= {handleSearch} style= {{position: 'absolute', top: hp(4),  left: wp(75) }}>
            <Image source={require('../assets/search.png')}  style= {{ width: wp(11), height: hp(5)}} />

            </TouchableOpacity>

            <FlatList
                data={filteredEmployees}
                keyExtractor={item => item.EMPID.toString()}
                renderItem={({ item }) => (
                    <View style={styles.cardContainer}>
                      <View style={styles.card}>
                      <Text style={{color: 'white',}}><Text style = {{width: wp(5), marginHorizontal: wp(3),}}>
                      EMPID:</Text> {item.EMPID}</Text>
                        <Text style={{color: 'white', paddingTop: hp(3),}}>Name: {item.Name}</Text>
                        <Text style={{color: 'white', paddingTop: hp(3),color:'orange'}}>DOB: {item.DOB}</Text>
                        <Text style={{color: 'white', paddingTop: hp(3), color:'green'}}>Role: {item.Role}</Text>
                        </View>
                    </View>
                )}
                contentContainerStyle={styles.contentContainer}

            />
        </View>
        </Background>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        color:'white',
    },
    input: {
        marginBottom: 10,
        padding: hp(2),
        backgroundColor:'#5E5E5E82',
        borderWidth: 1,
        borderRadius: wp(15),
        color:'white',
        width: wp(90),
        paddingLeft: wp(4),
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems:"center",
    },
    cardContainer: {
        marginVertical: hp(2),
        padding: hp(2),
        borderWidth: 1,
        borderRadius: hp(10),
        color:'white',
        width: wp(90),
        backgroundColor:'#5E5E5E82',
        borderRadius: wp(2),
    },
    card: {
      // paddingVertical: hp(1),
      // paddingVertical: hp(5),
    },
    contentContainer: {
      flexGrow: 1,
  },
});


export default EmployeeScreen;
