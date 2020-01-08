Song.destroy_all
Stan.destroy_all

songs = [
  {title: 'Cry Me a River', artist: 'Justin Timberlake', release_year: 2002, img_url: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-136088-f78dac9479e30198dfa642b0bd65499e7416cf89.jpg?resize=1240,1240&w=385', genre: 'pop'},
  {title: 'Hey Ya', artist: 'OutKast', release_year: 2003, img_url: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-136072-5cfe7d4725601adaba96117eabcb924b0bf2b5a6.jpg?resize=1240,1240&w=385', genre: 'hip-hop'},
  {title: 'Paper Planes', artist: 'M.I.A', release_year: 2007, img_url: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-136073-6a054ad95ee3c0359be77210bec4603a00f0d426.jpg?resize=1240,1240&w=385', genre: 'dance'},
  {title: '99 Problems', artist: 'Jay-Z', release_year: 2003, img_url: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-136070-6267bcdae7d7fdfc8dc12af25d6a2a80b0e8de50.jpg?resize=1240,1240&w=385', genre: 'hip-hop'},
  {title: "Hot in Herre", artist: "Nelly", release_year: 2002, img_url: "https://upload.wikimedia.org/wikipedia/en/7/7e/NellyHotInHerre.png", genre: "hip-hop"},
  {title: "In da Club", artist: "50 Cent", release_year: 2003, img_url: "https://upload.wikimedia.org/wikipedia/en/1/12/50_Cent_-_In_Da_Club_-_CD_cover.jpg", genre: "hip-hop"},
  {title: "Drop It Like It's Hot", artist: "Snoop Dogg", release_year: 2004, img_url: "https://upload.wikimedia.org/wikipedia/en/8/83/SnoopDoggDILIH.jpg", genre: "hip-hop"},
  {title: "Umbrella", artist: "Rihanna", release_year: 2007, img_url: "https://upload.wikimedia.org/wikipedia/en/0/01/Rihanna_-_Umbrella.png", genre: "pop"},
  {title: "Single Ladies", artist: "Beyoncé", release_year: 2008, img_url: "https://upload.wikimedia.org/wikipedia/en/4/44/Single_Ladies_%28Put_a_Ring_on_It%29_cover.png", genre: "pop"},
  {title: "I Gotta Feeling", artist: "Black Eyed Peas", release_year: 2009, img_url: "https://upload.wikimedia.org/wikipedia/en/f/f4/I_Gotta_Feeling.png", genre: "pop"},
  {title: "Yeah!", artist: "Usher ", release_year: 2004, img_url: "https://upload.wikimedia.org/wikipedia/en/2/2e/Usher-yeah.jpg", genre: "hip-hop"}
]


songs.each do |song|
  Song.create(song)
end 

users = [
  {name: "Alison Quaglia", img_url: "https://ca.slack-edge.com/T02MD9XTF-UR5HZ0N4R-3a8789d5ca64-512", song_id: Song.all.sample.id},
  {name: "Angelo Poole", img_url: "https://ca.slack-edge.com/T02MD9XTF-UR22FU3JP-f5621415bb08-512", song_id: Song.all.sample.id},
  {name: "Annie Liao", img_url: "https://ca.slack-edge.com/T02MD9XTF-UR5HZ1E6M-5342f93026b1-512", song_id: Song.all.sample.id},
  {name: "David Cha", img_url: "https://ca.slack-edge.com/T02MD9XTF-URDG744DN-8c33b8a907e6-512", song_id: Song.all.sample.id},
  {name: "Ian Hollander", img_url: "https://ca.slack-edge.com/T02MD9XTF-UD54WDGFP-90d4735fb909-512", song_id: Song.all.sample.id},
  {name: "Kevin Gleeson", img_url: "https://ca.slack-edge.com/T02MD9XTF-URDG7620Y-1f912f45a62a-512", song_id: Song.all.sample.id},
  {name: "Michelle Pathe", img_url: "https://ca.slack-edge.com/T02MD9XTF-U9C1QTFPC-d10ffd32102f-512", song_id: Song.all.sample.id},
  {name: "Monsur Khan", img_url: "https://ca.slack-edge.com/T02MD9XTF-UQ848M9JN-b23790346dc4-512", song_id: Song.all.sample.id},
  {name: "Otha Hernandez", img_url: "https://ca.slack-edge.com/T02MD9XTF-UJ98VJZ2M-ecb76a82da04-512", song_id: Song.all.sample.id},
  {name: "Red Bahi", img_url: "https://ca.slack-edge.com/T02MD9XTF-URD2SUU04-1b746fb1550a-512", song_id: Song.all.sample.id},
  {name: "Randy Herasme", img_url: "https://ca.slack-edge.com/T02MD9XTF-UD452FLU9-bad871361d20-512", song_id: Song.all.sample.id},
  {name: "Sean Welsh Brown", img_url: "https://ca.slack-edge.com/T02MD9XTF-UR0NMQM42-034fb56f3580-512", song_id: Song.all.sample.id},
  {name: "Shaq Clarke", img_url: "https://ca.slack-edge.com/T02MD9XTF-UR0NMQVA6-eba5c789002b-512", song_id: Song.all.sample.id},
  {name: "Gracie McGuire", img_url: "https://ca.slack-edge.com/T02MD9XTF-UD5PW68JW-f90e84fbb445-512", song_id: Song.all.sample.id},
  {name: "Elizabeth Kim", img_url: "https://ca.slack-edge.com/T02MD9XTF-UR0NMMF8S-2ddd9542afe0-512", song_id: Song.all.sample.id},
  {name: "Summer Rizzo", img_url: "https://ca.slack-edge.com/T02MD9XTF-UR22G3D7D-5b7b5152272d-512", song_id: Song.all.sample.id},
  {name: "Tom Donovan", img_url: "https://ca.slack-edge.com/T02MD9XTF-URFC3EV39-48f428b0b8a8-512", song_id: Song.all.sample.id},
  {name: "Mazen Al Swar", img_url: "https://ca.slack-edge.com/T02MD9XTF-UFKMPLPQ8-a306271a419d-512", song_id: Song.all.sample.id}
]

users.each do |user| 
  Stan.create(user)
end 