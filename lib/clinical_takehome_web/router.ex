defmodule ClinicalTakehomeWeb.Router do
  use ClinicalTakehomeWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", ClinicalTakehomeWeb do
    pipe_through :api
  end

  # GraphQL API
  forward "/graphql", Absinthe.Plug, schema: ClinicalTakehomeWeb.Schema

  # GraphQL UI
  forward "/graphiql", Absinthe.Plug.GraphiQL, schema: ClinicalTakehomeWeb.Schema
end
