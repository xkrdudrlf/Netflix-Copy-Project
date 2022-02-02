import * as config from "../../src/js/config.mjs";

class DummyData {
  $results;
  $slidesData;
  $detailsData;

  constructor() {
    this.setResults();
    this.setSlidesData();
    this.setDetailsData();
  }

  setResults() {
    this.$results = [
      {
        adult: false,
        backdrop_path: "/1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg",
        genre_ids: [28, 12, 878],
        id: 634649,
        original_language: "en",
        original_title: "Spider-Man: No Way Home",
        overview:
          "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
        popularity: 8022.274,
        poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        release_date: "2021-12-15",
        title: "Spider-Man: No Way Home",
        video: false,
        vote_average: 8.4,
        vote_count: 3887,
      },
      {
        adult: false,
        backdrop_path: "/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg",
        genre_ids: [16, 35, 10751, 14],
        id: 568124,
        original_language: "en",
        original_title: "Encanto",
        overview:
          "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.",
        popularity: 7247.534,
        poster_path: "/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
        release_date: "2021-11-24",
        title: "Encanto",
        video: false,
        vote_average: 7.8,
        vote_count: 2464,
      },
    ];
  }

  setSlidesData() {
    this.$slidesData = [];
    this.$results.forEach((result) => {
      if (result.backdrop_path) {
        const slideData = {
          id: result.id,
          genre: result.original_title ? "movie" : "tv",
          slideImage: result.backdrop_path,
          slideModalContentHTML: `
            <div class="title">
              ${result.original_title ?? result.original_name}  
            </div>
            <div class="rating">${result.adult ? "Adult" : "All"}</div>
            <ul class="genre-list">
              ${result.genre_ids
                .slice(0, 3)
                .map((genreId) => {
                  return `
                    <li class="genre">
                      ${config.GENRE_HASHTABLE[genreId]}
                    </li>
                  `;
                })
                .join("")}
            </ul>
          `,
        };
        this.$slidesData.push(slideData);
      }
    });
  }

  setDetailsData() {
    this.$detailsData = {
      adult: false,
      backdrop_path: "/1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg",
      belongs_to_collection: {
        id: 531241,
        name: "Spider-Man (Avengers) Collection",
        poster_path: "/nogV4th2P5QWYvQIMiWHj4CFLU9.jpg",
        backdrop_path: "/AvnqpRwlEaYNVL6wzC4RN94EdSd.jpg",
      },
      budget: 200000000,
      genres: [
        {
          id: 28,
          name: "Action",
        },
        {
          id: 12,
          name: "Adventure",
        },
        {
          id: 878,
          name: "Science Fiction",
        },
      ],
      homepage: "https://www.spidermannowayhome.movie",
      id: 634649,
      imdb_id: "tt10872600",
      original_language: "en",
      original_title: "Spider-Man: No Way Home",
      overview:
        "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
      popularity: 8022.274,
      poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
      production_companies: [
        {
          id: 420,
          logo_path: "/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
          name: "Marvel Studios",
          origin_country: "US",
        },
        {
          id: 84041,
          logo_path: "/nw4kyc29QRpNtFbdsBHkRSFavvt.png",
          name: "Pascal Pictures",
          origin_country: "US",
        },
        {
          id: 5,
          logo_path: "/71BqEFAF4V3qjjMPCpLuyJFB9A.png",
          name: "Columbia Pictures",
          origin_country: "US",
        },
      ],
      production_countries: [
        {
          iso_3166_1: "US",
          name: "United States of America",
        },
      ],
      release_date: "2021-12-15",
      revenue: 1538282364,
      runtime: 148,
      spoken_languages: [
        {
          english_name: "English",
          iso_639_1: "en",
          name: "English",
        },
        {
          english_name: "Tagalog",
          iso_639_1: "tl",
          name: "",
        },
      ],
      status: "Released",
      tagline: "The Multiverse unleashed.",
      title: "Spider-Man: No Way Home",
      video: false,
      vote_average: 8.4,
      vote_count: 3955,
    };
  }
}

export default new DummyData();
