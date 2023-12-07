import React from "react";
import { View, Button } from "react-native";
import { GoogleSignin, GoogleSigninButton, statusCodes } from "expo-google-sign-in";
import Constants from "expo-constants";

const API_KEY = Constants.manifest.extra.API_KEY;

GoogleSignin.configure({
    webClientId: API_KEY
})

export const GoogleSignIn = () => {
    const signInWithGoogle = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          console.log('User Info:', userInfo);
          // 로그인 성공 시 userInfo에 사용자 정보가 담깁니다.
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log('User cancelled the login flow');
          } else if (error.code === statusCodes.IN_PROGRESS) {
            console.log('Operation (e.g. sign in) is in progress already');
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            console.log('Play Services not available or outdated');
          } else {
            console.error('Google Sign-In Error:', error);
          }
        }
      };
    
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <GoogleSigninButton
            style={{ width: 192, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={signInWithGoogle}
          />
        </View>
      );
}