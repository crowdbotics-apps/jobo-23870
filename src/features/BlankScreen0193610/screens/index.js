import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = { Switch_15: true }
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <View style={styles.View_1}>
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Button title="Press me!" onPress={() => alert("Pressed!")} />
      <Switch
        trackColor={{ true: "#409EFF", false: "#C0CCDA" }}
        style={styles.Switch_15}
        value={this.state.Switch_15}
        onValueChange={nextChecked => this.setState({ Switch_15: nextChecked })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {
    borderColor: "#7717ee",
    borderWidth: -1,
    borderLeftWidth: -1,
    borderRightWidth: -1,
    borderTopWidth: -1,
    borderBottomWidth: -1,
    borderRadius: 6
  },
  Button_2: {},
  Button_3: {},
  Button_4: {},
  Button_5: {},
  Button_6: {},
  Button_7: {},
  Button_8: {},
  Button_9: {},
  Button_10: {},
  Button_11: {},
  Button_12: {},
  Button_13: {},
  Button_14: {},
  Switch_15: { alignSelf: "flex-start" }
})

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Blank)
