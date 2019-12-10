require 'pry'

# # EXERCISE:
instructors = [
  { name: 'Ian', hometown: 'Suttons Bay,', excitement_level: 10 },
  { name: 'Mazen', hometown: 'Bahrain', excitement_level: 10 },
  { name: 'Leizl', hometown: 'New Jersey', excitement_level: 1 }
]

# # Define a method called get_names that takes an array of instructors
# # and returns an array of strings of the instructors names
def get_names(instructors)
  # map will return a new array with the same number of elements
  instructors.map do |instructor_hash|
    # we want to return JUST the name
    instructor_hash[:name]
  end
end

# # Define a method called excited_instructors that takes an array of instructors
# # and returns an array of hashes with only the instructors with an energy level higher than 5
def excited_instructors(instructors)
  # select will return a new array with elements where the block returns true
  instructors.select do |instructor_hash|
    # we want check if the excitement_level is more than 5 (this will evaluate as a boolean)
    instructor_hash[:excitement_level] > 5
  end
end

# # Define a method called get_instructor_by_hometown that takes an array of instructors AND a string of a hometown
# # and returns just the one instructor hash whose hometown matches
def get_instructor_by_hometown(instructors, hometown)
  # find will return the FIRST element that the block returns true for
  instructors.find do |instructor_hash|
    # we want to compare the hometown being passed as an argument to each instructor's hometown
    instructor_hash[:hometown] == hometown
  end
end

p get_names(instructors)

p excited_instructors(instructors)

p get_instructor_by_hometown(instructors, "Bahrain")

binding.pry
"pls"