class CreateDefinitions < ActiveRecord::Migration[6.0]
  def change
    create_table :definitions do |t|
      t.string :body
      t.string :part_of_speech
      t.integer :likes
      t.belongs_to :word, null: false, foreign_key: true

      t.timestamps
    end
  end
end
