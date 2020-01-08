class CreateStans < ActiveRecord::Migration
  def change
    create_table :stans do |t|
      t.string :name
      t.string :img_url
      t.integer :song_id
      
      t.timestamps
    end
  end
end
