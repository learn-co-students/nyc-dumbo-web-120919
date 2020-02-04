

imgur = [
    "https://i.imgur.com/AmzgvrE.jpg",
    "https://i.imgur.com/9iz3pHJ.jpg",
    "https://i.imgur.com/31Tnvjk.jpg",
    "https://i.imgur.com/Yx0byvh.jpg",
    "https://i.imgur.com/HQe1XHK.jpg",
    "https://i.imgur.com/E9btXlb.jpg",
    "https://i.imgur.com/AOxb7TH.jpg",
    "https://i.imgur.com/O1yhmg8.jpg",
    "https://i.imgur.com/7U2KxaO.jpg",
    "https://i.imgur.com/83lzOX8.jpg",
    "https://i.imgur.com/BIeJCCg.jpg",
    "https://i.imgur.com/kjAQQuZ.jpg",
]




imgur.each do |i|
    Dog.create(
        mood: Faker::Creature::Dog.meme_phrase,
        img: i
    )
end

puts "Doggos ready"