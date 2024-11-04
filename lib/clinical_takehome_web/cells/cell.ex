defmodule ClinicalTakehome.Cells.Cell do
  use Ecto.Schema
  import Ecto.Changeset

  schema "cells" do
    field :row, :integer
    field :col, :integer
    field :is_active, :boolean, default: false

    timestamps()
  end

  def changeset(cell, attrs) do
    cell
    |> cast(attrs, [:row, :col, :is_active])
    |> validate_required([:row, :col, :is_active])
  end
end
