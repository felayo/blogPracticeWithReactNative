import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { ShowScreen } from "./src/screens/ShowScreen";
import { EditScreen } from "./src/screens/EditScreen";
import CreateScreen  from "./src/screens/CreateScreen";
import { Provider as BlogProvider } from "./src/context/BlogContext";


const AppNavigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogs",
    },
  }
);

const App = createAppContainer(AppNavigator);

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
