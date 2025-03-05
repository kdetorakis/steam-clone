const games = [
  {
    id: 1,
    title: "Cyberpunk 2077",
    genre: "RPG",
    price: 59.99,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg",
    developer: "CD Projekt Red",
    publisher: "CD Projekt",
    releaseDate: "2020-12-10",
    platforms: [
      "PC",
      "PlayStation 4",
      "Xbox One",
      "PlayStation 5",
      "Xbox Series X/S",
    ],
    rating: "Mature",
    description:
      "Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour, and body modification.",
  },
  {
    id: 2,
    title: "Elden Ring",
    genre: "Action RPG",
    price: 49.99,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg",
    developer: "FromSoftware",
    publisher: "Bandai Namco Entertainment",
    releaseDate: "2022-02-25",
    platforms: [
      "PC",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
    ],
    rating: "Mature",
    description:
      "Elden Ring is a fantasy action-RPG adventure set in a world co-created by Hidetaka Miyazaki and George R.R. Martin.",
  },
  {
    id: 3,
    title: "Counter-Strike 2",
    genre: "FPS",
    price: "Free",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg",
    developer: "Valve",
    publisher: "Valve",
    releaseDate: "2012-08-21",
    platforms: ["PC", "Linux", "macOS"],
    rating: "Mature",
    description:
      "Counter-Strike 2 is a multiplayer tactical first-person shooter game where players join either the terrorist or counter-terrorist team.",
  },
  {
    id: 4,
    title: "Grand Theft Auto V",
    genre: "Open World",
    price: 29.99,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg",
    developer: "Rockstar North",
    publisher: "Rockstar Games",
    releaseDate: "2013-09-17",
    platforms: [
      "PC",
      "PlayStation 3",
      "PlayStation 4",
      "Xbox 360",
      "Xbox One",
      "PlayStation 5",
      "Xbox Series X/S",
    ],
    rating: "Mature",
    description:
      "Grand Theft Auto V is an action-adventure game played from either a third-person or first-person perspective.",
  },
  {
    id: 5,
    title: "Red Dead Redemption 2",
    genre: "Adventure",
    price: 39.99,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg",
    developer: "Rockstar Studios",
    publisher: "Rockstar Games",
    releaseDate: "2018-10-26",
    platforms: ["PC", "PlayStation 4", "Xbox One"],
    rating: "Mature",
    description:
      "Red Dead Redemption 2 is a Western-themed action-adventure game set in an open world environment.",
  },
  {
    id: 6,
    title: "The Witcher 3: Wild Hunt",
    genre: "RPG",
    price: 19.99,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg",
    developer: "CD Projekt Red",
    publisher: "CD Projekt",
    releaseDate: "2015-05-19",
    platforms: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    rating: "Mature",
    description:
      "The Witcher 3: Wild Hunt is a story-driven open world RPG set in a visually stunning fantasy universe.",
  },
  {
    id: 7,
    title: "Dota 2",
    genre: "MOBA",
    price: "Free",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/570/header.jpg",
    developer: "Valve",
    publisher: "Valve",
    releaseDate: "2013-07-09",
    platforms: ["PC", "Linux", "macOS"],
    rating: "Teen",
    description:
      "Dota 2 is a multiplayer online battle arena (MOBA) game where two teams of five players compete to destroy the opposing team's Ancient.",
  },
  {
    id: 8,
    title: "Dark Souls III",
    genre: "Action RPG",
    price: 39.99,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/374320/header.jpg",
    developer: "FromSoftware",
    publisher: "Bandai Namco Entertainment",
    releaseDate: "2016-04-12",
    platforms: ["PC", "PlayStation 4", "Xbox One"],
    rating: "Mature",
    description:
      "Dark Souls III is an action RPG that continues to push the boundaries with the latest, ambitious chapter in the critically acclaimed Dark Souls series.",
  },
  {
    id: 9,
    title: "Hollow Knight",
    genre: "Metroidvania",
    price: 14.99,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg",
    developer: "Team Cherry",
    publisher: "Team Cherry",
    releaseDate: "2017-02-24",
    platforms: [
      "PC",
      "PlayStation 4",
      "Xbox One",
      "Nintendo Switch",
      "Linux",
      "macOS",
    ],
    rating: "Everyone 10+",
    description:
      "Hollow Knight is a 2D action-adventure game with an emphasis on traditional 2D animation and skillful gameplay.",
  },
  {
    id: 12,
    title: "Among Us",
    genre: "Party",
    price: 4.99,
    image: "https://cdn.akamai.steamstatic.com/steam/apps/945360/header.jpg",
    developer: "InnerSloth",
    publisher: "InnerSloth",
    releaseDate: "2018-06-15",
    platforms: [
      "PC",
      "iOS",
      "Android",
      "Nintendo Switch",
      "PlayStation 4",
      "Xbox One",
    ],
    rating: "Everyone 10+",
    description:
      "Among Us is a multiplayer party game where players work together to complete tasks while identifying the impostors among them.",
  },
];

export default games;
