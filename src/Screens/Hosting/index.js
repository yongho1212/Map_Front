import React,{ useState } from 'react';
import {Text, View, SafeAreaView, TextInput, Image, Button, Pressable} from 'react-native';
import styles from './styles';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import Counter from '../../Components/counter';
import Time from '../../Components/time';

const Hosting = () => {
     const [text, onChangePlace] = React.useState(null);
     const [about, onChangeAbout] = React.useState(null);
     const [title, onChangeTitle] = React.useState(null);


     return(
          <SafeAreaView style={styles.page}>
               <Text style={styles.category}> Place </Text>
               <TextInput
               style={styles.input}
               onChangePlace={onChangePlace}
               value={text}
               />
               <Text style={styles.category}>Time </Text>
        
               <Time />
              
               <View style={styles.titleContainer}>
                    <Text style={styles.category}>Title</Text>
                    <TextInput
               style={styles.input}
               onChangeTitle={onChangeTitle}
               value={text}
               />
               </View>
               

               <View style={styles.peopleContainer}>
               <Text style={styles.category}> People </Text>
                    <View style={styles.hostContainer}>
                         <Text style={styles.categorySpecific}>Host</Text>
                         <Image
                         style={styles.peopleImg}
                         source={{uri:'https://thumb.mt.co.kr/06/2020/11/2020112608410450988_1.jpg/dims/optimize/'}}/>
                    </View>
                    <View style={styles.hostContainer}>
                         <Text style={styles.categorySpecific}>Guests</Text>
                         <Counter/>
                    </View>
               </View>
               
               

               <Text style={styles.category}> About </Text>
               <TextInput
               style={styles.input}
               onChangeAbout={onChangeAbout}
               value={text}
               />

               <Pressable
               style={styles.hostingBtn}>
                    <Text style={styles.hostingBtnText}> Hosting </Text>
               </Pressable>
               
          </SafeAreaView>
     );
};


export default Hosting;