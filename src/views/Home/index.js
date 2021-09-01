import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { TextInput as TextInputPE, DefaultTheme } from 'react-native-paper';

//multiSelectInput

import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../styles';

// COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DateTimeInput from '../../components/DateTimeInput/index.android';
import Placesearch from 'react-native-placesearch';

const { height, width } = Dimensions.get('window');

const PETheme = {                //Tema para os componentes que utilizarão as cores da ProEX.
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#808080',
      accent: '#9F9F9F',
      background: '#fff',
      selectionColor: '#34c3eb',
  },
  };

export default function Home({ navigation }){

    function New(){
        navigation.navigate('Mapa');
    }
    
    const [formCadastroAcao, setFormCadastroAcao] = useState({
        tipo: "",
        titulo: "",
        ministrante: "",
        vagas: "",
        prazo: "",
        dataInicio: "",
        dataTermino: "",
        horario: "",
        cargaHoraria: "",
        resumo: "",
        contato: "",
        departamento: "",
        unidade: "",
        campus: "",
        coordenador: ""
    });

    return(
        <View style={styles.container}>
            <Header/>
            <ScrollView //scroll maior, rola de modo horizontal.
                style={{width: width, marginVertical: -1, position: 'relative'}}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                //scrollEnabled={false}
            >
                <ScrollView style={{width: width, marginVertical: '2.5%'}}>
                    <View style={styles.views}>
                        <View>
                            <TextInputPE
                                theme={PETheme}
                                mode={'outlined'}
                                style={styles.input} 
                                onChangeText={value => setFormCadastroAcao({ ...formCadastroAcao, tipo: value})}
                                value={formCadastroAcao.tipo} 
                                label={'Tipo de Evento'}/>
                        </View>
                    </View>

                    <View style={styles.views}>
                        <TextInputPE
                            theme={PETheme}
                            mode={'outlined'} 
                            style={styles.input}
                            onChangeText={value => setFormCadastroAcao({ ...formCadastroAcao, titulo: value})}
                            value={formCadastroAcao.titulo}
                            label={'Título'}
                            right={<TextInputPE.Icon name="format-title" color='#F44336'/>}
                        />
                    </View>
                    
                    <View style={styles.views}>
                        <TextInputPE 
                            theme={PETheme}
                            mode={'outlined'}
                            style={styles.input}
                            onChangeText={value => setFormCadastroAcao({ ...formCadastroAcao, titulo: value})}
                            value={formCadastroAcao.ministrante}
                            label={'Ministrante/Equipe'}
                            right={<TextInputPE.Icon name="account-group" color='#F44336'/>}
                        />
                    </View>

                    <View style={styles.views}>
                        <TextInputPE 
                            theme={PETheme}
                            mode={'outlined'}
                            style={styles.input}
                            onChangeText={value => setFormCadastroAcao({ ...formCadastroAcao, vagas: value})}
                            value={formCadastroAcao.vagas}
                            label={'Vagas'}
                            right={<TextInputPE.Icon name="account-multiple-plus" color='#F44336'/>}
                        />
                    </View>
                
                    <View style={styles.views}>
                        <TextInputPE 
                            theme={PETheme}
                            mode={'outlined'}
                            style={styles.input}
                            onChangeText={value => setFormCadastroAcao({ ...formCadastroAcao, prazo: value})}
                            value={formCadastroAcao.prazo}
                            label={'Prazo de Inscrição'}
                            right={<TextInputPE.Icon name="calendar-today" color='#F44336'/>}
                        />
                    </View>

                </ScrollView>
                
                <ScrollView style={{width: width, marginVertical: '2.5%'}}>
                    <View style={styles.views}>
                        <TextInputPE 
                            theme={PETheme}
                            mode={'outlined'} 
                            style={styles.input}
                            onChangeText={value => setFormCadastroAcao({ ...formCadastroAcao, contato: value})}
                            value={formCadastroAcao.contato}
                            placeholder={'Contato'}
                            right={<TextInputPE.Icon name="account-box" color='#F44336'/>}
                        />
                        </View>

                    <View style={styles.views}>
                        <TextInputPE 
                            theme={PETheme}
                            mode={'outlined'} 
                            style={styles.input}
                            onChangeText={value => setFormCadastroAcao({ ...formCadastroAcao, departamento: value})}
                            value={formCadastroAcao.departamento}
                            placeholder={'Departamento/Setor'}
                            right={<TextInputPE.Icon name="office-building" color='#F44336'/>}
                        />
                    </View>

                    <View style={styles.views}>
                        <TextInputPE 
                            theme={PETheme}
                            mode={'outlined'} 
                            style={styles.input}
                            onChangeText={value => setFormCadastroAcao({ ...formCadastroAcao, cargaHoraria: value})}
                            value={formCadastroAcao.cargaHoraria}
                            placeholder={'Carga Horária'}
                            right={<TextInputPE.Icon name="timer-sand" color='#F44336'/>}
                        />
                    </View>

                    <View style={styles.views}>
                        <TextInputPE 
                            theme={PETheme}
                            mode={'outlined'} 
                            style={styles.input}
                            onChangeText={value => setFormCadastroAcao({ ...formCadastroAcao, unidade: value})}
                            value={formCadastroAcao.unidade}
                            placeholder={'Unidade'}
                            right={<TextInputPE.Icon name="domain" color='#F44336'/>}
                        />
                    </View>

                    <View style={styles.views}>
                        <TextInputPE 
                            theme={PETheme}
                            mode={'outlined'} 
                            style={styles.input}
                            onChangeText={value => setFormCadastroAcao({ ...formCadastroAcao, campus: value})}
                            value={formCadastroAcao.campus}
                            placeholder={'Campus'}
                            right={<TextInputPE.Icon name="school" color='#F44336'/>}
                        />
                    </View>

                </ScrollView>

                <ScrollView style={{width: width, marginVertical: '2.5%'}}>
                    
                    <View style={styles.views}>
                        <TextInputPE 
                            theme={PETheme}
                            mode={'outlined'} 
                            style={styles.input}
                            onChangeText={value => setFormCadastroAcao({ ...formCadastroAcao, coordenador: value})}
                            value={formCadastroAcao.coordenador}
                            placeholder={'Coordenador'}
                            right={<TextInputPE.Icon name="account-star" color='#F44336'/>}
                        />
                    </View>
                    
                    
                    <Text style={styles.label2}>Data de Início</Text>
                    <DateTimeInput type={'data'}/>

                    <Text style={styles.label2}>Data de Término</Text>
                    <DateTimeInput type={'data'}/>

                    <Text style={styles.label2}>Horário</Text>
                    <DateTimeInput type={'hora'}/>
                    <View style={styles.views}>
                        <TextInputPE 
                            multiline={true}
                            numberOfLines={4}
                            theme={PETheme}
                            mode={'outlined'} 
                            style={styles.input}
                            onChangeText={value => setFormCadastroAcao({ ...formCadastroAcao, resumo: value})}
                            value={formCadastroAcao.resumo}
                            placeholder={'Resumo'}
                            right={<TextInputPE.Icon name="text" color='#F44336'/>}
                        />
                    </View>

                </ScrollView>
                
                
            </ScrollView>
            <View style={{backgroundColor: '#000'}}>

            </View>

            <Footer icon={true} infoCadastro={formCadastroAcao} navegar={New}/>
        </View>

    )
}

/*
<Text style={styles.label2}>Localização:</Text>
                <View style={{marginTop: 20}}>
                        <Placesearch
                            apikey="AIzaSyDkf71ZywyRmJGj6JcAWbe1SCGcq7SICVc" // required *
                            SelectedAddress={(data)=>console.log(data)} // required *
                            removeImg={true}
                        />
                </View> */

/*
*/


                        /*<Picker
                            selectedValue={formCadastroAcao.tipo}
                            onValueChange={(itemValue, itemIndex) =>
                                setFormCadastroAcao({ ...formCadastroAcao, tipo: itemValue})
                            }>
                            <Picker.Item label="Java" value="java" />
                            <Picker.Item label="JavaScript" value="js" />
                        </Picker> */