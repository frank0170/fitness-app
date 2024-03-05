import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import BackArrowIcon from "../../icons/BackArrowIcon.js";
import SettingsButton from "../../icons/SettingsButton.js";
import { ProfileStyles } from "./profileStyles";

const EditProfile = () => {
    return (
        <View style={{backgroundColor:"#111214", height:"100%"}}>
            <View style={{backgroundColor:"#24262B", borderRadius:32, top:"-4%", height:"20%"}}>
                <View style={{flexDirection:"row", alignContent:"center", top:"40%"}}>
                    <TouchableOpacity style={[ProfileStyles.photoBox, {left:"10%"}]}>
                        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                            <BackArrowIcon/>
                        </View>
                    </TouchableOpacity>

                    <Text style={{color:"#FFFFFF", fontSize:20, fontWeight:600, left:"35%"}}>Profile</Text>

                    <TouchableOpacity style={[ProfileStyles.photoBox, {left:"58%"}]}>
                        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                            <SettingsButton/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <TouchableOpacity></TouchableOpacity>

                <TouchableOpacity></TouchableOpacity>
            </View>

            <Text style={{fontSize:16, fontWeight:500, color:"#FFFFFF", left:"8%"}}>First Name</Text>
            <View style={[ProfileStyles.greyBox, {top:"-2%"}]}></View>

            <Text style={{fontSize:16, fontWeight:500, color:"#FFFFFF", left:"8%", top:"-1%"}}>Last Name</Text>
            <View style={[ProfileStyles.greyBox, {top:"-3%"}]}></View>

            <Text style={{fontSize:16, fontWeight:500, color:"#FFFFFF", left:"8%", top:"-2%"}}>Email address</Text>
            <TouchableOpacity style={[ProfileStyles.greyBox, {top:"-4%"}]}></TouchableOpacity>

            <View style={{flexDirection:"row", top:"-3%"}}>
                <View style={{width:"50%"}}>
                    <Text style={{fontSize:16, fontWeight:500, color:"#FFFFFF", left:"15%"}}>Weight</Text>
                    <TouchableOpacity style={[ProfileStyles.greyBox, {top:"-10%", width:"70%"}]}></TouchableOpacity>
                </View>

                <View style={{width:"50%"}}>
                    <Text style={{fontSize:16, fontWeight:500, color:"#FFFFFF", left:"15%"}}>Height</Text>
                    <TouchableOpacity style={[ProfileStyles.greyBox, {top:"-10%", width:"70%"}]}></TouchableOpacity>
                </View>
            </View>

            <Text style={{fontSize:16, fontWeight:500, color:"#FFFFFF", left:"8%", top:"-3%"}}>Date of birth</Text>
            <View style={[ProfileStyles.greyBox, {top:"-5%"}]}></View>
        
            <Text style={{fontSize:16, fontWeight:500, color:"#FFFFFF", left:"8%", top:"-4%"}}>Gender</Text>
            <View style={{flexDirection:"row", top:"-3%"}}>
                <TouchableOpacity style={[ProfileStyles.greyBox, {width:"35%", top:"-30%"}]}>
                    <Image></Image>
                    <Text style={{color:"#FFFFFF", fontSize:18, fontWeight:400, left:"40%"}}>Male</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[ProfileStyles.greyBox, {width:"35%", top:"-30%", left:"3%"}]}>
                    <Image></Image>
                    <Text style={{color:"#FFFFFF", fontSize:18, fontWeight:400, left:"40%"}}>Female</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={[ProfileStyles.whiteBox, {width:"70%", height:50, left:"15%", top:"-4%"}]}>
                <Text style={{color:"#111214", fontSize:14, fontWeight:600, left:"32%", top:"30%"}}>Save Changes</Text>
            </TouchableOpacity>
        </View>
    )
}

export default EditProfile