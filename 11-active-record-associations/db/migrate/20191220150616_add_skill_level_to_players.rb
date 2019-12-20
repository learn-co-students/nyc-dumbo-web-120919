class AddSkillLevelToPlayers < ActiveRecord::Migration[5.2]
  def change
    add_column :players, :skill_level, :integer
  end
end
