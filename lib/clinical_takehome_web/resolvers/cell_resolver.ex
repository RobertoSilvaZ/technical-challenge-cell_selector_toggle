defmodule ClinicalTakehomeWeb.Resolvers.CellResolver do
  alias ClinicalTakehome.Repo
  alias ClinicalTakehome.Cells.Cell

  # Resolver to toggle the is_active field of a cell
  def toggle_cell(_, %{row: row, col: col}, _) do
    case Repo.get_by(Cell, row: row, col: col) do
      # If the cell doesn't exist, create it
      nil ->
        %Cell{}
        |> Cell.changeset(%{row: row, col: col, is_active: true})
        |> Repo.insert()
        |> case do
          {:ok, cell} -> {:ok, cell}
          {:error, changeset} -> {:error, "Error creating cell: #{inspect(changeset.errors)}"}
        end

      %Cell{} = cell ->
        # Toggle the is_active field if the cell exists
        cell
        |> Cell.changeset(%{is_active: !cell.is_active})
        |> Repo.update()
        |> case do
          {:ok, cell} -> {:ok, cell}
          {:error, changeset} -> {:error, "Error updating cell: #{inspect(changeset.errors)}"}
        end
    end
  end

  # Resolver to list all cells
  def list_cells(_, _, _) do
    {:ok, Repo.all(Cell)}
  end
end
