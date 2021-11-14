import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

const Home: NextPage = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {console.log(error)}</p>;

  return data.rates.map(
    ({ currency, rate }: any): JSX.Element => (
      <div key={currency}>
        <p>
          {currency}: {rate}
        </p>
      </div>
    )
  );
};

export default Home;
