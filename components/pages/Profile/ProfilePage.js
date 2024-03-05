import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-web";
import BackArrowIcon from "../../icons/BackArrowIcon.js";
import SettingsButton from "../../icons/SettingsButton.js";
import icon from "./../../public/icon.png";
import PhotoCircle from "./../../icons/PhotoCircle.js";
import { ProfileStyles } from "./profileStyles";

const EditPhoto = () => {
    <View style={{backgroundColor:"#24262B", width:326, height:335}}>
        <Text style={{color:"#FFFFFF", fontSize:20, fontWeight:600}}>Change Your Picture</Text>
        <Image></Image>

        <TouchableOpacity>
            <Image></Image>
            <Text style={{color:"#FFFFFF", fontSize:18, fontWeight:400}}>Take a photo</Text>
        </TouchableOpacity>

        <TouchableOpacity></TouchableOpacity>
            <Image></Image>
            <Text style={{color:"#FFFFFF", fontSize:18, fontWeight:400}}>Choose from your file</Text>
        <TouchableOpacity></TouchableOpacity>

        <TouchableOpacity></TouchableOpacity>
            <Image></Image>
            <Text style={{color:"#E53935", fontSize:18, fontWeight:400}}>Delete photo</Text>
        <TouchableOpacity></TouchableOpacity>
    </View>
}

const Profile = () => {
    return (
        <ScrollView style={{
            flex: 1,
            backgroundColor: "#111214",
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>

            <View style={ProfileStyles.header}>
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

            <View style={{flex:1, alignContent:"center", justifyContent:"center", height:110, width:110}}>
                <PhotoCircle/>
            </View>

            <Text style={{fontSize:20, fontWeight:600, color:"#FFFFFF", left:"30%", top:"10%"}}>FName + Lname</Text>
            <Text style={{fontSize:11, fontWeight:400, color:"#AAAAAA", left:"45%"}}>email</Text>

            <View style={{flexDirection:"row", top:"3%"}}>
                <View style={[ProfileStyles.box, {left:"5%", flexDirection:"column"}]}>
                    <View>
                        <Image></Image>
                        <Text style={{color:"#FFFFFF", fontSize:11, fontWeight:500}}>Weight</Text>
                    </View>

                    <View>
                        <Text style={{color:"#FFFFFF"}}></Text>
                        <Text style={{color:"#888888"}}>kg</Text>
                    </View>
                </View>

                <View style={[ProfileStyles.box, {left:"9%"}]}>
                    <View>
                        <Image></Image>
                        <Text style={{color:"#FFFFFF", fontSize:11, fontWeight:500}}>Height</Text>
                    </View>

                    <View>
                        <Text style={{color:"#FFFFFF"}}></Text>
                        <Text style={{color:"#888888"}}>cm</Text>
                    </View>
                </View>

                <View style={[ProfileStyles.box, {left:"13%"}]}>
                    <View>
                        <Image></Image>
                        <Text style={{color:"#FFFFFF", fontSize:11, fontWeight:500}}>Age</Text>
                    </View>

                    <View>
                        <Text style={{color:"#FFFFFF"}}></Text>
                        <Text style={{color:"#888888"}}>years</Text>
                    </View>
                </View>
            </View>

            <TouchableOpacity style={[ProfileStyles.orangeBox, {top:"5%", left:"5%", alignContent:"center"}]}>
                <Image></Image>

                <View style={{flexDirection:"column"}}>
                    <View style={{flexDirection:"row"}}>
                        <Image></Image>
                        <Text style={{color:"#FFFFFF", fontSize:16, fontWeight:600}}>Upgrade to Premium</Text>
                    </View>
                    <Text style={{color:"#FFFFFF", fontSize:10, fontWeight:400}}>Enjoy workout access without any limits</Text>
                </View>

                <Image></Image>
            </TouchableOpacity>

            <TouchableOpacity style={[ProfileStyles.greyBox, {top:"3%", flexDirection:"row"}]}>
                <Image></Image>
                <Text style={{color:"#FFFFFF", fontSize:14, fontWeight:500}}>Edit Profile</Text>
                <Image></Image>
            </TouchableOpacity>

            <TouchableOpacity style={[ProfileStyles.greyBox, {top:"1%", flexDirection:"row"}]}>
                <Image></Image>
                <Text style={{color:"#FFFFFF", fontSize:14, fontWeight:500}}>My Subscription</Text>
                <Image></Image>
            </TouchableOpacity>

            <TouchableOpacity style={[ProfileStyles.greyBox, {top:"-1%", flexDirection:"row"}]}>
                <Image></Image>
                <Text style={{color:"#FFFFFF", fontSize:14, fontWeight:500}}>Payment Methods</Text>
                <Image></Image>
            </TouchableOpacity>

            <TouchableOpacity style={[ProfileStyles.greyBox, {top:"-3%", flexDirection:"row"}]}>
                <Image></Image>
                <Text style={{color:"#FFFFFF", fontSize:14, fontWeight:500}}>Invite Friends</Text>
                <Image></Image>
            </TouchableOpacity>

            <TouchableOpacity style={[ProfileStyles.greyBox, {top:"-5%", flexDirection:"row"}]}>
                <Image></Image>
                <Text style={{color:"#FFFFFF", fontSize:14, fontWeight:500}}>About Us</Text>
                <Image></Image>
            </TouchableOpacity>

            <TouchableOpacity style={[ProfileStyles.greyBox, {top:"-7%", flexDirection:"row"}]}>
                <Image></Image>
                <Text style={{color:"#FFFFFF", fontSize:14, fontWeight:500}}>Terms and Conditions</Text>
                <Image></Image>
            </TouchableOpacity>
            
            <TouchableOpacity style={[ProfileStyles.whiteBox, {top:"-9%", left:"5%", alignContent:"center"}]}>
                <Image source={icon}/>
                <Text style={{color:"#111214", left:"40%", top:"30%", fontSize:14, fontWeight:600}}>Log Out</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
export default Profile