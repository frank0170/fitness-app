import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ImageBackground } from "react-native-web";
import playButtonTrans from "../../exPhoto/playButtonTrans.png";
import timeClock from "../../public/timeClock.png";
import { LogInStyles } from "../LogIn/loginStyles";


const ExercisePreview = ({ exercise }) => {
    return (
    <View style={{flexDirection: 'column'}}>
        <View style={{width:'50%', flexDirection: 'column'}}>
            <ImageBackground source={exercise.image}>

            <Image source={playButtonTrans}/>
            <Text style={{fontWeight:'700', fontSize:'36', alignSelf:'center'}}> {exercise.name} </Text>
            <Text style={{fontWeight:'500', fontSize:'18', alignSelf:'center'}}>With {exercise.trainer} Trainer</Text>
            </ImageBackground>
        </View>
        
        <View style={{flexDirection: 'column', backgroundColor: '#24262B'}}>
            <Text>

            </Text>
            <TouchableOpacity style={LogInStyles.orangeBox}>
                <Text style={{fontWeight: '600', fontSize: '16'}}>Start Workout <Image source={timeClock}/></Text>
            </TouchableOpacity>
        </View>
    </View>
    );
};

export default ExercisePreview;