import React from 'react'
import { Text, View } from 'react-native'



const UserDetailScreen = (props) => {
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