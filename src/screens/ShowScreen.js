import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";

export const ShowScreen = ({ navigation }) => {
  //console.log(navigation.getParam('id'))
  const { state } = useContext(Context);
  //console.log(state)

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  // console.log(blogPost);
  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Edit", {id: navigation.getParam('id')})}>
        <EvilIcons name="pencil" size={30} />
      </TouchableOpacity>
    ),
  };
};
