class CreatePatients < ActiveRecord::Migration[6.0]
  def change
    create_table :patients do |t|
      t.string :name
      t.text :description

      t.timestamps
    end
  end

  def change
    create_table :patients do |t|
      t.string :name
      t.text :description
      t.integer :number


      t.timestamps
    end
  end
end
