import React, { Component, useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import SessionContext from "../context/SessionContext";
import getRequest from "../network/network";

export default class App extends Component {
  static contextType = SessionContext;
  constructor(props) {
    super(props);
    this.state = {
      aptArray: [],
      selectedAptDates: {},
      selectedDate: "",
    };
  }

  checkDate(date) {
    let result = this.state.aptArray.filter(
      (item) => item.pa_apt_date === date
    );
    if (result.length > 0) {
      console.log(result[0].pa_id);
      this.getAppointmentInfo(result[0].pa_id);
    }
  }

  getAppointmentInfo = async (id) => {
    try {
      let member_id = this.context.session.user.user_id;
      let g_hash = this.context.session.user.g_hash;
      let access_token = this.context.session.user.access_token;
      let pa_id = id;
      let params = { member_id, g_hash, pa_id, access_token };
      let res = await getRequest(params, "request/api/getappointmentinfo");
      console.log("appp", res);
    } catch (error) {
      console.log(error.message);
    }
  };

  getMarkedDates() {
    let dates = {};
    this.state.aptArray.forEach((val) => {
      dates[val.pa_apt_date] = { selected: true, selectedColor: "#CA4143" };
    });
    this.setState({ selectedAptDates: dates });
  }

  async componentDidMount() {
    const { getListOfAppointments } = this.context;
    let id = this.props.route.params.pp_id;
    const res = await getListOfAppointments(id);

    res.apt_array.map((item) =>
      this.setState({ aptArray: [...this.state.aptArray, item] })
    );

    this.getMarkedDates();
  }
  render() {
    const { selectedAptDates } = this.state;
    return (
      <View style={styles.container}>
        {console.log(this.state.aptArray)}
        <Calendar
          onDayPress={(day) => this.checkDate(day.dateString)}
          markedDates={selectedAptDates}
        />
        <View>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("Contacts", {
                project_id: this.props.route.params.pp_id,
              })
            }
            style={[styles.btn, { marginTop: 40 }]}
          >
            <Text style={styles.btnText}>CREW CONTACTS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("ProjectFiles", {
                project_id: this.props.route.params.pp_id,
              })
            }
            style={styles.btn}
          >
            <Text style={styles.btnText}>PROJECT FILES</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 50,
  },
  btn: {
    width: 200,
    marginHorizontal: 80,
    backgroundColor: "black",
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 10,
    alignItems: "center",
  },
  btnText: {
    color: "#FFFFFF",
  },
});