import { Provider } from "react-redux";

import { makeStore } from "@/store";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Header } from "./Header";

export default {
  title: "Components/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
  <Provider store={makeStore}>
    <Header />
  </Provider>
);

export const Default = Template.bind({});
