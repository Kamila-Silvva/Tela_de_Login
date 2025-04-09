import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';

function App() {
    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')

    function saveInfo() {

    }

    return (
      <SafeAreaView style={style.container}>
        <View style={style.container}>
          <View style={style.content}>
            <View style={style.containerLogoImage}>
              <Image style={style.LogoImage} source={require('./assets/Camera.png')}/>
            </View>
              <TextInput style={style.input} placeholder='Telefone, nome do usuário ou email' onChangeText={(text) => setLogin(text)}/>
              <TextInput style={style.input} placeholder='Senha' secureTextEntry={true} onChangeText={(text) => setSenha(text)}/>
              
              <TouchableOpacity style={style.button} onPress={saveInfo}>
                <Text style={style.TextButton}>Log In</Text>
              </TouchableOpacity>

              <Text style={style.password}>Esqueceu a senha?</Text>
          </View>
        </View>
      </SafeAreaView>
    )
  }

export default App;

let style = StyleSheet.create ({

  container: {
        flex: 1,
        backgroundColor: '#fffff',
    },

    content: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 30,
    },

    containerLogoImage: {
        alignItems: 'center',
        marginBottom: 55,
    },

    LogoImage: {
      width: 120,
      height: 120,
    },

    input: {
      width: '100%',
      height: 50,
      backgroundColor: '#f9f9f9',
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 15,
      marginBottom: 15,
      borderRadius: 10,
      marginBottom: 17,
      fontSize: 15,
    },

    button: {
      backgroundColor: 'blue',
      borderRadius: 3,
      padding: 15,
      borderRadius: 8,
      width: '100%',
      height: 50,
      alignItems: 'center',
      marginBottom: 16,
    }, 

    TextButton: {
      color: '#ffffff',
      fontSize: 15,
      fontWeight: 'bold',
    },

    password: {
      fontSize: 14,
      color: 'blue',
      alignSelf: 'flex-end',
    }
})