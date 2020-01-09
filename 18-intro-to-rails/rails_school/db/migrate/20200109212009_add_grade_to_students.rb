class AddGradeToStudents < ActiveRecord::Migration[5.2]
  def change
    add_column :students, :grade, :integer
  end
end
