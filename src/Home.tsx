import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, TextInput, Pressable, Alert } from "react-native";

// navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack"

import { RootStackParamList } from "../App";

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">

export default function Home({ navigation }: HomeProps) {
    const [myMsg, setMyMsg] = useState<string>("");
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Insert a message</Text>
            <TextInput
                value={myMsg}
                onChangeText={setMyMsg}
                style={styles.input} 
                placeholder="Type your message here" 
            />
            <Pressable onPress={() => {
                if(myMsg.trim() === ""){
                    Alert.alert("Enter a message")
                }
                else{
                    navigation.navigate("Msg", {
                        msg: myMsg
                    })
                    setMyMsg("");
                }
            }
            }>
                <View style={styles.btn}>
                    <Text style={styles.btninp}>Send Message</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "black",
        flex: 1,
        justifyContent: "center"
    },
    header: {
        fontSize: 70,
        fontWeight: 200,
        color: "white",
        marginBottom: 30
    },
    input: {
        height: 60,
        width: "100%",
        borderColor: "gray",
        borderWidth: 2,
        padding: 10,
        marginBottom: 10,
        color: "white",
        borderRadius: 20,
        fontSize: 20
    },
    btn: {
        padding: 20,
        borderRadius: 20,
        backgroundColor: "white"
    },

    btninp: {
        color: "black",
        textAlign: "center",
        fontSize: 20

    }
})