defmodule ClinicalTakehome.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      ClinicalTakehomeWeb.Telemetry,
      ClinicalTakehome.Repo,
      {DNSCluster, query: Application.get_env(:clinical_takehome, :dns_cluster_query) || :ignore},
      {Phoenix.PubSub, name: ClinicalTakehome.PubSub},
      # Start a worker by calling: ClinicalTakehome.Worker.start_link(arg)
      # {ClinicalTakehome.Worker, arg},
      # Start to serve requests, typically the last entry
      ClinicalTakehomeWeb.Endpoint
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: ClinicalTakehome.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    ClinicalTakehomeWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
