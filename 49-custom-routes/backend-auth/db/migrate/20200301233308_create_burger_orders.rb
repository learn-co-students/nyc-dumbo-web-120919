class CreateBurgerOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :burger_orders do |t|
      t.references :burger, null: false, foreign_key: true
      t.references :order, null: false, foreign_key: true

      t.timestamps
    end
  end
end
