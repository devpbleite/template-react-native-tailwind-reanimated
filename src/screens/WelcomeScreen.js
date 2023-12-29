import React, { useRef } from "react";
import { View, Text, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import Animated from "react-native-reanimated";

const WelcomeScreen = () => {
  const animation = useRef(null);
  const navigation = useNavigation();

  return (
    <View className="bg-amber-500 flex-1 justify-center items-center space-y-10">
      <StatusBar styles="light" />

      <View className="bg-white/20 rounded-full">
        <View className="bg-white/20 rounded-full">
          <Image source={require("../../assets/image/welcome.png")}
            style={{width: 200, height: 200}} />
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;
