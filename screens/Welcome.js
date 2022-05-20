
import React, { useState, useContext } from "react";
import { ScrollView } from "react-native";
import Footer from "../components/Footer/Footer";
import CityGuideList from "../components/Home/CityGuideList";
import News from "../components/Home/News";
import RecentWork from "../components/Home/RecentWork";
import SessionContext from "../context/SessionContext";
import { Container } from "../Styles/styles";
import Loading from "./Loading";

export default function Welcome({ navigation }) {
//  const {} = useContext(SessionContext);
  return (
    <>
      <ScrollView>
        <Container>
          <RecentWork navigation={navigation} />
          <CityGuideList navigation={navigation} />
          <News navigation= {navigation} />
          <Footer />
        </Container>
      </ScrollView>
    </>
  );
}
