import React, { useState } from 'react';
import {View, Text, Button, Pressable} from 'react-native';

const Counter = (props) => {
  const [number, setNumber] = useState(0);

  return (
    <View style={{flexDirection: 'row',padding:10}}>
      
      <Pressable 
      style={{borderWidth:2, borderRadius:50, padding:10, width:35, height:35, alignItems:'center', justifyContent:'center'}}
      onPress={() => setNumber(number -1 )}>  
      <Text>-1</Text> 
      </Pressable>

      <Text style={{marginHorizontal:10, fontSize:30}}>{number}</Text>

      <Pressable
      style={{borderWidth:2, borderRadius:50, padding:10, width:35, height:35, alignItems:'center', justifyContent:'center'}} 
      onPress={() => setNumber(number +1 )}>  
      <Text>+1</Text> 
      </Pressable>
     
     </View>
  );
}

export default Counter;