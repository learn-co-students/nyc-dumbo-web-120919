class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :user_id
      t.belongs_to :movie, foreign_key: true

      t.timestamps
    end
  end
end
