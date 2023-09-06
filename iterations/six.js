const books =  [
    {
      title: "The Forgotten Kingdom",
      author: "Jane Doe",
      genre: "Fantasy",
      publishedYear: 2015,
    },
    {
      title: "Echoes of Eternity",
      author: "John Smith",
      genre: "Science Fiction",
      publishedYear: 2018,
    },
    {
      title: "Secrets of the Lost City",
      author: "Alice Johnson",
      genre: "Adventure",
      publishedYear: 2017,
    },
    {
      title: "The Enchanted Forest",
      author: "David Brown",
      genre: "Fantasy",
      publishedYear: 2019,
    },
    {
      title: "Galactic Odyssey",
      author: "Emily White",
      genre: "Science Fiction",
      publishedYear: 2020,
    },
    {
      title: "The Quest for Atlantis",
      author: "Michael Green",
      genre: "Adventure",
      publishedYear: 2016,
    },
    {
      title: "Dreamscape Chronicles",
      author: "Sophia Lee",
      genre: "Fantasy",
      publishedYear: 2022,
    },
    {
      title: "Time Traveler's Dilemma",
      author: "William Turner",
      genre: "Science Fiction",
      publishedYear: 2021,
    },
    {
      title: "Pirate's Treasure",
      author: "Olivia Clark",
      genre: "Adventure",
      publishedYear: 2014,
    },
    {
      title: "The Mythical Beasts",
      author: "Daniel Taylor",
      genre: "Fantasy",
      publishedYear: 2023,
    },
  ]

// give me the books whoes genre is Fantasy

let userBooks = books.filter((bk)=> bk.genre === 'Fantasy')
  //   console.log(userBooks);

// books wjich are published after 2020
userBooks = books.filter((bk)=>bk.publishedYear > 2020 && bk.genre === "Fantasy")
console.log(userBooks);


