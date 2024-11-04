defmodule ClinicalTakehomeWeb.Schema do
  use Absinthe.Schema

  alias ClinicalTakehomeWeb.Resolvers.CellResolver

  query do
    field :list_cells, list_of(:cell) do
      resolve &CellResolver.list_cells/3
    end
  end

  mutation do
    field :toggle_cell, :cell do
      arg :row, non_null(:integer)
      arg :col, non_null(:integer)

      resolve &CellResolver.toggle_cell/3
    end
  end

  object :cell do
    field :id, :id
    field :row, :integer
    field :col, :integer
    field :is_active, :boolean
  end
end
