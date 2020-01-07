Song.destroy_all

songs = [
  {title: 'Cry Me a River', artist: 'Justin Timberlake', release_year: 2002, img_url: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-136088-f78dac9479e30198dfa642b0bd65499e7416cf89.jpg?resize=1240,1240&w=385', genre: 'pop'},
  {title: 'Hey Ya', artist: 'OutKast', release_year: 2003, img_url: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-136072-5cfe7d4725601adaba96117eabcb924b0bf2b5a6.jpg?resize=1240,1240&w=385', genre: 'hip-hop'},
  {title: 'Paper Planes', artist: 'M.I.A', release_year: 2007, img_url: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-136073-6a054ad95ee3c0359be77210bec4603a00f0d426.jpg?resize=1240,1240&w=385', genre: 'dance'},
  {title: '99 Problems', artist: 'Jay-Z', release_year: 2003, img_url: 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-136070-6267bcdae7d7fdfc8dc12af25d6a2a80b0e8de50.jpg?resize=1240,1240&w=385', genre: 'hip-hop'}
]



songs.each do |song|
  Song.create(song)
end 