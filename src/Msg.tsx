import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import {NativeStackScreenProps} from "@react-navigation/native-stack"
import { RootStackParamList } from "../App";
type MsgProps = NativeStackScreenProps<RootStackParamList, "Msg">



export default function Msg ({route} : MsgProps) {
    const {msg} = route.params
    return(
        <View style={styles.container}>
            <Text style={styles.header}>{msg}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "black",
        flex: 1,
    },
    header: {
        fontSize: 70,
        fontWeight:200,
        color:"white"
    }
})