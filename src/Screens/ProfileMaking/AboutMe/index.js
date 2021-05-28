import React, { useState } from "react";
import { SafeAreaView, Image, Text, Pressable, View, TouchableOpacity } from "react-native";

import styles from './styles'

const AboutMe = () => {
 
  const [toggle, setToggle] = useState(false);
  


     return (
          <SafeAreaView >
            <Text style={styles.caseName}> profile Img</Text>
            <View style={styles.mainImgContainer}>
              <Image
              style={styles.mainImg}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
              />
              <Pressable>
                <Text 
                style={{color:'grey', fontSize:17, margin:5}}
                onPress={()=> console.warn('clicked')}
                >
                  edit</Text>
              </Pressable>
              <View style={styles.subImgContainer}>
                <Image
                style={styles.subImg}
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
                />
                <Image
                style={styles.subImg}
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
                /><Image
                style={styles.subImg}
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
                />
                <Image
                style={styles.subImg}
                source={{
                  uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
                />
              </View>
              
              
            </View>
            <Text style={styles.caseName}> my Info</Text>

            <Text>나이</Text>
            <Text>성별</Text>
            <Text>닉네임</Text>
            <Text>?</Text>
  
          </SafeAreaView>
          
        );
      };

     

export default AboutMe;