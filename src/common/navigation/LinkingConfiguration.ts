/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */
import {RootStackParamList} from "./types";
import {LinkingOptions} from "@react-navigation/native";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ["/"],
  config: {
    screens: {
      Tab: "*",
    },
  },
};

export default linking;
