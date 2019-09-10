import React, { Component } from "react";
import { Text, View, StyleSheet, AppRegistry } from "react-native";
import Home from "./src/components/Home";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./src/reducers";

const store = createStore(reducers);

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <Home />
        </Provider>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});

AppRegistry.registerComponent("reduxLearnRegister", App);
