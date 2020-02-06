words = [
  {
    "id": 1,
    "content": "Rails",
    "category": "Mod 2",
    "definitions": [
      {
        "id": 1,
        "body": "Something Ian taught before Javascript",
        "part_of_speech": "noun",
        "likes": 10
      }
    ]
  },
  {
    "id": 2,
    "content": "Green Check Syndrome",
    "category": "All of Flatiron",
    "definitions": [
      {
        "id": 2,
        "body": "The condition of needing to finish all your labs",
        "part_of_speech": "noun",
        "likes": -10
      }
    ]
  },
  {
    "id": 3,
    "content": "WeWork Metal Cups",
    "category": "After Hours",
    "definitions": [
      {
        "id": 3,
        "body": "A nice, sturdy cup to drink out of",
        "part_of_speech": "noun",
        "likes": 10
      },
      {
        "id": 4,
        "body": "An after-hours flask",
        "part_of_speech": "noun",
        "likes": 100
      }
    ]
  }
]

# copy words from db.json to array and use this
words.each do |word_hash|
  # for each word, create a definition
  word = Word.create(word_hash.except(:id, :definitions)) # .except in Rails will return a hash without the specified keys
  
  word_hash[:definitions].each do |definition_hash|
    # for each definition on the word, create a definition associated with that word
    word.definitions.create(definition_hash.except(:id))
  end
end