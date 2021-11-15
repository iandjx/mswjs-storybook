import { addDecorator } from "@storybook/react";
import { initializeWorker, mswDecorator } from "msw-storybook-addon";
// import jest from "jest";

initializeWorker();
addDecorator(mswDecorator);

// window.jest = jest;
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
