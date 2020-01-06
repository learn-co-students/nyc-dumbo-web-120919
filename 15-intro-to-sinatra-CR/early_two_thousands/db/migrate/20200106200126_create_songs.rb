class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :title
      t.string :genre
      t.integer :release_year
      t.string :artist
      t.string :img_url 
    end 
  end
end
