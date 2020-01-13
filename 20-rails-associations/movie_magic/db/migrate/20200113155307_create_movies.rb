class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title
      t.integer :vote_average
      t.integer :vote_count
      t.text :overview
      t.string :image_url
      t.integer :release_year
      
      t.timestamps
    end
  end
end
