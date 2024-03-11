import React from "react";
import { Image, Text, TouchableOpacity, View, ScrollView } from "react-native";
import BackArrowIcon from "../../icons/BackArrowIcon.js";
import SettingsButton from "../../icons/SettingsButton.js";
import { ProfileStyles } from "./profileStyles";

const AboutUs = () => {
    return (
        <ScrollView style={{backgroundColor:"#24262B"}}>
            <View style={{flexDirection:"row", alignContent:"center", top:"60%"}}>
                <TouchableOpacity style={[ProfileStyles.photoBox, {left:"10%"}]}>
                    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                        <BackArrowIcon/>
                    </View>
                </TouchableOpacity>

                <Text style={{color:"#FFFFFF", fontSize:20, fontWeight:600, left:"35%"}}>AboutUs</Text>

                <TouchableOpacity style={[ProfileStyles.photoBox, {left:"54%"}]}>
                    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                        <SettingsButton/>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default AboutUs