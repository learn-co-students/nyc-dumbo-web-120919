eric = User.create(username: "Eric", password: "123")
mazen = User.create(username: "Mazen", password: "123")


Snack.create(name: "Jelly Beans", user: eric)
Snack.create(name: "Jelly Belly", user: eric)
Snack.create(name: "Lollipops", user: mazen)
