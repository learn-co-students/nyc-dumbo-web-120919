class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.string :name
      t.integer :age
      t.string :console
 
      t.timestamps
      # created_at, updated_at
    end
  end
end
