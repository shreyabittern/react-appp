class AddColoumToPatient < ActiveRecord::Migration[6.0]
  def change
    add_column :patients, :number, :integer
  end
end
