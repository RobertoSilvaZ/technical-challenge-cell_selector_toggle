import React from "react";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const client = new ApolloClient({
  uri: "api/graphql",
  cache: new InMemoryCache(),
});

const el = document.getElementById("root");
if (el === null) {
  throw new Error("no element with id 'root'");
}
const root = ReactDOM.createRoot(el);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
