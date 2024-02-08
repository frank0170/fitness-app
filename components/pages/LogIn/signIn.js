import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { LogInStyles } from "./loginStyles";

return (
    <View style={{flexDirection:'column'}}>
        <Image/>
        
        <Text>Your Shape Mentor</Text>
        
        <Text>One best app for all things fitness</Text>
        
        <TouchableOpacity style={LogInStyles.orangeBox}> <Text>Sign Up with Mail</Text></TouchableOpacity>
        
        <TouchableOpacity style={LogInStyles.greyBox}> <Image/> <Text>Sign Up with Apple</Text></TouchableOpacity>
        
        <TouchableOpacity style={LogInStyles.greyBox}> <Image/> <Text>Sign Up with Google</Text></TouchableOpacity>
        
        <Text> Already have an account?
            <Text style={{color:'#FF8036'}}>Sign in</Text>
        </Text>
    </View>
)