import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
     caseName:{
          fontWeight:'bold'
     },
     mainImgContainer: {
        
          alignItems:'center',
          margin: 10,
          top: 10

     },
     mainImg: {
          width:120, 
          height:120,
          borderRadius:60
     
     },
     subImgContainer:{
          flexDirection:'row'
     },
     subImg: {
          width:80, 
          height:80,
          borderRadius:40,
          margin: 7
     
     },
     
     likesFonts:{
          fontSize:17,
          fontWeight:'bold'
     },
     btn:{
          top:100
     },
     btnText:{

     }
    
   });
export default styles;