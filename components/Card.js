import React from "react";
import {View, StyleSheet} from "react-native";

const Card = props => {
return <View style={{...styles.card,...props.style}}>{props.children}</View>
}

const styles = StyleSheet.create({
    card: {
        width: 300,
        maxWidth: "80%",
        alignItems: "center",
        shadowColor: "black",
        padding: 20,
        shadowOffset: {width:2, height:5},
        shadowRadius: 5,
        shadowOpacity: 0.26,
        backgroundColor: "white",
        elevation: 5,
        borderRadius: 10
    }
})

export default Card