import React, {useEffect, useState} from 'react'
import { Text, View, ScrollView, Button } from 'react-native'

import firebase from '../database/firebase'
import { ListItem, Avatar } from 'react-native-elements'



const UserList = (props) => {

    const[users, setUsers] = useState([])

    useEffect(() => {
        const users = [] 
       firebase.db.collection('users').onSnapshot(querySnapshot => {
        querySnapshot.docs.forEach(doc =>{ 
            const {name, mail, phone} = doc.data()
            usuarios.push({
                id:doc.id,
                name,
                mail,
                phone
            })
          
       })
     })

    setUsers(users)
    }, []);
  return (
<ScrollView>
    <Button title="Create User" onPress={() => props.navigation.navigate('CreateUserScreen')} />
    {
        users.map(user => {
            return ( 
                <ListItem
                key={user.id} 
                >
                <ListItem.Chevron/>
                <ListItem.Content>
                    <ListItem.Title>
                        {user.name}
                    </ListItem.Title>
                </ListItem.Content>
                </ListItem>

            
            )
        })
    }
</ScrollView>
    )
}

export default UserList