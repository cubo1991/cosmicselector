import React, {useState} from 'react'
import { Button, TextInput, ScrollView, StyleSheet, View } from 'react-native'
import firebase from '../database/firebase'



const CreateUserScreen = (props) => {
    const [user, setUser] = useState(
        {
            name:'',
            mail:'',
            phone:''
        }
    )
const createNewUser = async () => {
    if(!user.name || !user.mail || !user.phone) {
        alert ('Please complete the form')
    } else {
      
        await firebase.db.collection('users').add({
            name: user.name,
            mail: user.mail,
            phone: user.phone
        }) 
        props.navigation.navigate('UserList')
    }
    
}
  return (
  <ScrollView style={styles.container}>
    <View style={styles.inputGroup}>
        <TextInput placeholder='Name User' onChangeText={(value) => setUser({...user, name: value})}/>
    </View>
    <View style={styles.inputGroup}>
        <TextInput placeholder='Mail User' onChangeText={(value) => setUser({...user, mail: value}) }/>
    </View>
    <View style={styles.inputGroup}>
        <TextInput placeholder='Phone User' onChangeText={(value) => setUser({...user, phone: value}) }/>
    </View>
    <View style={styles.inputGroup}>
        <Button title="Save User" onPress={() => createNewUser()}> </Button>
    </View>
  </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:35

    },
    inputGroup:{
        flex:1,
        padding:0,
        marginBottom:15,
        borderBottomWidth:1,
        borderBottomColor: '#ccccccc'
    }
}) 

export default CreateUserScreen