import React, { Component } from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  Modal,
  View,
} from 'react-native'

export default class Loading extends Component {
  render() {
    
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.props.visible}
        >
        <View style={styles.contentModal}>
            <View style={styles.modal}>
                <ActivityIndicator size="large" color="red" />                        
            </View>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  modal:{
      /*
      display : "flex",        
      flexDirection : "row",
      borderBottomWidth : 0.2,
      paddingBottom: 10,
      */
    padding: 20,
    borderRadius:5,       
    backgroundColor : 'white'
  },
  contentModal:{
      flex: 1,
      display : 'flex',
      flexDirection : "column",
      justifyContent : "center",
      alignItems : "center",
      backgroundColor: 'rgba(52, 52, 52, 0.8)'
  }
})
