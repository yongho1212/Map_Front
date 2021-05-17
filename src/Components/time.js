import React, { useState } from "react";
import { Button, View, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Time = (props) => {
     const [pickerMode, setPickerMode] = useState(null);

     const showDatePicker = () => {
       setPickerMode("date");
     };
   
     const showTimePicker = () => {
       setPickerMode("time");
     };
   
     const hidePicker = () => {
       setPickerMode(null);
     };
   
     const handleConfirm = (date) => {
       // In order to prevent the double-shown popup bug on Android, picker has to be hidden first (https://github.com/react-native-datetimepicker/datetimepicker/issues/54#issuecomment-618776550)
       hidePicker();
       console.warn("A date has been picked: ", date);
     };
   
     return (
       <View >
         <Button title="Show Date Picker" onPress={showDatePicker} />
         <Button title="Show Time Picker" onPress={showTimePicker} />
         <DateTimePickerModal
           isVisible={pickerMode !== null}
           mode={pickerMode}
           onConfirm={handleConfirm}
           onCancel={hidePicker}
         />
         <Text>{props.date}</Text>
       </View>
     );
   };


export default Time;