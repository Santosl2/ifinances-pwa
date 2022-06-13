import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Order } from "./Order";

export default {
  title: "Components/Summary/Order",
  component: Order,
  args: {
    amount: 500,
    title: "Entradas",
    icon: "income.svg",
    isLoading: false,
  },
} as ComponentMeta<typeof Order>;

const Template: ComponentStory<typeof Order> = (args) => <Order {...args} />;

export const Default = Template.bind({});
