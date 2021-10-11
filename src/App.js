import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Drawer from "./navigation/CustomDrawer";
import store from "./redux/store";
import { Provider } from "react-redux";
// import { Provider } from "react-redux";
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"Home"}
        >
          <Stack.Screen name="Home" component={Drawer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
