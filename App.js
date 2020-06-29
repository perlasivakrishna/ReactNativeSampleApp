/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NativeModules,
     NativeEventEmitter
  } from 'react-native'

const CounterEvents = new NativeEventEmitter(NativeModules.Counter)
function Separator() {
  return <View style={styles.separator} />;
}


const App: () => React$Node = () => {
//   console.log('test console2');
//   console.log(NativeModules.Counter)
//   CounterEvents.addListener(
//     "onIncrement",
//     res => console.log("onIncrement event", res)
//   )
//   NativeModules.Counter.increment()
//   NativeModules.Counter.getCount(value => {
//   console.log("count is " + value)
// })
//
// function decrement() {
//   NativeModules.Counter.decrement()
//     .then(res => console.log(res))
//     .catch(e => console.log(e.message, e.code))
// }
// decrement()
// decrement()


return (
   <SafeAreaView style={styles.container}>
     <View>
       <Text style={styles.title}>
         The title and onPress handler are required. It is recommended to set
         accessibilityLabel to help make your app usable by everyone.
       </Text>
       <Button
         title="Press me"
         onPress={() => Alert.alert('Simple Button pressed')}
       />
     </View>
     <Separator />
     <View>
       <Text style={styles.title}>
         Adjust the color in a way that looks standard on each platform. On
         iOS, the color prop controls the color of the text. On Android, the
         color adjusts the background color of the button.
       </Text>
       <Button
         title="Press me"
         color="#f194ff"
         onPress={() => Alert.alert('Button with adjusted color pressed')}
       />
     </View>
     <Separator />
     <View>
       <Text style={styles.title}>
         All interaction for the component are disabled.
       </Text>
       <Button
         title="Press me"
         disabled
         onPress={() => Alert.alert('Cannot press this one')}
       />
     </View>
     <Separator />
     <View>
       <Text style={styles.title}>
         This layout strategy lets the title define the width of the button.
       </Text>
       <View style={styles.fixToText}>
         <Button
           title="Left button"
           onPress={() => Alert.alert('Left button pressed')}
         />
         <Button
           title="Show Native View"
           onPress={() => NativeModules.ViewManagerBridge.changeToNativeView({ "id": "2","releaseYear": "1985",
  "title": "Back to the Future"
 }) }
         />
       </View>
     </View>
   </SafeAreaView>
 );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 44,
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

export default App;
