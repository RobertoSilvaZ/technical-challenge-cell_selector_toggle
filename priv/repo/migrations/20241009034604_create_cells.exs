defmodule ClinicalTakehome.Repo.Migrations.CreateCells do
  use Ecto.Migration

  def change do
    create table(:cells) do
      add :row, :integer, null: false
      add :col, :integer, null: false
      add :is_active, :boolean, default: false, null: false

      timestamps()
    end

    create unique_index(:cells, [:row, :col])
  end
end
