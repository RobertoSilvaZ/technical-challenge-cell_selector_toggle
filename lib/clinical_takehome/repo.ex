defmodule ClinicalTakehome.Repo do
  use Ecto.Repo,
    otp_app: :clinical_takehome,
    adapter: Ecto.Adapters.Postgres
end
