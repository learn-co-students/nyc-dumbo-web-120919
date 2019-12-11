require 'pry'
require_relative 'models/user'
require_relative 'models/tweet'

coffee_dad = User.new("coffee_dad", "just a coffee lovin dad")
tea_mom = User.new("tea_mom", "Tea > Coffee")

Tweet.new("havin #a coffee", coffee_dad)

Tweet.new("T T T", tea_mom)

Tweet.new("coffee coffee coffee", coffee_dad)

coffee_dad.post_tweet("almost drank tea 🤮")

Tweet.new("Tea for Me", tea_mom)

binding.pry
"hi"