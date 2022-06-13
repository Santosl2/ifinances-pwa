import { ComponentMeta, ComponentStory } from "@storybook/react";

import { LoadingIndicator } from "./LoadingIndicator";

export default {
  title: "Components/LoadingIndicator",
  component: LoadingIndicator,
} as ComponentMeta<typeof LoadingIndicator>;

const Template: ComponentStory<typeof LoadingIndicator> = (args) => (
  <LoadingIndicator {...args} />
);

export const Default = Template.bind({});

Default.args = {
  color: "#bbbbbb",
  width: "50px",
  height: "50px",
};
