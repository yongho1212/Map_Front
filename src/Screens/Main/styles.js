import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
     btmContainer: {
          width: Dimensions.get('screen').width - 20,
          marginHorizontal: 10,
          justifyContent:'center',
          alignItems:'center',
          alignContent:'center',
          position:'absolute',
          zIndex:100,
          flexDirection:'row',
          bottom: 40
          
     },
     btmButton: {
          width:70,
          height:70,
          backgroundColor:'#00FF7F',
          borderRadius:25,
          alignContent:'center',
          justifyContent:'center',
          alignItems:'center',
          margin:30,
          fontWeight:'bold',
          borderWidth:2

     },
     drawerBtnContainer: {
          backgroundColor: 'black',
          width: 40,
          height:40,
          zIndex: 100,
          position:'absolute',
          left:20,
          top:50
     }
    
   });

export default styles;