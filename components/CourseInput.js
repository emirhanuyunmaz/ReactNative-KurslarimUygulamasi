import { Button, Image, Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function CourseInput({visible,onAddCourse,onCancel}) {

    const [enterCourseText,setEnterCourseText] = useState("")
    const addCourseHandler = () => {
        onAddCourse(enterCourseText)
        setEnterCourseText("")
    }


    const courseInputHandler = (enteredText) => {
        setEnterCourseText(enteredText)
    }

  return (
    <Modal
        animationType="slide"
        visible={visible}
        >
        <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/eu.png")} />
        <TextInput style={styles.textInput} placeholder='Yeni Kurs Ekle' onChangeText={courseInputHandler} />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <Button title='İptal Et' color={"red"} onPress={onCancel} />
            </View>
            <View style={styles.button}>
                <Button title='Ekle' color={"blue"} onPress={addCourseHandler} />
            </View>
          </View>
        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"gray",
        padding:15
    },

    image:{
        width:150,
        height:150,
        borderRadius:20,
        margin:20
    },

    textInput:{
        borderWidth:1,
        width:"100%",
        padding:10,
        borderRadius:10,
        backgroundColor:"pink",
        borderColor:"pink",
        
    },
    buttonContainer:{
        flexDirection:"row",
        marginTop:15
    },
    button:{
        width:100,
        marginHorizontal:20,
        
    }

})