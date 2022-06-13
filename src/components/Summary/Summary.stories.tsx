import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Summary } from "./Summary";

export default {
  title: "Components/Summary",
  component: Summary,
  args: {
    data: {
      total: {
        income: 5000,
        outcome: 200,
        final: 4800,
      },
    },
  },
} as ComponentMeta<typeof Summary>;

const Template: ComponentStory<typeof Summary> = (args) => {
  return (
    <div style={{ marginTop: "12rem" }}>
      <Summary {...args} />
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  isLoading: false,
};
