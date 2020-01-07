class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :title
      t.string :artist
      t.string :genre
      t.integer :release_year
      t.string :img_url
    
      t.timestamps
    end 
  end
end
