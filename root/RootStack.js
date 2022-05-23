import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {Text} from 'react-native'
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

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function DrawerStack() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        drawerActiveBackgroundColor: Colors.lightGrey,
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: Colors.black,
        drawerLabelStyle: {
          marginLeft: -20,
          fontSize: 16,
        },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={Welcome}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
          headerTitleStyle:{
            textDecorationLine: 'line-through'
          }
        }}
      />
      <Drawer.Screen
        name="City Guide"
        component={CityGuide}
        options={{
          drawerIcon: ({ color }) => (
            <FontAwesome name="city" size={22} color={color} />
          ),
          headerTitleStyle:{
            textDecorationLine: 'line-through'
          }
        }}
      />
      <Drawer.Screen
        name="Projects"
        component={Projects}
        options={{
          title: "Projects",
          headerShown: true,
          drawerIcon: ({ color }) => (
            <FontAwesome name="project-diagram" size={22} color={color} />
          ),
          headerTitleStyle:{
            textDecorationLine: 'line-through'
          },
          headerStyle: {
            backgroundColor: "white",
          },
        }}
      />
      <Drawer.Screen
        name="AllNews"
        component={AllNews}
        options={{
          title: "News",
          headerShown: true,
          drawerIcon: ({ color }) => (
            <FontAwesome name="newspaper" size={22} color={color} />
          ),
          headerTitleStyle:{
            textDecorationLine: 'line-through'
          },
          headerStyle: {
            backgroundColor: "white",
          },
        }}
      />
  
    </Drawer.Navigator>
  );
}

export default function RootStack() {
const {isLoading, isLoggedIn} = useContext(SessionContext)

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
                  return <Text style={{textDecorationLine: 'line-through', fontSize:18, fontWeight: 'bold'}}>Calendar</Text>
                },
           }}
              name="Calendar"
              component={Calendar}
            />
            <Stack.Screen
              options={{ 
                headerShown: true,
                headerTitle: () => {
                  return <Text style={{textDecorationLine: 'line-through', fontSize:18, fontWeight: 'bold'}}>Project</Text>
                }, }}
              name="Project"
              component={Project}
            />
            <Stack.Screen
              options={{ 
                headerShown: true,
                headerTitle: () => {
                  return <Text style={{textDecorationLine: 'line-through', fontSize:18, fontWeight: 'bold'}}>List of Hotels</Text>
                }, }}
              name="HotelsList"
              component={HotelsList}
            />
            <Stack.Screen
              options={{ headerShown: true,  
                headerTitle: () => {
                  return <Text style={{textDecorationLine: 'line-through', fontSize:18, fontWeight: 'bold'}}>Project Files</Text>
                },}}
              name="ProjectFiles"
              component={ProjectFiles}
            />
            <Stack.Screen
              options={{ headerShown: true,   
                headerTitle: () => {
                  return <Text style={{textDecorationLine: 'line-through', fontSize:18, fontWeight: 'bold'}}>Contacts</Text>
                }, }}
              name="Contacts"
              component={Contacts}
            />
            <Stack.Screen
              options={{ headerShown: false}}
              name="SingleNews"
              component={SingleNewsScreen}
            />
          </>
        ) : (
          <Stack.Screen
            options={{
              headerShown: true,
              headerStyle: {
                backgroundColor: Colors.primary,
              },
            }}
            name="Login"
            component={Login}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
