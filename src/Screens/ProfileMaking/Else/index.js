import React from 'react';
import {Text, View, SafeAreaView, Pressable} from 'react-native';

const myLikes = () => {

     const [toggle, setToggle] = useState(false);

     return(
          <SafeAreaView >

            <Text> Case1 </Text>
            <Pressable 
              onPress={() => setToggle(!toggle)}
              style={{ backgroundColor:(toggle == true) ? 'white' : '#EEFF28',
              left:15, 
              width: 100, height:35, borderRadius:50, alignItems:"center", justifyContent:'center', borderWidth:3}}
              >
              <Text>Toggle state</Text>
            </Pressable>

  
          </SafeAreaView>
     )
}
 
export default myLikes;