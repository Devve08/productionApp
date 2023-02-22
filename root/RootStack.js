import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Image, Text, View } from "react-native";
import Login from "./../screens/Login";
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import Welcome from "../screens/Welcome";
import * as React from "react";
import DrawerContent from "../root/Drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Colors } from "../Styles/styles";
import CityGuide from "../screens/CityGuide";
import Projects from "../screens/Projects";
import Calendar from "../screens/Calendar";
import Project from "../screens/Project";
import ProjectFiles from "../screens/ProjectFiles";
import Contacts from "../screens/Contacts";
import { useContext, useState, useEffect } from "react";
import Loading from "../screens/Loading";
import SessionContext from "../context/SessionContext";
import SingleNewsScreen from "../screens/SingleNewsScreen";
import AllNews from "../screens/AllNews";
import HotelsList from "../screens/HotelsList";
import SubCategories from "../screens/SubCategories";
import terriblelisbon from "../assets/images/t_lisbon.png";
import terribleGuys from '../assets/images/t_guys_h.png'

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function DrawerStack({ navigation }) {
  const { isLoading, isLoggedIn } = useContext(SessionContext);
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        drawerActiveBackgroundColor: "black",
        drawerActiveTintColor: "#D7AF43",
        drawerInactiveTintColor: Colors.black,
        drawerLabelStyle: {
          fontSize: 20,
        },
      }}
      drawerContent={props => (
        <DrawerContent navigation={navigation} {...props} />
      )}
    >
      {isLoggedIn && (
        <>
          <Drawer.Screen
            name="Films"
            component={Welcome}
            options={{
              // drawerIcon: ({ color }) => (
              //   <Ionicons name="home-outline" size={22} color={color} />
              // ),
              headerTitle: () => {
                return <Image source={terribleGuys} style={{width:200, height: 50}} />;
              },
              headerStyle: {
                backgroundColor: "#D7AF43",
              },
            }}
          />
          <Drawer.Screen
            name="City Guide"
            component={CityGuide}
            options={{
              // drawerIcon: ({ color }) => (
              //   <FontAwesome name="city" size={22} color={color} />
              // ),
              headerTitle: () => {
                return <Image source={terriblelisbon} style={{width:140, height: 50}} />;
              },
              headerStyle: {
                backgroundColor: "#D7AF43",
              },
            }}
          />
          <Drawer.Screen
            name="Projects"
            component={isLoggedIn ? Projects : Login}
            options={{
              title: "Projects",
              headerShown: true,
              // drawerIcon: ({ color }) => (
              //   <FontAwesome name="project-diagram" size={22} color={color} />
              // ),
              headerTitle: () => {
                return <Image source={terribleGuys} style={{width:200, height: 50}} />;
              },
              headerStyle: {
                backgroundColor: "#D7AF43",
              },
            }}
          />
          <Drawer.Screen
            name="AllNews"
            component={AllNews}
            options={{
              title: "News",
              headerShown: true,
              // drawerIcon: ({ color }) => (
              //   <FontAwesome name="newspaper" size={22} color={color} />
              // ),
              headerTitle: () => {
                return (
                  <Text style={{fontSize: 20, fontWeight: "bold"}}>News</Text>
                );
              },
              headerStyle: {
                backgroundColor: "#D7AF43",
              },
            }}
          />
        </>
      )}
      {!isLoggedIn && (
        <>
          <Drawer.Screen
            name="City Guide"
            component={CityGuide}
            options={{
              // drawerIcon: ({ color }) => (
              //   <FontAwesome name="city" size={22} color={color} />
              // ),
              headerTitle: () => {
                return <Image source={terriblelisbon} style={{width:140, height: 50}} />;
              },
              headerStyle: {
                backgroundColor: "#D7AF43",
              },
            }}
          />
          <Drawer.Screen
            name="Login"
            component={Login}
            options={{
              title: "Login",
              headerShown: false,
              // drawerIcon: ({ color }) => (
              //   <FontAwesome name="sign-in-alt" size={22} color={color} />
              // ),
              headerTitle: () => {
                return <Text>Login</Text>;
              },
              headerStyle: {
                backgroundColor: "#D7AF43",
              },
            }}
          />
        </>
      )}
    </Drawer.Navigator>
  );
}

export default function RootStack() {
  const { isLoading, isLoggedIn } = useContext(SessionContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoading ? (
          <Stack.Screen
            options={{ headerShown: false }}
            name="Loading"
            component={Loading}
          />
        ) : isLoggedIn ? (
          <>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Welcome"
              component={DrawerStack}
            />
            <Stack.Screen
              options={{
                headerShown: true,
                headerTitle: () => {
                  return (
                    <Image source={terribleGuys} style={{width:200, height: 50}} />
                  );
                },
                headerStyle: {
                  backgroundColor: "#D7AF43",
                },
              }}
              name="Calendar"
              component={Calendar}
            />
            <Stack.Screen
              options={{
                headerShown: true,
                headerTitle: () => {
                  return (
                    <Image source={terribleGuys} style={{width:200, height: 50}} />
                  );
                },
              }}
              name="Project"
              component={Project}
            />
            <Stack.Screen
              options={{
                headerShown: true,
                headerTitle: () => {
                  return (
                    <Image source={terriblelisbon} style={{width:140, height: 50}} />
                  );
                },
                headerStyle: {
                  backgroundColor: "#D7AF43",
                },
              }}
              name="SubCategories"
              component={SubCategories}
            />
            <Stack.Screen
              options={{
                headerShown: true,
                headerTitle: () => {
                  return (
                    <Image source={terriblelisbon} style={{width:140, height: 50}} />
                  );
                },
                headerStyle: {
                  backgroundColor: "#D7AF43",
                },
              }}
              name="HotelsList"
              component={HotelsList}
            />
            <Stack.Screen
              options={{
                headerShown: true,
                headerTitle: () => {
                  return (
                    <Image source={terribleGuys} style={{width:200, height: 50}} />
                  );
                },
                headerStyle: {
                  backgroundColor: "#D7AF43",
                },
              }}
              name="ProjectFiles"
              component={ProjectFiles}
            />
            <Stack.Screen
              options={{
                headerShown: true,
                headerTitle: () => {
                  return (
                    <Image source={terribleGuys} style={{width:200, height: 50}} />
                  );
                },
                headerStyle: {
                  backgroundColor: "#D7AF43",
                },
              }}
              name="Contacts"
              component={Contacts}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="SingleNews"
              component={SingleNewsScreen}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              options={{
                headerShown: false,
                headerStyle: {
                  backgroundColor: "#D7AF43",
                },
                headerTitle: () => {
                  return (
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        textDecorationLine: "line-through",
                      }}
                    >
                      Login
                    </Text>
                  );
                },
              }}
              name="Login"
              component={Login}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Welcome"
              component={DrawerStack}
            />

            <Stack.Screen
              options={{
                headerShown: true,
                headerTitle: () => {
                  return (
                    <Image source={terriblelisbon} style={{width:140, height: 50}} />
                  );
                },
                headerStyle: {
                  backgroundColor: "#D7AF43",
                },
              }}
              name="SubCategories"
              component={SubCategories}
            />
            <Stack.Screen
              options={{
                headerShown: true,
                headerTitle: () => {
                  return (
                    <Image source={terriblelisbon} style={{width:140, height: 50}} />
                  );
                },
                headerStyle: {
                  backgroundColor: "#D7AF43",
                },
              }}
              name="HotelsList"
              component={HotelsList}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
