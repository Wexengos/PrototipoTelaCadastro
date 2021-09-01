import React, { useState } from 'react';
import { 
    TouchableOpacity,
    Image, 
    TextInput,
    StyleSheet,
    View,
    Text,
    Button,
    Platform
      } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './styles';

import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';

export default function DateTimeInput({ type }){      //componente alternado dinamicamente entre data e hora

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
      console.log(currentDate);
    };
  
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    const showTimepicker = () => {
      showMode('time');
    };
  
    return (
        
      <View>
        <TouchableOpacity onPress={type == 'data' ? showDatepicker : showTimepicker}>
                <TextInput
                style={styles.input}
                //placeholder={type == 'data' ? 'Escolha a data' : 'Escolha a hora' }
                editable={false}
                />
                <Image 
                style={styles.iconTextInput}
                source={type == 'data' ? iconCalendar : iconClock} />

            </TouchableOpacity>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
    );
  };
/*
    return(
        

            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
        </View>
    );
}; 

<View>
            

            <View>
                <Button onPress={showDatepicker} title="Show date picker!" />
            </View>
            <View>
                <Button onPress={showTimepicker} title="Show time picker!" />
            </View>
            
            */