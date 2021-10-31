import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CirrcleDashArray } from ".";

export default {
  title: "Example/CirrcleDashArray",
  component: CirrcleDashArray,
} as ComponentMeta<typeof CirrcleDashArray>;

const Template: ComponentStory<typeof CirrcleDashArray> = (props) => (
  <CirrcleDashArray {...props} />
);

export const Default = Template.bind({});
Default.args = {
  color: "#000",
  r: 50,
  strokeWidth: 10,
  value: 76,
};
