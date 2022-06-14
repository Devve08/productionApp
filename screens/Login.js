import React, { useEffect, useState, useContext } from "react";
import { StatusBar } from "expo-status-bar";

import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";
import KeyboardAvoidingWrapper from "../Styles/KeyboardAvoidingWrapper";

import { View, Image } from "react-native";
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  RightIcon,
  StyledTextInput,
  StyledButton,
  ButtonText,
  StyledInputLabel,
  Colors,
  MsgBox,
} from "../Styles/styles";

import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import getRequest from "../network/network";
import Loading from "./Loading";
import SessionContext from "../context/SessionContext";
import logo from "../assets/images/1978.png"

const { primary, secondary, light, darkLight, white, black } = Colors;

export default function Login({ navigation }) {
  const [hidePassword, setHidePassword] = useState(true);
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const {
    actions: { Login },
    error,
  } = useContext(SessionContext);

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <Image style={{width: 300, height: 250, resizeMode: 'contain'}} source={logo} />
          <SubTitle>Account Login</SubTitle>

          <StyledFormArea>
            <MyTextInput
              label={"Username"}
              icon="person"
              
              placeholderTextColor={"grey"}
              onChangeText={(text) => setUserName(text)}
              keyBoardType="email-address"
            />

            <MyTextInput
              label={"Password"}
              icon="lock"
              
              placeholderTextColor={"grey"}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={hidePassword}
              hidePassword={hidePassword}
              setHidePassword={setHidePassword}
              isPassword={true}
            />
            {error && <MsgBox>Something went wrong, try again!</MsgBox>}
            <StyledButton onPress={() => Login(username, password)}>
              <ButtonText>Login</ButtonText>
            </StyledButton>

            <StyledButton
              google={true}
              onPress={() => navigation.replace("Welcome")}
            >
              <ButtonText>Skip</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
}

const MyTextInput = ({
  icon,
  label,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={black} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? "md-eye-off" : "md-eye"}
            size={30}
            color={black}
          />
        </RightIcon>
      )}
    </View>
  );
};
