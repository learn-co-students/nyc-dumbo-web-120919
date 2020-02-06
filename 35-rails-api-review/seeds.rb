# copy words from db.json to array and use this
words.each do |word_hash|
  # for each word, create a definition
  word = Word.create(word_hash.except(:id, :definitions)) # .except in Rails will return a hash without the specified keys
  
  word_hash[:definitions].each do |definition_hash|
    # for each definition on the word, create a definition associated with that word
    word.definitions.create(definition_hash.except(:id))
  end
end