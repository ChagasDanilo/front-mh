import React, { Component } from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  Modal,
  View,
} from 'react-native'

export default function ModalCustom  ({visible, children}) {    
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        >
        <View style={styles.contentModal}>
            {children}
        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
  contentModal:{
      flex: 1,
      display : 'flex',
      flexDirection : "column",
      justifyContent : "center",
      alignItems : "center",
      backgroundColor: 'rgba(52, 52, 52, 0.8)'
  }
})
