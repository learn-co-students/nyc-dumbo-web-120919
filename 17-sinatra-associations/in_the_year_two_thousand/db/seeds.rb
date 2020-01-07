Song.destroy_all
# User.destroy_all

songs = [
  {title: 'Cry Me a River', artist: 'Justin Timberlake', release_year: 2002, img_url: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-136088-f78dac9479e30198dfa642b0bd65499e7416cf89.jpg?resize=1240,1240&w=385', genre: 'pop'},
  {title: 'Hey Ya', artist: 'OutKast', release_year: 2003, img_url: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-136072-5cfe7d4725601adaba96117eabcb924b0bf2b5a6.jpg?resize=1240,1240&w=385', genre: 'hip-hop'},
  {title: 'Paper Planes', artist: 'M.I.A', release_year: 2007, img_url: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-136073-6a054ad95ee3c0359be77210bec4603a00f0d426.jpg?resize=1240,1240&w=385', genre: 'dance'},
  {title: '99 Problems', artist: 'Jay-Z', release_year: 2003, img_url: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-136070-6267bcdae7d7fdfc8dc12af25d6a2a80b0e8de50.jpg?resize=1240,1240&w=385', genre: 'hip-hop'},
  # {title: "", artist: "", release_year: , img_url: "", genre: ""},
  # {title: "", artist: "", release_year: , img_url: "", genre: ""},
  # {title: "", artist: "", release_year: , img_url: "", genre: ""},
  # {title: "", artist: "", release_year: , img_url: "", genre: ""},
  # {title: "", artist: "", release_year: , img_url: "", genre: ""},
  # {title: "", artist: "", release_year: , img_url: "", genre: ""},
  # {title: "", artist: "", release_year: , img_url: "", genre: ""},
]


songs.each do |song|
  Song.create(song)
end 

# users = [
#   {name: "Alison Quaglia", img_url: "https://ca.slack-edge.com/T02MD9XTF-UR5HZ0N4R-3a8789d5ca64-512"},
#   {name: "Angelo Poole", img_url: "https://ca.slack-edge.com/T02MD9XTF-UR22FU3JP-f5621415bb08-512"},
#   {name: "Annie Liao", img_url: "https://ca.slack-edge.com/T02MD9XTF-UR5HZ1E6M-5342f93026b1-512"},
#   {name: "David Cha", img_url: "https://ca.slack-edge.com/T02MD9XTF-URDG744DN-8c33b8a907e6-512"},
#   {name: "Ian Hollander", img_url: "https://ca.slack-edge.com/T02MD9XTF-UD54WDGFP-90d4735fb909-512"},
#   {name: "Kevin Gleeson", img_url: "https://ca.slack-edge.com/T02MD9XTF-URDG7620Y-1f912f45a62a-512"},
#   {name: "Michelle Pathe", img_url: "https://ca.slack-edge.com/T02MD9XTF-U9C1QTFPC-d10ffd32102f-512"},
#   {name: "Monsur Khan", img_url: "https://ca.slack-edge.com/T02MD9XTF-UQ848M9JN-b23790346dc4-512"},
#   {name: "Otha Hernandez", img_url: "https://ca.slack-edge.com/T02MD9XTF-UJ98VJZ2M-ecb76a82da04-512"},
#   {name: "Red Bahi", img_url: "https://ca.slack-edge.com/T02MD9XTF-URD2SUU04-1b746fb1550a-512"},
#   {name: "Randy Herasme", img_url: "https://ca.slack-edge.com/T02MD9XTF-UD452FLU9-bad871361d20-512"},
#   {name: "Sean Welsh Brown", img_url: "https://ca.slack-edge.com/T02MD9XTF-UR0NMQM42-034fb56f3580-512"},
#   {name: "Shaq Clarke", img_url: "https://ca.slack-edge.com/T02MD9XTF-UR0NMQVA6-eba5c789002b-512"},
# ]

# users.each do |user| 
#   User.create(user)
# end 