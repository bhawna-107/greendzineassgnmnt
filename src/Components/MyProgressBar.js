// import React from 'react';
// import { StyleSheet, View } from 'react-native';
// import ProgressBar from 'react-native-progress/Bar';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// const MyProgressBar = () => {
//   // Define the progress value (between 0 and 1)
//   const progress = 0.1; // Example: 50%

//   return (
//     <View style={styles.container}>
//       {/* Use the ProgressBar component with the progress prop */}
//       <ProgressBar
//         progress={progress}
//         width={wp(50)}
//         height={hp(2)}
//         color="#00FF00"
//         unfilledColor= 'red'
//         borderColor="#CCCCCC" // Border color
//         borderWidth={5} // Border width
//         borderRadius={hp(1)} // Border radius
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default MyProgressBar;


import React from 'react';
import { StyleSheet, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const MyProgressBar = ({ progress }) => {
  // Calculate the width of the filled portion
  const filledWidth = `${progress * 100}%`;

  return (
    <View style={styles.container}>
      {/* Unfilled portion */}
      <View style={[styles.progressBar, styles.unfilled]} />
      {/* Filled portion */}
      <View style={[styles.progressBar, { width: filledWidth }, styles.filled]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: hp(1.5), // Adjust as needed
    width: wp(80),

    // backgroundColor: '#CCCCCC', // Background color of the progress bar
    borderRadius: 5, // Border radius
    overflow: 'hidden', // Ensure that overflow is hidden
  },
  progressBar: {
    height: '100%',
    borderRadius: 5, // Border radius
  },
  // unfilled: {
  //   backgroundColor: 'black', // Color of the unfilled portion
  // },
  filled: {
    backgroundColor: 'green', // Color of the filled portion
  },
});

export default MyProgressBar;

