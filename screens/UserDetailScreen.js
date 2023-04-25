import React, {useEffect} from 'react'
import { Text, View } from 'react-native'
import firebase from '../database/firebase'


const UserDetailScreen = (props) => {
    
    const getUserById = async(id) => {
        const dbRef = firebase.db.collection('user').doc(id)
        const doc = await dbRef.get()
        console.log(doc)
    }

    useEffect(() => {
      getUserById(props.route.params.userId)
    }, []);
    console.log(props.route.params)
  return (
    <View>
        <Text>
            Detalle de usuario
        </Text>
    </View>
    )
}

export default UserDetailScreen