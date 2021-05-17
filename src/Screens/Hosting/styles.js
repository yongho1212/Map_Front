import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
     page: {
          top: 70,
          left: 10,
          justifyContent: 'center',
     },
     category: {
          left:10,
          fontSize: 30,
          fontWeight: 'bold'
     },
     categorySpecific: {
          fontSize: 25,
          fontWeight: 'bold',
     },
     input: {
       paddingLeft: 10,
       height: 50,
       width: 330,
       margin: 12,
       borderWidth: 1,
       borderRadius: 30,
       backgroundColor: '#EBEBEB'
     },
     hostingBtn: {
          padding: 10,
          backgroundColor: "#EEFF28",
          width:350,
          borderRadius: 30,
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop:40
          

     },
     hostContainer: {
          flexDirection: 'row',
          alignItems:'center',
          left: 35,
          marginTop: 7
     },
     peopleImg:{
          width: 80,
          height: 80,
          borderRadius:40,
          borderWidth:3,
          borderColor:'#EEFF28',
          marginLeft: 15

     },
     hostingBtnText: {
          textAlign: 'center',
          justifyContent: 'center',
          fontSize: 30,
          fontWeight: 'bold'
     },
     titleContainer: {
          marginBottom: 20
     },
     peopleContainer: {
          marginBottom: 20
     }
   });

export default styles;