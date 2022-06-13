import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const Default = Template.bind({});

Default.args = {
  bgColor: "#3692d5",
  children: "Enviar",
};

export const Loading = Template.bind({});

Loading.args = {
  isLoading: true,
  bgColor: "#3692d5",
  children: "Enviar",
};
