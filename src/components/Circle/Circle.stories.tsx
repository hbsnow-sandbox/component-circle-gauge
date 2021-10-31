import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Circle } from ".";

export default {
  title: "Example/Circle",
  component: Circle,
} as ComponentMeta<typeof Circle>;

const Template: ComponentStory<typeof Circle> = (props) => (
  <Circle {...props} />
);

export const Default = Template.bind({});
Default.args = {
  color: "#000",
  r: 50,
  strokeWidth: 10,
  value: 76,
};
