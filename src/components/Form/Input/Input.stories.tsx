import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FieldError } from "react-hook-form";

import { Input } from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  args: {
    error: {
      message: "Insira um e-mail válido.",
    } as FieldError,
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: "email",
  label: "E-mail",
  type: "email",
};
