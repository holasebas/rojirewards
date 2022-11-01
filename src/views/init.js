
import React, { useContext } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import UserNavigatorView from './user/user_navigator_view';

export default function Init() {

  
  //INIT
  let a = 1

  switch (a) {
    case 1:
      return <UserNavigatorView></UserNavigatorView>;
    default:
      return <View></View>;
  }

}
