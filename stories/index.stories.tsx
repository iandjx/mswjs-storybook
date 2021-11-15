import Home from "../pages";
import { Meta } from "@storybook/react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { graphql } from "msw";
import { sum } from "../components/sum";
import { mocked } from "ts-jest/utils";
// jest.mock("../components.sum");

export default {
  title: "Apollo",
  component: Home,
} as Meta;

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
  cache: new InMemoryCache(),
});

export const HomeStory = () => (
  // const mockedSum = mocked(sum);
  // mockedSum.mockImplementationOnce(() => 4);
  <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>
);
HomeStory.parameters = {
  msw: [
    graphql.query("GetExchangeRates", (req, res, ctx) => {
      return res(
        ctx.data({
          rates: [
            {
              currency: "php",
              rate: "120",
            },
          ],
        })
      );
    }),
  ],
};
