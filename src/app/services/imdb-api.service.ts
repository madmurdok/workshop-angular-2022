import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { AppHttpClientService } from '../_shared/services/app-http-client.service';
import { ImdbAdvSearchResponce } from '../interfaces/imdb-adv-search-responce';
import { ImdbSearchResponse } from '../interfaces/imdb-search-response';

@Injectable({
  providedIn: 'root'
})
export class ImdbApiService {
  baseUrl = environment.imdbApiUrl;
  api_key= 'k_mo1kszt0';


  constructor(private appHttpclientService: AppHttpClientService) { }

  searchMovies(searchExpression: string): Observable<ImdbAdvSearchResponce> {
    // const url = `${this.baseUrl}/en/API/SearchMovie/${this.api_key}?${searchExpression}`
    const url = `${this.baseUrl}/API/AdvancedSearch/${this.api_key}?${searchExpression}`
    console.log(url);
    return this.appHttpclientService.Get(url);
  }

  //hardcoded, just for test
  searchMoviesStored() {
    return of({
      "queryString": "?title_type=feature,tv_movie,tv_special,documentary,short,video&num_votes=5000,&genres=action&runtime=100,&sort=user_rating,desc",
      "results": [
        {
          "id": "tt0468569",
          "image": "https://imdb-api.com/images/original/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_Ratio0.6837_AL_.jpg",
          "title": "The Dark Knight",
          "description": "(2008)",
          "runtimeStr": "152 min",
          "genres": "Action, Crime, Drama",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Crime",
              "value": "Crime"
            },
            {
              "key": "Drama",
              "value": "Drama"
            }
          ],
          "contentRating": "PG-13",
          "imDbRating": "9.0",
          "imDbRatingVotes": "2494880",
          "metacriticRating": "84",
          "plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
          "stars": "Christopher Nolan, Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
          "starList": [
            {
              "id": "tt0468569",
              "name": "Christopher Nolan"
            },
            {
              "id": "tt0468569",
              "name": "Christian Bale"
            },
            {
              "id": "tt0468569",
              "name": "Heath Ledger"
            },
            {
              "id": "tt0468569",
              "name": "Aaron Eckhart"
            },
            {
              "id": "tt0468569",
              "name": "Michael Caine"
            }
          ]
        },
        {
          "id": "tt0237376",
          "image": "https://imdb-api.com/images/original/MV5BY2U2YmVjMmUtZjFhNS00YTBhLWFmOGYtYWRiYjBmZDkwMTU1XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_Ratio0.6837_AL_.jpg",
          "title": "Kireedam",
          "description": "(1989)",
          "runtimeStr": "124 min",
          "genres": "Action, Drama",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Drama",
              "value": "Drama"
            }
          ],
          "contentRating": "Not Rated",
          "imDbRating": "8.9",
          "imDbRatingVotes": "7315",
          "metacriticRating": null,
          "plot": "The life of a young man turns upside down when he intervenes in a dispute in order to rescue his father (a cop) from a ruthless local outlaw.",
          "stars": "Sibi Malayil, Mohanlal, Thilakan, Kaviyoor Ponnamma, Parvathi",
          "starList": [
            {
              "id": "tt0237376",
              "name": "Sibi Malayil"
            },
            {
              "id": "tt0237376",
              "name": "Mohanlal"
            },
            {
              "id": "tt0237376",
              "name": "Thilakan"
            },
            {
              "id": "tt0237376",
              "name": "Kaviyoor Ponnamma"
            },
            {
              "id": "tt0237376",
              "name": "Parvathi"
            }
          ]
        },
        {
          "id": "tt0167260",
          "image": "https://imdb-api.com/images/original/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6837_AL_.jpg",
          "title": "The Lord of the Rings: The Return of the King",
          "description": "(2003)",
          "runtimeStr": "201 min",
          "genres": "Action, Adventure, Drama",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Adventure",
              "value": "Adventure"
            },
            {
              "key": "Drama",
              "value": "Drama"
            }
          ],
          "contentRating": "PG-13",
          "imDbRating": "8.9",
          "imDbRatingVotes": "1754097",
          "metacriticRating": "94",
          "plot": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
          "stars": "Peter Jackson, Elijah Wood, Viggo Mortensen, Ian McKellen, Orlando Bloom",
          "starList": [
            {
              "id": "tt0167260",
              "name": "Peter Jackson"
            },
            {
              "id": "tt0167260",
              "name": "Elijah Wood"
            },
            {
              "id": "tt0167260",
              "name": "Viggo Mortensen"
            },
            {
              "id": "tt0167260",
              "name": "Ian McKellen"
            },
            {
              "id": "tt0167260",
              "name": "Orlando Bloom"
            }
          ]
        },
        {
          "id": "tt14888874",
          "image": "https://imdb-api.com/images/original/MV5BN2EwNTUwYWItZTY4ZC00N2Q1LWFhZWQtNjMwMDBkZDVmYThjXkEyXkFqcGdeQXVyOTA2OTk0MDg@._V1_Ratio0.6837_AL_.jpg",
          "title": "Demon Slayer: Kimetsu no Yaiba - Mt. Natagumo Arc",
          "description": "(2020)",
          "runtimeStr": "138 min",
          "genres": "Animation, Action, Fantasy",
          "genreList": [
            {
              "key": "Animation",
              "value": "Animation"
            },
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Fantasy",
              "value": "Fantasy"
            }
          ],
          "contentRating": null,
          "imDbRating": "8.8",
          "imDbRatingVotes": "7868",
          "metacriticRating": null,
          "plot": "Tanjiro teams up with Zenitsu and Inosuke to investigate missing person cases on the mountain Natagumo. They slowly begin to realize the entire mountain is being controlled by a family of Demon spider creatures.",
          "stars": "Haruo Sotozaki",
          "starList": [
            {
              "id": "tt14888874",
              "name": "Haruo Sotozaki"
            }
          ]
        },
        {
          "id": "tt1375666",
          "image": "https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.6837_AL_.jpg",
          "title": "Inception",
          "description": "(2010)",
          "runtimeStr": "148 min",
          "genres": "Action, Adventure, Sci-Fi",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Adventure",
              "value": "Adventure"
            },
            {
              "key": "Sci-Fi",
              "value": "Sci-Fi"
            }
          ],
          "contentRating": "PG-13",
          "imDbRating": "8.8",
          "imDbRatingVotes": "2234812",
          "metacriticRating": "74",
          "plot": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
          "stars": "Christopher Nolan, Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Ken Watanabe",
          "starList": [
            {
              "id": "tt1375666",
              "name": "Christopher Nolan"
            },
            {
              "id": "tt1375666",
              "name": "Leonardo DiCaprio"
            },
            {
              "id": "tt1375666",
              "name": "Joseph Gordon-Levitt"
            },
            {
              "id": "tt1375666",
              "name": "Elliot Page"
            },
            {
              "id": "tt1375666",
              "name": "Ken Watanabe"
            }
          ]
        },
        {
          "id": "tt0120737",
          "image": "https://imdb-api.com/images/original/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_Ratio0.6837_AL_.jpg",
          "title": "The Lord of the Rings: The Fellowship of the Ring",
          "description": "(2001)",
          "runtimeStr": "178 min",
          "genres": "Action, Adventure, Drama",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Adventure",
              "value": "Adventure"
            },
            {
              "key": "Drama",
              "value": "Drama"
            }
          ],
          "contentRating": "PG-13",
          "imDbRating": "8.8",
          "imDbRatingVotes": "1775848",
          "metacriticRating": "92",
          "plot": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
          "stars": "Peter Jackson, Elijah Wood, Ian McKellen, Orlando Bloom, Sean Bean",
          "starList": [
            {
              "id": "tt0120737",
              "name": "Peter Jackson"
            },
            {
              "id": "tt0120737",
              "name": "Elijah Wood"
            },
            {
              "id": "tt0120737",
              "name": "Ian McKellen"
            },
            {
              "id": "tt0120737",
              "name": "Orlando Bloom"
            },
            {
              "id": "tt0120737",
              "name": "Sean Bean"
            }
          ]
        },
        {
          "id": "tt6019206",
          "image": "https://imdb-api.com/images/original/MV5BNzQyZTgyYmQtNmExMS00YzNkLWIyOTAtYmVkNjAwZGE5ZDM1XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_Ratio0.8061_AL_.jpg",
          "title": "Kill Bill: The Whole Bloody Affair",
          "description": "(2011)",
          "runtimeStr": "247 min",
          "genres": "Action, Crime, Thriller",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Crime",
              "value": "Crime"
            },
            {
              "key": "Thriller",
              "value": "Thriller"
            }
          ],
          "contentRating": "Not Rated",
          "imDbRating": "8.7",
          "imDbRatingVotes": "8928",
          "metacriticRating": null,
          "plot": "The Bride must kill her ex-boss and lover Bill who betrayed her at her wedding rehearsal, shot her in the head and took away her unborn daughter. But first, she must make the other four members of the Deadly Viper Assassination Squad suffer.",
          "stars": "Quentin Tarantino, Uma Thurman, Vivica A. Fox, Michael Madsen, Daryl Hannah",
          "starList": [
            {
              "id": "tt6019206",
              "name": "Quentin Tarantino"
            },
            {
              "id": "tt6019206",
              "name": "Uma Thurman"
            },
            {
              "id": "tt6019206",
              "name": "Vivica A. Fox"
            },
            {
              "id": "tt6019206",
              "name": "Michael Madsen"
            },
            {
              "id": "tt6019206",
              "name": "Daryl Hannah"
            }
          ]
        },
        {
          "id": "tt5813916",
          "image": "https://imdb-api.com/images/original/MV5BN2I2NGMzMTItNWI4YS00MWRiLTliZTEtNzhjODE3NDcyZjQwXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.7449_AL_.jpg",
          "title": "The Mountain II",
          "description": "(2016)",
          "runtimeStr": "135 min",
          "genres": "Action, Drama, War",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Drama",
              "value": "Drama"
            },
            {
              "key": "War",
              "value": "War"
            }
          ],
          "contentRating": null,
          "imDbRating": "8.7",
          "imDbRatingVotes": "107537",
          "metacriticRating": null,
          "plot": "In a desolate war zone where screams of the innocent echo, seven Maroon Berets will dance with death on the very line between disaster and valor.",
          "stars": "Alper Caglar, Caglar Ertugrul, Ufuk Bayraktar, Ahu Türkpençe, Murat Serezli",
          "starList": [
            {
              "id": "tt5813916",
              "name": "Alper Caglar"
            },
            {
              "id": "tt5813916",
              "name": "Caglar Ertugrul"
            },
            {
              "id": "tt5813916",
              "name": "Ufuk Bayraktar"
            },
            {
              "id": "tt5813916",
              "name": "Ahu Türkpençe"
            },
            {
              "id": "tt5813916",
              "name": "Murat Serezli"
            }
          ]
        },
        {
          "id": "tt4983780",
          "image": "https://imdb-api.com/images/original/MV5BMjFkMTFjYjgtNDhkNS00MGNmLWJkZWMtZWIwNGYyOWE3MTM0XkEyXkFqcGdeQXVyMTE1MjcwOTA4._V1_Ratio0.7041_AL_.jpg",
          "title": "Maanaadu",
          "description": "(2021)",
          "runtimeStr": "147 min",
          "genres": "Action, Adventure, Sci-Fi",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Adventure",
              "value": "Adventure"
            },
            {
              "key": "Sci-Fi",
              "value": "Sci-Fi"
            }
          ],
          "contentRating": "PG-13",
          "imDbRating": "8.7",
          "imDbRatingVotes": "19430",
          "metacriticRating": null,
          "plot": "On the day of a public conference by the state's Chief Minister, his bodyguard and a police officer are stuck in a time loop.",
          "stars": "Venkat Prabhu, T.R. Silambarasan, S.J. Suryah, Kalyani Priyadarshan, S.A. Chandrashekhar",
          "starList": [
            {
              "id": "tt4983780",
              "name": "Venkat Prabhu"
            },
            {
              "id": "tt4983780",
              "name": "T.R. Silambarasan"
            },
            {
              "id": "tt4983780",
              "name": "S.J. Suryah"
            },
            {
              "id": "tt4983780",
              "name": "Kalyani Priyadarshan"
            },
            {
              "id": "tt4983780",
              "name": "S.A. Chandrashekhar"
            }
          ]
        },
        {
          "id": "tt12415546",
          "image": "https://imdb-api.com/images/original/MV5BMzQwZjZkMTktYzNkNC00ZWFlLWE4NGEtMjA3YTA4OTEyZWVkXkEyXkFqcGdeQXVyMTA5MTI0Mzc1._V1_Ratio0.7041_AL_.jpg",
          "title": "Attack on Titan: Chronicle",
          "description": "(2020)",
          "runtimeStr": "122 min",
          "genres": "Animation, Action, Adventure",
          "genreList": [
            {
              "key": "Animation",
              "value": "Animation"
            },
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Adventure",
              "value": "Adventure"
            }
          ],
          "contentRating": null,
          "imDbRating": "8.7",
          "imDbRatingVotes": "9032",
          "metacriticRating": null,
          "plot": "A recap of the popular anime series Shingeki no Kyojin from seasons 1-3.",
          "stars": "Masashi Koizuka, Tetsurô Araki, Marina Inoue, Yui Ishikawa, Yûki Kaji, Yû Shimamura",
          "starList": [
            {
              "id": "tt12415546",
              "name": "Masashi Koizuka"
            },
            {
              "id": "tt12415546",
              "name": "Tetsurô Araki"
            },
            {
              "id": "tt12415546",
              "name": "Marina Inoue"
            },
            {
              "id": "tt12415546",
              "name": "Yui Ishikawa"
            },
            {
              "id": "tt12415546",
              "name": "Yûki Kaji"
            },
            {
              "id": "tt12415546",
              "name": "Yû Shimamura"
            }
          ]
        },
        {
          "id": "tt11580854",
          "image": "https://imdb-api.com/images/original/MV5BYmQxNDliY2EtZWFlZS00YWM4LTkzMzAtMWZjNDFmNjkwM2JlXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_Ratio0.6837_AL_.jpg",
          "title": "Sarpatta Parambarai",
          "description": "(2021)",
          "runtimeStr": "173 min",
          "genres": "Action, Drama, Sport",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Drama",
              "value": "Drama"
            },
            {
              "key": "Sport",
              "value": "Sport"
            }
          ],
          "contentRating": null,
          "imDbRating": "8.7",
          "imDbRatingVotes": "20105",
          "metacriticRating": null,
          "plot": "When Sarpatta Parambarai is challenged to a do-or-die match, will Kabilan, a young labourer, put on the gloves himself and lead his clan to victory, or be dissuaded by his disapproving mother and dangerous politics?",
          "stars": "Pa. Ranjith, Arya, Pasupathy, John Kokken, Shabeer Kallarakkal",
          "starList": [
            {
              "id": "tt11580854",
              "name": "Pa. Ranjith"
            },
            {
              "id": "tt11580854",
              "name": "Arya"
            },
            {
              "id": "tt11580854",
              "name": "Pasupathy"
            },
            {
              "id": "tt11580854",
              "name": "John Kokken"
            },
            {
              "id": "tt11580854",
              "name": "Shabeer Kallarakkal"
            }
          ]
        },
        {
          "id": "tt10872600",
          "image": "https://imdb-api.com/images/original/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_Ratio0.6837_AL_.jpg",
          "title": "Spider-Man: No Way Home",
          "description": "(2021)",
          "runtimeStr": "148 min",
          "genres": "Action, Adventure, Fantasy",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Adventure",
              "value": "Adventure"
            },
            {
              "key": "Fantasy",
              "value": "Fantasy"
            }
          ],
          "contentRating": "PG-13",
          "imDbRating": "8.7",
          "imDbRatingVotes": "457930",
          "metacriticRating": "71",
          "plot": "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
          "stars": "Jon Watts, Tom Holland, Zendaya, Benedict Cumberbatch, Jacob Batalon",
          "starList": [
            {
              "id": "tt10872600",
              "name": "Jon Watts"
            },
            {
              "id": "tt10872600",
              "name": "Tom Holland"
            },
            {
              "id": "tt10872600",
              "name": "Zendaya"
            },
            {
              "id": "tt10872600",
              "name": "Benedict Cumberbatch"
            },
            {
              "id": "tt10872600",
              "name": "Jacob Batalon"
            }
          ]
        },
        {
          "id": "tt10295212",
          "image": "https://imdb-api.com/images/original/MV5BMjk1NzcwMDUtNDU4ZC00MzlhLTkzZjAtM2MxMTRjZGE0ODdhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_Ratio0.7449_AL_.jpg",
          "title": "Shershaah",
          "description": "(2021)",
          "runtimeStr": "135 min",
          "genres": "Action, Biography, Drama",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Biography",
              "value": "Biography"
            },
            {
              "key": "Drama",
              "value": "Drama"
            }
          ],
          "contentRating": "TV-14",
          "imDbRating": "8.7",
          "imDbRatingVotes": "113090",
          "metacriticRating": null,
          "plot": "The story of PVC awardee Indian soldier Capt. Vikram Batra, who shot to fame and became a household name during the Kargil War in 1999.",
          "stars": "Vishnuvardhan, Sidharth Malhotra, Kiara Advani, Shiv Panditt, Pranay Pachauri",
          "starList": [
            {
              "id": "tt10295212",
              "name": "Vishnuvardhan"
            },
            {
              "id": "tt10295212",
              "name": "Sidharth Malhotra"
            },
            {
              "id": "tt10295212",
              "name": "Kiara Advani"
            },
            {
              "id": "tt10295212",
              "name": "Shiv Panditt"
            },
            {
              "id": "tt10295212",
              "name": "Pranay Pachauri"
            }
          ]
        },
        {
          "id": "tt0291855",
          "image": "https://imdb-api.com/images/original/MV5BNzY5ZTA3YWItMjYxZi00ZWFlLWEwN2ItZDBhMTFjNjYzNGM4XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_Ratio0.7245_AL_.jpg",
          "title": "Devasuram",
          "description": "(1993)",
          "runtimeStr": "187 min",
          "genres": "Action, Drama, Thriller",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Drama",
              "value": "Drama"
            },
            {
              "key": "Thriller",
              "value": "Thriller"
            }
          ],
          "contentRating": "Not Rated",
          "imDbRating": "8.7",
          "imDbRatingVotes": "5563",
          "metacriticRating": null,
          "plot": "Neelakanthan squanders away the inheritance left by his father. However, his life turns upside down when his mother reveals a terrible secret on her deathbed that changes the course of his life.",
          "stars": "I.V. Sasi, Mohanlal, Revathi, Nedumudi Venu, Innocent",
          "starList": [
            {
              "id": "tt0291855",
              "name": "I.V. Sasi"
            },
            {
              "id": "tt0291855",
              "name": "Mohanlal"
            },
            {
              "id": "tt0291855",
              "name": "Revathi"
            },
            {
              "id": "tt0291855",
              "name": "Nedumudi Venu"
            },
            {
              "id": "tt0291855",
              "name": "Innocent"
            }
          ]
        },
        {
          "id": "tt0167261",
          "image": "https://imdb-api.com/images/original/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6837_AL_.jpg",
          "title": "The Lord of the Rings: The Two Towers",
          "description": "(2002)",
          "runtimeStr": "179 min",
          "genres": "Action, Adventure, Drama",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Adventure",
              "value": "Adventure"
            },
            {
              "key": "Drama",
              "value": "Drama"
            }
          ],
          "contentRating": "PG",
          "imDbRating": "8.7",
          "imDbRatingVotes": "1584842",
          "metacriticRating": "87",
          "plot": "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
          "stars": "Peter Jackson, Elijah Wood, Ian McKellen, Viggo Mortensen, Orlando Bloom",
          "starList": [
            {
              "id": "tt0167261",
              "name": "Peter Jackson"
            },
            {
              "id": "tt0167261",
              "name": "Elijah Wood"
            },
            {
              "id": "tt0167261",
              "name": "Ian McKellen"
            },
            {
              "id": "tt0167261",
              "name": "Viggo Mortensen"
            },
            {
              "id": "tt0167261",
              "name": "Orlando Bloom"
            }
          ]
        },
        {
          "id": "tt0133093",
          "image": "https://imdb-api.com/images/original/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6837_AL_.jpg",
          "title": "The Matrix",
          "description": "(1999)",
          "runtimeStr": "136 min",
          "genres": "Action, Sci-Fi",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Sci-Fi",
              "value": "Sci-Fi"
            }
          ],
          "contentRating": "R",
          "imDbRating": "8.7",
          "imDbRatingVotes": "1835783",
          "metacriticRating": "73",
          "plot": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
          "stars": "Lana Wachowski, Lilly Wachowski, Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving",
          "starList": [
            {
              "id": "tt0133093",
              "name": "Lana Wachowski"
            },
            {
              "id": "tt0133093",
              "name": "Lilly Wachowski"
            },
            {
              "id": "tt0133093",
              "name": "Keanu Reeves"
            },
            {
              "id": "tt0133093",
              "name": "Laurence Fishburne"
            },
            {
              "id": "tt0133093",
              "name": "Carrie-Anne Moss"
            },
            {
              "id": "tt0133093",
              "name": "Hugo Weaving"
            }
          ]
        },
        {
          "id": "tt0080684",
          "image": "https://imdb-api.com/images/original/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6837_AL_.jpg",
          "title": "Star Wars: Episode V - The Empire Strikes Back",
          "description": "(1980)",
          "runtimeStr": "124 min",
          "genres": "Action, Adventure, Fantasy",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Adventure",
              "value": "Adventure"
            },
            {
              "key": "Fantasy",
              "value": "Fantasy"
            }
          ],
          "contentRating": "PG",
          "imDbRating": "8.7",
          "imDbRatingVotes": "1233739",
          "metacriticRating": "82",
          "plot": "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.",
          "stars": "Irvin Kershner, Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams",
          "starList": [
            {
              "id": "tt0080684",
              "name": "Irvin Kershner"
            },
            {
              "id": "tt0080684",
              "name": "Mark Hamill"
            },
            {
              "id": "tt0080684",
              "name": "Harrison Ford"
            },
            {
              "id": "tt0080684",
              "name": "Carrie Fisher"
            },
            {
              "id": "tt0080684",
              "name": "Billy Dee Williams"
            }
          ]
        },
        {
          "id": "tt9477520",
          "image": "https://imdb-api.com/images/original/MV5BYWE3M2FhMmYtYjJjZC00YTZlLTkyNGYtMTg2YjQ2ZjA5MzZjXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_Ratio0.6837_AL_.jpg",
          "title": "Asuran",
          "description": "(2019)",
          "runtimeStr": "141 min",
          "genres": "Action, Drama",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Drama",
              "value": "Drama"
            }
          ],
          "contentRating": "Not Rated",
          "imDbRating": "8.6",
          "imDbRatingVotes": "25156",
          "metacriticRating": null,
          "plot": "The teenage son of a farmer from an underprivileged caste kills a rich, upper caste landlord. Will the farmer, a loving father and a pacifist by heart, be able to save his hot-blooded son is the rest of the story.",
          "stars": "Vetrimaaran, Dhanush, Manju Warrier, Prakash Raj, Pasupathy",
          "starList": [
            {
              "id": "tt9477520",
              "name": "Vetrimaaran"
            },
            {
              "id": "tt9477520",
              "name": "Dhanush"
            },
            {
              "id": "tt9477520",
              "name": "Manju Warrier"
            },
            {
              "id": "tt9477520",
              "name": "Prakash Raj"
            },
            {
              "id": "tt9477520",
              "name": "Pasupathy"
            }
          ]
        },
        {
          "id": "tt0292246",
          "image": "https://imdb-api.com/images/original/MV5BN2I5NzUzYjQtZDRkNC00Yzc4LTk3ODItY2UzYWQwOWNiYjhhXkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_Ratio0.7653_AL_.jpg",
          "title": "Spadikam",
          "description": "(1995)",
          "runtimeStr": "150 min",
          "genres": "Action, Drama",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Drama",
              "value": "Drama"
            }
          ],
          "contentRating": "Not Rated",
          "imDbRating": "8.6",
          "imDbRatingVotes": "5566",
          "metacriticRating": null,
          "plot": "A small-town criminal constantly clashes with his strict school headmaster father at the expense of their family lives.",
          "stars": "Bhadran, Mohanlal, Thilakan, Sphadikam George, Urvashi",
          "starList": [
            {
              "id": "tt0292246",
              "name": "Bhadran"
            },
            {
              "id": "tt0292246",
              "name": "Mohanlal"
            },
            {
              "id": "tt0292246",
              "name": "Thilakan"
            },
            {
              "id": "tt0292246",
              "name": "Sphadikam George"
            },
            {
              "id": "tt0292246",
              "name": "Urvashi"
            }
          ]
        },
        {
          "id": "tt0076759",
          "image": "https://imdb-api.com/images/original/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6837_AL_.jpg",
          "title": "Star Wars: Episode IV - A New Hope",
          "description": "(1977)",
          "runtimeStr": "121 min",
          "genres": "Action, Adventure, Fantasy",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Adventure",
              "value": "Adventure"
            },
            {
              "key": "Fantasy",
              "value": "Fantasy"
            }
          ],
          "contentRating": "PG",
          "imDbRating": "8.6",
          "imDbRatingVotes": "1305238",
          "metacriticRating": "90",
          "plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
          "stars": "George Lucas, Mark Hamill, Harrison Ford, Carrie Fisher, Alec Guinness",
          "starList": [
            {
              "id": "tt0076759",
              "name": "George Lucas"
            },
            {
              "id": "tt0076759",
              "name": "Mark Hamill"
            },
            {
              "id": "tt0076759",
              "name": "Harrison Ford"
            },
            {
              "id": "tt0076759",
              "name": "Carrie Fisher"
            },
            {
              "id": "tt0076759",
              "name": "Alec Guinness"
            }
          ]
        },
        {
          "id": "tt0056058",
          "image": "https://imdb-api.com/images/original/MV5BYjBmYTQ1NjItZWU5MS00YjI0LTg2OTYtYmFkN2JkMmNiNWVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_Ratio0.7245_AL_.jpg",
          "title": "Hara-Kiri",
          "description": "(1962)",
          "runtimeStr": "133 min",
          "genres": "Action, Drama, Mystery",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Drama",
              "value": "Drama"
            },
            {
              "key": "Mystery",
              "value": "Mystery"
            }
          ],
          "contentRating": "Not Rated",
          "imDbRating": "8.6",
          "imDbRatingVotes": "52287",
          "metacriticRating": "85",
          "plot": "When a ronin requesting seppuku at a feudal lord's palace is told of the brutal suicide of another ronin who previously visited, he reveals how their pasts are intertwined - and in doing so challenges the clan's integrity.",
          "stars": "Masaki Kobayashi, Tatsuya Nakadai, Akira Ishihama, Shima Iwashita, Tetsurô Tanba",
          "starList": [
            {
              "id": "tt0056058",
              "name": "Masaki Kobayashi"
            },
            {
              "id": "tt0056058",
              "name": "Tatsuya Nakadai"
            },
            {
              "id": "tt0056058",
              "name": "Akira Ishihama"
            },
            {
              "id": "tt0056058",
              "name": "Shima Iwashita"
            },
            {
              "id": "tt0056058",
              "name": "Tetsurô Tanba"
            }
          ]
        },
        {
          "id": "tt0047478",
          "image": "https://imdb-api.com/images/original/MV5BOWE4ZDdhNmMtNzE5ZC00NzExLTlhNGMtY2ZhYjYzODEzODA1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_Ratio0.7041_AL_.jpg",
          "title": "Seven Samurai",
          "description": "(1954)",
          "runtimeStr": "207 min",
          "genres": "Action, Drama",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Drama",
              "value": "Drama"
            }
          ],
          "contentRating": "Not Rated",
          "imDbRating": "8.6",
          "imDbRatingVotes": "335560",
          "metacriticRating": "98",
          "plot": "A poor village under attack by bandits recruits seven unemployed samurai to help them defend themselves.",
          "stars": "Akira Kurosawa, Toshirô Mifune, Takashi Shimura, Keiko Tsushima, Yukiko Shimazaki",
          "starList": [
            {
              "id": "tt0047478",
              "name": "Akira Kurosawa"
            },
            {
              "id": "tt0047478",
              "name": "Toshirô Mifune"
            },
            {
              "id": "tt0047478",
              "name": "Takashi Shimura"
            },
            {
              "id": "tt0047478",
              "name": "Keiko Tsushima"
            },
            {
              "id": "tt0047478",
              "name": "Yukiko Shimazaki"
            }
          ]
        },
        {
          "id": "tt9900782",
          "image": "https://imdb-api.com/images/original/MV5BMzNjMDhmYzEtM2YxOC00NzZjLThkODctZjI4M2UyOWIyOTZmXkEyXkFqcGdeQXVyNzcxMzI4Njk@._V1_Ratio0.6837_AL_.jpg",
          "title": "Kaithi",
          "description": "(2019)",
          "runtimeStr": "145 min",
          "genres": "Action, Crime, Thriller",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Crime",
              "value": "Crime"
            },
            {
              "key": "Thriller",
              "value": "Thriller"
            }
          ],
          "contentRating": "Not Rated",
          "imDbRating": "8.5",
          "imDbRatingVotes": "21271",
          "metacriticRating": null,
          "plot": "Dilli, an ex-convict, endeavours to meet his daughter for the first time after leaving prison. However, his attempts are interrupted due to a drug raid planned by Inspector Bejoy.",
          "stars": "Lokesh Kanagaraj, Karthi, Narain, Ramana, George Maryan",
          "starList": [
            {
              "id": "tt9900782",
              "name": "Lokesh Kanagaraj"
            },
            {
              "id": "tt9900782",
              "name": "Karthi"
            },
            {
              "id": "tt9900782",
              "name": "Narain"
            },
            {
              "id": "tt9900782",
              "name": "Ramana"
            },
            {
              "id": "tt9900782",
              "name": "George Maryan"
            }
          ]
        },
        {
          "id": "tt5959980",
          "image": "https://imdb-api.com/images/original/MV5BOWZmM2U1ODctMDkwMC00Yzc3LWExODgtZmUxZWQ0M2YxNzIzXkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_Ratio0.6837_AL_.jpg",
          "title": "Vada Chennai",
          "description": "(2018)",
          "runtimeStr": "164 min",
          "genres": "Action, Crime, Drama",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Crime",
              "value": "Crime"
            },
            {
              "key": "Drama",
              "value": "Drama"
            }
          ],
          "contentRating": "Not Rated",
          "imDbRating": "8.5",
          "imDbRatingVotes": "15841",
          "metacriticRating": null,
          "plot": "A young carrom player in north Chennai becomes a reluctant participant in a war between two warring gangsters.",
          "stars": "Vetrimaaran, Dhanush, Ameer Sultan, Radha Ravi, Daniel Balaji",
          "starList": [
            {
              "id": "tt5959980",
              "name": "Vetrimaaran"
            },
            {
              "id": "tt5959980",
              "name": "Dhanush"
            },
            {
              "id": "tt5959980",
              "name": "Ameer Sultan"
            },
            {
              "id": "tt5959980",
              "name": "Radha Ravi"
            },
            {
              "id": "tt5959980",
              "name": "Daniel Balaji"
            }
          ]
        },
        {
          "id": "tt0459516",
          "image": "https://imdb-api.com/images/original/MV5BZGVlYjYyYTMtYTE3OS00Yzg2LWE3MjgtMDAwMTJjNGM4MjM3XkEyXkFqcGdeQXVyODE0NjUxNzY@._V1_Ratio0.9898_AL_.jpg",
          "title": "Pudhu Pettai",
          "description": "(2006)",
          "runtimeStr": "168 min",
          "genres": "Action, Crime, Drama",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Crime",
              "value": "Crime"
            },
            {
              "key": "Drama",
              "value": "Drama"
            }
          ],
          "contentRating": "Not Rated",
          "imDbRating": "8.5",
          "imDbRatingVotes": "6231",
          "metacriticRating": null,
          "plot": "After running away from his home, Kumar falls in with a gang and slowly rises through the ranks of the criminal underworld.",
          "stars": "K. Selvaraghavan, Dhanush, Sneha, Sonia Agarwal, Azhagam Perumal",
          "starList": [
            {
              "id": "tt0459516",
              "name": "K. Selvaraghavan"
            },
            {
              "id": "tt0459516",
              "name": "Dhanush"
            },
            {
              "id": "tt0459516",
              "name": "Sneha"
            },
            {
              "id": "tt0459516",
              "name": "Sonia Agarwal"
            },
            {
              "id": "tt0459516",
              "name": "Azhagam Perumal"
            }
          ]
        },
        {
          "id": "tt0400234",
          "image": "https://imdb-api.com/images/original/MV5BYWRjMDlmNGYtOGFhYy00ZWU4LTk3MzEtOTI4ZTgxN2Y5NGNkXkEyXkFqcGdeQXVyNzU3Nzk4MDQ@._V1_Ratio0.6837_AL_.jpg",
          "title": "Black Friday",
          "description": "(2004)",
          "runtimeStr": "143 min",
          "genres": "Action, Crime, Drama",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Crime",
              "value": "Crime"
            },
            {
              "key": "Drama",
              "value": "Drama"
            }
          ],
          "contentRating": "Not Rated",
          "imDbRating": "8.5",
          "imDbRatingVotes": "20385",
          "metacriticRating": "76",
          "plot": "A film about the investigations following the 1993 serial Bombay bomb blasts, told through the different stories of the people involved --police, conspirators, victims, middlemen.",
          "stars": "Anurag Kashyap, Kay Kay Menon, Pawan Malhotra, Aditya Srivastav, Dibyendu Bhattacharya",
          "starList": [
            {
              "id": "tt0400234",
              "name": "Anurag Kashyap"
            },
            {
              "id": "tt0400234",
              "name": "Kay Kay Menon"
            },
            {
              "id": "tt0400234",
              "name": "Pawan Malhotra"
            },
            {
              "id": "tt0400234",
              "name": "Aditya Srivastav"
            },
            {
              "id": "tt0400234",
              "name": "Dibyendu Bhattacharya"
            }
          ]
        },
        {
          "id": "tt0172495",
          "image": "https://imdb-api.com/images/original/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6837_AL_.jpg",
          "title": "Gladiator",
          "description": "(2000)",
          "runtimeStr": "155 min",
          "genres": "Action, Adventure, Drama",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Adventure",
              "value": "Adventure"
            },
            {
              "key": "Drama",
              "value": "Drama"
            }
          ],
          "contentRating": "R",
          "imDbRating": "8.5",
          "imDbRatingVotes": "1434972",
          "metacriticRating": "67",
          "plot": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
          "stars": "Ridley Scott, Russell Crowe, Joaquin Phoenix, Connie Nielsen, Oliver Reed",
          "starList": [
            {
              "id": "tt0172495",
              "name": "Ridley Scott"
            },
            {
              "id": "tt0172495",
              "name": "Russell Crowe"
            },
            {
              "id": "tt0172495",
              "name": "Joaquin Phoenix"
            },
            {
              "id": "tt0172495",
              "name": "Connie Nielsen"
            },
            {
              "id": "tt0172495",
              "name": "Oliver Reed"
            }
          ]
        },
        {
          "id": "tt0110413",
          "image": "https://imdb-api.com/images/original/MV5BODllNWE0MmEtYjUwZi00ZjY3LThmNmQtZjZlMjI2YTZjYmQ0XkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_Ratio0.6837_AL_.jpg",
          "title": "Léon: The Professional",
          "description": "(1994)",
          "runtimeStr": "110 min",
          "genres": "Action, Crime, Drama",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Crime",
              "value": "Crime"
            },
            {
              "key": "Drama",
              "value": "Drama"
            }
          ],
          "contentRating": "R",
          "imDbRating": "8.5",
          "imDbRatingVotes": "1111345",
          "metacriticRating": "64",
          "plot": "12-year-old Mathilda is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassin's trade.",
          "stars": "Luc Besson, Jean Reno, Gary Oldman, Natalie Portman, Danny Aiello",
          "starList": [
            {
              "id": "tt0110413",
              "name": "Luc Besson"
            },
            {
              "id": "tt0110413",
              "name": "Jean Reno"
            },
            {
              "id": "tt0110413",
              "name": "Gary Oldman"
            },
            {
              "id": "tt0110413",
              "name": "Natalie Portman"
            },
            {
              "id": "tt0110413",
              "name": "Danny Aiello"
            }
          ]
        },
        {
          "id": "tt0103064",
          "image": "https://imdb-api.com/images/original/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_Ratio0.6837_AL_.jpg",
          "title": "Terminator 2: Judgment Day",
          "description": "(1991)",
          "runtimeStr": "137 min",
          "genres": "Action, Sci-Fi",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Sci-Fi",
              "value": "Sci-Fi"
            }
          ],
          "contentRating": "R",
          "imDbRating": "8.5",
          "imDbRatingVotes": "1055930",
          "metacriticRating": "75",
          "plot": "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten-year-old son John from a more advanced and powerful cyborg.",
          "stars": "James Cameron, Arnold Schwarzenegger, Linda Hamilton, Edward Furlong, Robert Patrick",
          "starList": [
            {
              "id": "tt0103064",
              "name": "James Cameron"
            },
            {
              "id": "tt0103064",
              "name": "Arnold Schwarzenegger"
            },
            {
              "id": "tt0103064",
              "name": "Linda Hamilton"
            },
            {
              "id": "tt0103064",
              "name": "Edward Furlong"
            },
            {
              "id": "tt0103064",
              "name": "Robert Patrick"
            }
          ]
        },
        {
          "id": "tt0101649",
          "image": "https://imdb-api.com/images/original/MV5BZGE5NzVjNTEtMGUwYi00YzU0LWIyYTctNDc0ZjMxNGNhYzg5XkEyXkFqcGdeQXVyMjMwODI3NDE@._V1_Ratio0.6837_AL_.jpg",
          "title": "Thalapathi",
          "description": "(1991)",
          "runtimeStr": "157 min",
          "genres": "Action, Crime, Drama",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Crime",
              "value": "Crime"
            },
            {
              "key": "Drama",
              "value": "Drama"
            }
          ],
          "contentRating": "Not Rated",
          "imDbRating": "8.5",
          "imDbRatingVotes": "11681",
          "metacriticRating": null,
          "plot": "An orphan named Surya raised in a slum befriends a good crime boss named Devaraj and works for him. Their existence is threatened when a new honest district collector arrives.",
          "stars": "Mani Ratnam, Rajinikanth, Mammootty, Shobana, Arvind Swamy",
          "starList": [
            {
              "id": "tt0101649",
              "name": "Mani Ratnam"
            },
            {
              "id": "tt0101649",
              "name": "Rajinikanth"
            },
            {
              "id": "tt0101649",
              "name": "Mammootty"
            },
            {
              "id": "tt0101649",
              "name": "Shobana"
            },
            {
              "id": "tt0101649",
              "name": "Arvind Swamy"
            }
          ]
        },
        {
          "id": "tt9098872",
          "image": "https://imdb-api.com/images/original/MV5BODIwNGZiNjQtM2FhYy00NDZkLTlmOTUtZjMzNTE2YWI2NzRlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.6837_AL_.jpg",
          "title": "The Rescue",
          "description": "(2021)",
          "runtimeStr": "107 min",
          "genres": "Documentary, Action, Mystery",
          "genreList": [
            {
              "key": "Documentary",
              "value": "Documentary"
            },
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Mystery",
              "value": "Mystery"
            }
          ],
          "contentRating": "PG",
          "imDbRating": "8.4",
          "imDbRatingVotes": "9400",
          "metacriticRating": null,
          "plot": "A chronicle of the enthralling, against-all-odds story that transfixed the world in 2018: the daring rescue of twelve boys and their coach from deep inside a flooded cave in Northern Thailand.",
          "stars": "Jimmy Chin, Elizabeth Chai Vasarhelyi, Bancha Duriyapunt, Apakorn Youkongkaew, Anan Surawan, Woranan Ratrawiphukkun",
          "starList": [
            {
              "id": "tt9098872",
              "name": "Jimmy Chin"
            },
            {
              "id": "tt9098872",
              "name": "Elizabeth Chai Vasarhelyi"
            },
            {
              "id": "tt9098872",
              "name": "Bancha Duriyapunt"
            },
            {
              "id": "tt9098872",
              "name": "Apakorn Youkongkaew"
            },
            {
              "id": "tt9098872",
              "name": "Anan Surawan"
            },
            {
              "id": "tt9098872",
              "name": "Woranan Ratrawiphukkun"
            }
          ]
        },
        {
          "id": "tt7392212",
          "image": "https://imdb-api.com/images/original/MV5BMjQ1MjFkN2EtOTU4NS00NDkzLThhNzItODkzYWNjZDMxZjE0XkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_Ratio0.7041_AL_.jpg",
          "title": "Rangasthalam 1985",
          "description": "(2018)",
          "runtimeStr": "170 min",
          "genres": "Action, Drama",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Drama",
              "value": "Drama"
            }
          ],
          "contentRating": "Not Rated",
          "imDbRating": "8.4",
          "imDbRatingVotes": "22436",
          "metacriticRating": null,
          "plot": "Chitti Babu begins to suspect his elder brother's life is in danger after they team up to lock horns with their village president and overthrow his unlawful 30 year old regime.",
          "stars": "Sukumar, Ram Charan, Samantha Ruth Prabhu, Aadhi, Jagapathi Babu",
          "starList": [
            {
              "id": "tt7392212",
              "name": "Sukumar"
            },
            {
              "id": "tt7392212",
              "name": "Ram Charan"
            },
            {
              "id": "tt7392212",
              "name": "Samantha Ruth Prabhu"
            },
            {
              "id": "tt7392212",
              "name": "Aadhi"
            },
            {
              "id": "tt7392212",
              "name": "Jagapathi Babu"
            }
          ]
        },
        {
          "id": "tt5074352",
          "image": "https://imdb-api.com/images/original/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_Ratio0.7041_AL_.jpg",
          "title": "Dangal",
          "description": "(2016)",
          "runtimeStr": "161 min",
          "genres": "Action, Biography, Drama",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Biography",
              "value": "Biography"
            },
            {
              "key": "Drama",
              "value": "Drama"
            }
          ],
          "contentRating": "Not Rated",
          "imDbRating": "8.4",
          "imDbRatingVotes": "178201",
          "metacriticRating": null,
          "plot": "Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games in the face of societal oppression.",
          "stars": "Nitesh Tiwari, Aamir Khan, Sakshi Tanwar, Fatima Sana Shaikh, Sanya Malhotra",
          "starList": [
            {
              "id": "tt5074352",
              "name": "Nitesh Tiwari"
            },
            {
              "id": "tt5074352",
              "name": "Aamir Khan"
            },
            {
              "id": "tt5074352",
              "name": "Sakshi Tanwar"
            },
            {
              "id": "tt5074352",
              "name": "Fatima Sana Shaikh"
            },
            {
              "id": "tt5074352",
              "name": "Sanya Malhotra"
            }
          ]
        },
        {
          "id": "tt4987556",
          "image": "https://imdb-api.com/images/original/MV5BNWFkMDA1MzEtNzRkMS00YzQxLTk1MmItMTlmY2QzMTBhOWI4XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_Ratio0.6837_AL_.jpg",
          "title": "Thani Oruvan",
          "description": "(2015)",
          "runtimeStr": "160 min",
          "genres": "Action, Crime, Thriller",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Crime",
              "value": "Crime"
            },
            {
              "key": "Thriller",
              "value": "Thriller"
            }
          ],
          "contentRating": "Not Rated",
          "imDbRating": "8.4",
          "imDbRatingVotes": "19293",
          "metacriticRating": null,
          "plot": "Siddharth Abimanyu, an influential scientist, is involved in various illegal medical practices. Mithran, an efficient IPS officer, decides to expose him.",
          "stars": "Mohan Raja, Jayam Ravi, Arvind Swamy, Nayanthara, Nassar",
          "starList": [
            {
              "id": "tt4987556",
              "name": "Mohan Raja"
            },
            {
              "id": "tt4987556",
              "name": "Jayam Ravi"
            },
            {
              "id": "tt4987556",
              "name": "Arvind Swamy"
            },
            {
              "id": "tt4987556",
              "name": "Nayanthara"
            },
            {
              "id": "tt4987556",
              "name": "Nassar"
            }
          ]
        },
        {
          "id": "tt4633694",
          "image": "https://imdb-api.com/images/original/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_Ratio0.6837_AL_.jpg",
          "title": "Spider-Man: Into the Spider-Verse",
          "description": "(2018)",
          "runtimeStr": "117 min",
          "genres": "Animation, Action, Adventure",
          "genreList": [
            {
              "key": "Animation",
              "value": "Animation"
            },
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Adventure",
              "value": "Adventure"
            }
          ],
          "contentRating": "PG",
          "imDbRating": "8.4",
          "imDbRatingVotes": "470222",
          "metacriticRating": "87",
          "plot": "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
          "stars": "Bob Persichetti, Peter Ramsey, Rodney Rothman, Shameik Moore, Jake Johnson, Hailee Steinfeld, Mahershala Ali",
          "starList": [
            {
              "id": "tt4633694",
              "name": "Bob Persichetti"
            },
            {
              "id": "tt4633694",
              "name": "Peter Ramsey"
            },
            {
              "id": "tt4633694",
              "name": "Rodney Rothman"
            },
            {
              "id": "tt4633694",
              "name": "Shameik Moore"
            },
            {
              "id": "tt4633694",
              "name": "Jake Johnson"
            },
            {
              "id": "tt4633694",
              "name": "Hailee Steinfeld"
            },
            {
              "id": "tt4633694",
              "name": "Mahershala Ali"
            }
          ]
        },
        {
          "id": "tt4154796",
          "image": "https://imdb-api.com/images/original/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_Ratio0.6837_AL_.jpg",
          "title": "Avengers: Endgame",
          "description": "(2019)",
          "runtimeStr": "181 min",
          "genres": "Action, Adventure, Drama",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Adventure",
              "value": "Adventure"
            },
            {
              "key": "Drama",
              "value": "Drama"
            }
          ],
          "contentRating": "PG-13",
          "imDbRating": "8.4",
          "imDbRatingVotes": "1012992",
          "metacriticRating": "78",
          "plot": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
          "stars": "Anthony Russo, Joe Russo, Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth",
          "starList": [
            {
              "id": "tt4154796",
              "name": "Anthony Russo"
            },
            {
              "id": "tt4154796",
              "name": "Joe Russo"
            },
            {
              "id": "tt4154796",
              "name": "Robert Downey Jr."
            },
            {
              "id": "tt4154796",
              "name": "Chris Evans"
            },
            {
              "id": "tt4154796",
              "name": "Mark Ruffalo"
            },
            {
              "id": "tt4154796",
              "name": "Chris Hemsworth"
            }
          ]
        },
        {
          "id": "tt4154756",
          "image": "https://imdb-api.com/images/original/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_Ratio0.6837_AL_.jpg",
          "title": "Avengers: Infinity War",
          "description": "(2018)",
          "runtimeStr": "149 min",
          "genres": "Action, Adventure, Sci-Fi",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Adventure",
              "value": "Adventure"
            },
            {
              "key": "Sci-Fi",
              "value": "Sci-Fi"
            }
          ],
          "contentRating": "PG-13",
          "imDbRating": "8.4",
          "imDbRatingVotes": "980870",
          "metacriticRating": "68",
          "plot": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
          "stars": "Anthony Russo, Joe Russo, Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans",
          "starList": [
            {
              "id": "tt4154756",
              "name": "Anthony Russo"
            },
            {
              "id": "tt4154756",
              "name": "Joe Russo"
            },
            {
              "id": "tt4154756",
              "name": "Robert Downey Jr."
            },
            {
              "id": "tt4154756",
              "name": "Chris Hemsworth"
            },
            {
              "id": "tt4154756",
              "name": "Mark Ruffalo"
            },
            {
              "id": "tt4154756",
              "name": "Chris Evans"
            }
          ]
        },
        {
          "id": "tt1345836",
          "image": "https://imdb-api.com/images/original/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_Ratio0.6837_AL_.jpg",
          "title": "The Dark Knight Rises",
          "description": "(2012)",
          "runtimeStr": "164 min",
          "genres": "Action, Crime, Drama",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Crime",
              "value": "Crime"
            },
            {
              "key": "Drama",
              "value": "Drama"
            }
          ],
          "contentRating": "PG-13",
          "imDbRating": "8.4",
          "imDbRatingVotes": "1617521",
          "metacriticRating": "78",
          "plot": "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
          "stars": "Christopher Nolan, Christian Bale, Tom Hardy, Anne Hathaway, Gary Oldman",
          "starList": [
            {
              "id": "tt1345836",
              "name": "Christopher Nolan"
            },
            {
              "id": "tt1345836",
              "name": "Christian Bale"
            },
            {
              "id": "tt1345836",
              "name": "Tom Hardy"
            },
            {
              "id": "tt1345836",
              "name": "Anne Hathaway"
            },
            {
              "id": "tt1345836",
              "name": "Gary Oldman"
            }
          ]
        },
        {
          "id": "tt0376076",
          "image": "https://imdb-api.com/images/original/MV5BYzI5NDdlYWItMWIzNC00MjIwLWJmOGUtYjY2YjlhNmQ0N2E4XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_Ratio0.7245_AL_.jpg",
          "title": "Pithamagan",
          "description": "(2003)",
          "runtimeStr": "139 min",
          "genres": "Action, Drama",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Drama",
              "value": "Drama"
            }
          ],
          "contentRating": "Not Rated",
          "imDbRating": "8.4",
          "imDbRatingVotes": "6530",
          "metacriticRating": null,
          "plot": "Chittan, a social outcast, has grown up in a cemetery. A drug dealer finds him a job in a cannabis farm. In prison, he meets a conman, Shakti. This friendship transforms him from his stony existence.",
          "stars": "Bala, Vikram, Suriya, Laila, Sangeetha",
          "starList": [
            {
              "id": "tt0376076",
              "name": "Bala"
            },
            {
              "id": "tt0376076",
              "name": "Vikram"
            },
            {
              "id": "tt0376076",
              "name": "Suriya"
            },
            {
              "id": "tt0376076",
              "name": "Laila"
            },
            {
              "id": "tt0376076",
              "name": "Sangeetha"
            }
          ]
        },
        {
          "id": "tt0364647",
          "image": "https://imdb-api.com/images/original/MV5BODVkMDliZjQtZmI3Ni00NGJlLThjY2MtYmY5M2I1ODU5ZGE0XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_Ratio0.6837_AL_.jpg",
          "title": "Virumandi",
          "description": "(2004)",
          "runtimeStr": "175 min",
          "genres": "Action, Drama, Thriller",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Drama",
              "value": "Drama"
            },
            {
              "key": "Thriller",
              "value": "Thriller"
            }
          ],
          "contentRating": "Not Rated",
          "imDbRating": "8.4",
          "imDbRatingVotes": "5941",
          "metacriticRating": null,
          "plot": "A temperamental farmer gets embroiled in a bloody clan feud in a southern Tamil Nadu village.",
          "stars": "Kamal Haasan, Abhirami, Pasupathy, Napolean",
          "starList": [
            {
              "id": "tt0364647",
              "name": "Kamal Haasan"
            },
            {
              "id": "tt0364647",
              "name": "Kamal Haasan"
            },
            {
              "id": "tt0364647",
              "name": "Abhirami"
            },
            {
              "id": "tt0364647",
              "name": "Pasupathy"
            },
            {
              "id": "tt0364647",
              "name": "Napolean"
            }
          ]
        },
        {
          "id": "tt0364569",
          "image": "https://imdb-api.com/images/original/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_Ratio0.6837_AL_.jpg",
          "title": "Oldboy",
          "description": "(2003)",
          "runtimeStr": "120 min",
          "genres": "Action, Drama, Mystery",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Drama",
              "value": "Drama"
            },
            {
              "key": "Mystery",
              "value": "Mystery"
            }
          ],
          "contentRating": "R",
          "imDbRating": "8.4",
          "imDbRatingVotes": "554711",
          "metacriticRating": "77",
          "plot": "After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must find his captor in five days.",
          "stars": "Park Chan-wook, Choi Min-sik, Yoo Ji-Tae, Kang Hye-jeong, Kim Byeong-Ok",
          "starList": [
            {
              "id": "tt0364569",
              "name": "Park Chan-wook"
            },
            {
              "id": "tt0364569",
              "name": "Choi Min-sik"
            },
            {
              "id": "tt0364569",
              "name": "Yoo Ji-Tae"
            },
            {
              "id": "tt0364569",
              "name": "Kang Hye-jeong"
            },
            {
              "id": "tt0364569",
              "name": "Kim Byeong-Ok"
            }
          ]
        },
        {
          "id": "tt0312859",
          "image": "https://imdb-api.com/images/original/MV5BMTQ0YmIzOGQtNGMwNS00ODE0LTg3NjAtY2UxYzU0ODdjZTIwXkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_Ratio0.6837_AL_.jpg",
          "title": "Kannathil Muthamittal",
          "description": "(2002)",
          "runtimeStr": "136 min",
          "genres": "Action, Drama, War",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Drama",
              "value": "Drama"
            },
            {
              "key": "War",
              "value": "War"
            }
          ],
          "contentRating": "Not Rated",
          "imDbRating": "8.4",
          "imDbRatingVotes": "8286",
          "metacriticRating": null,
          "plot": "A little girl is told by her parents that she is adopted. Determined to find her real mother, she begs to be taken to Sri Lanka, where her mother works with a militant group of activists.",
          "stars": "Mani Ratnam, Madhavan, Simran, Prakash Raj, Nandita Das",
          "starList": [
            {
              "id": "tt0312859",
              "name": "Mani Ratnam"
            },
            {
              "id": "tt0312859",
              "name": "Madhavan"
            },
            {
              "id": "tt0312859",
              "name": "Simran"
            },
            {
              "id": "tt0312859",
              "name": "Prakash Raj"
            },
            {
              "id": "tt0312859",
              "name": "Nandita Das"
            }
          ]
        },
        {
          "id": "tt0220656",
          "image": "https://imdb-api.com/images/original/MV5BN2JiOGI2ODMtNGFiMy00NjZjLThmODMtZTEzZDkwNjdhZTk3XkEyXkFqcGdeQXVyODE0NjUxNzY@._V1_Ratio0.6837_AL_.jpg",
          "title": "Mudhalvan",
          "description": "(1999)",
          "runtimeStr": "169 min",
          "genres": "Action, Drama, Thriller",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Drama",
              "value": "Drama"
            },
            {
              "key": "Thriller",
              "value": "Thriller"
            }
          ],
          "contentRating": "Not Rated",
          "imDbRating": "8.4",
          "imDbRatingVotes": "7515",
          "metacriticRating": null,
          "plot": "A man accepts a challenge to act as the Chief Minister of Tamil Nadu for one day only, and makes such a success of it that soon he is embroiled in political intrigue.",
          "stars": "S. Shankar, Arjun Sarja, Manisha Koirala, Raghuvaran, Vadivelu",
          "starList": [
            {
              "id": "tt0220656",
              "name": "S. Shankar"
            },
            {
              "id": "tt0220656",
              "name": "Arjun Sarja"
            },
            {
              "id": "tt0220656",
              "name": "Manisha Koirala"
            },
            {
              "id": "tt0220656",
              "name": "Raghuvaran"
            },
            {
              "id": "tt0220656",
              "name": "Vadivelu"
            }
          ]
        },
        {
          "id": "tt0119698",
          "image": "https://imdb-api.com/images/original/MV5BNGIzY2IzODQtNThmMi00ZDE4LWI5YzAtNzNlZTM1ZjYyYjUyXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_Ratio0.6837_AL_.jpg",
          "title": "Princess Mononoke",
          "description": "(1997)",
          "runtimeStr": "134 min",
          "genres": "Animation, Action, Adventure",
          "genreList": [
            {
              "key": "Animation",
              "value": "Animation"
            },
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Adventure",
              "value": "Adventure"
            }
          ],
          "contentRating": "PG-13",
          "imDbRating": "8.4",
          "imDbRatingVotes": "375861",
          "metacriticRating": "76",
          "plot": "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime.",
          "stars": "Hayao Miyazaki, Yôji Matsuda, Yuriko Ishida, Yûko Tanaka, Billy Crudup",
          "starList": [
            {
              "id": "tt0119698",
              "name": "Hayao Miyazaki"
            },
            {
              "id": "tt0119698",
              "name": "Yôji Matsuda"
            },
            {
              "id": "tt0119698",
              "name": "Yuriko Ishida"
            },
            {
              "id": "tt0119698",
              "name": "Yûko Tanaka"
            },
            {
              "id": "tt0119698",
              "name": "Billy Crudup"
            }
          ]
        },
        {
          "id": "tt0082971",
          "image": "https://imdb-api.com/images/original/MV5BMjA0ODEzMTc1Nl5BMl5BanBnXkFtZTcwODM2MjAxNA@@._V1_Ratio0.6837_AL_.jpg",
          "title": "Indiana Jones and the Raiders of the Lost Ark",
          "description": "(1981)",
          "runtimeStr": "115 min",
          "genres": "Action, Adventure",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Adventure",
              "value": "Adventure"
            }
          ],
          "contentRating": "PG",
          "imDbRating": "8.4",
          "imDbRatingVotes": "934150",
          "metacriticRating": "85",
          "plot": "In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before Adolf Hitler's Nazis can obtain its awesome powers.",
          "stars": "Steven Spielberg, Harrison Ford, Karen Allen, Paul Freeman, John Rhys-Davies",
          "starList": [
            {
              "id": "tt0082971",
              "name": "Steven Spielberg"
            },
            {
              "id": "tt0082971",
              "name": "Harrison Ford"
            },
            {
              "id": "tt0082971",
              "name": "Karen Allen"
            },
            {
              "id": "tt0082971",
              "name": "Paul Freeman"
            },
            {
              "id": "tt0082971",
              "name": "John Rhys-Davies"
            }
          ]
        },
        {
          "id": "tt0066078",
          "image": "https://imdb-api.com/images/original/MV5BMTQ1NDA0ZjMtN2IyNy00MDQ4LWI2Y2QtMTNiYmU0YWYxMDYxXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_Ratio0.7041_AL_.jpg",
          "title": "Michael the Brave",
          "description": "(1971)",
          "runtimeStr": "203 min",
          "genres": "Action, Biography, Drama",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Biography",
              "value": "Biography"
            },
            {
              "key": "Drama",
              "value": "Drama"
            }
          ],
          "contentRating": null,
          "imDbRating": "8.4",
          "imDbRatingVotes": "6309",
          "metacriticRating": null,
          "plot": "At the end of the 16th century Wallachian ruler Prince Michael the Brave overcame the adversity of the Ottoman and Austrian Empires to unite Wallachia, Moldavia and Transylvania into one country.",
          "stars": "Sergiu Nicolaescu, Amza Pellea, Ion Besoiu, Olga Tudorache, Irina Gardescu",
          "starList": [
            {
              "id": "tt0066078",
              "name": "Sergiu Nicolaescu"
            },
            {
              "id": "tt0066078",
              "name": "Amza Pellea"
            },
            {
              "id": "tt0066078",
              "name": "Ion Besoiu"
            },
            {
              "id": "tt0066078",
              "name": "Olga Tudorache"
            },
            {
              "id": "tt0066078",
              "name": "Irina Gardescu"
            }
          ]
        },
        {
          "id": "tt8579674",
          "image": "https://imdb-api.com/images/original/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_Ratio0.6837_AL_.jpg",
          "title": "1917",
          "description": "(2019)",
          "runtimeStr": "119 min",
          "genres": "Action, Drama, War",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Drama",
              "value": "Drama"
            },
            {
              "key": "War",
              "value": "War"
            }
          ],
          "contentRating": "R",
          "imDbRating": "8.3",
          "imDbRatingVotes": "531444",
          "metacriticRating": "78",
          "plot": "April 6th, 1917. As an infantry battalion assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.",
          "stars": "Sam Mendes, Dean-Charles Chapman, George MacKay, Daniel Mays, Colin Firth",
          "starList": [
            {
              "id": "tt8579674",
              "name": "Sam Mendes"
            },
            {
              "id": "tt8579674",
              "name": "Dean-Charles Chapman"
            },
            {
              "id": "tt8579674",
              "name": "George MacKay"
            },
            {
              "id": "tt8579674",
              "name": "Daniel Mays"
            },
            {
              "id": "tt8579674",
              "name": "Colin Firth"
            }
          ]
        },
        {
          "id": "tt8291224",
          "image": "https://imdb-api.com/images/original/MV5BMWU4ZjNlNTQtOGE2MS00NDI0LWFlYjMtMmY3ZWVkMjJkNGRmXkEyXkFqcGdeQXVyNjE1OTQ0NjA@._V1_Ratio0.6837_AL_.jpg",
          "title": "Uri: The Surgical Strike",
          "description": "(2019)",
          "runtimeStr": "138 min",
          "genres": "Action, Drama, War",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Drama",
              "value": "Drama"
            },
            {
              "key": "War",
              "value": "War"
            }
          ],
          "contentRating": "Not Rated",
          "imDbRating": "8.3",
          "imDbRatingVotes": "55292",
          "metacriticRating": null,
          "plot": "Indian army special forces execute a covert operation, avenging the killing of fellow army men at their base by a terrorist group.",
          "stars": "Aditya Dhar, Vicky Kaushal, Paresh Rawal, Mohit Raina, Yami Gautam",
          "starList": [
            {
              "id": "tt8291224",
              "name": "Aditya Dhar"
            },
            {
              "id": "tt8291224",
              "name": "Vicky Kaushal"
            },
            {
              "id": "tt8291224",
              "name": "Paresh Rawal"
            },
            {
              "id": "tt8291224",
              "name": "Mohit Raina"
            },
            {
              "id": "tt8291224",
              "name": "Yami Gautam"
            }
          ]
        },
        {
          "id": "tt7838252",
          "image": "https://imdb-api.com/images/original/MV5BZDNlNzBjMGUtYTA0Yy00OTI2LWJmZjMtODliYmUyYTI0OGFmXkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_Ratio0.6837_AL_.jpg",
          "title": "K.G.F: Chapter 1",
          "description": "(2018)",
          "runtimeStr": "156 min",
          "genres": "Action, Crime, Drama",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Crime",
              "value": "Crime"
            },
            {
              "key": "Drama",
              "value": "Drama"
            }
          ],
          "contentRating": "Not Rated",
          "imDbRating": "8.3",
          "imDbRatingVotes": "54880",
          "metacriticRating": null,
          "plot": "In the 1970s, a gangster goes undercover as a slave to assassinate the owner of a notorious gold mine.",
          "stars": "Prashanth Neel, Yash, Srinidhi Shetty, Ramachandra Raju, Archana Jois",
          "starList": [
            {
              "id": "tt7838252",
              "name": "Prashanth Neel"
            },
            {
              "id": "tt7838252",
              "name": "Yash"
            },
            {
              "id": "tt7838252",
              "name": "Srinidhi Shetty"
            },
            {
              "id": "tt7838252",
              "name": "Ramachandra Raju"
            },
            {
              "id": "tt7838252",
              "name": "Archana Jois"
            }
          ]
        },
        {
          "id": "tt7060460",
          "image": "https://imdb-api.com/images/original/MV5BNGFkYTM4NzQtNWE3Yy00NTM2LWI1MDktYTg5NTIxMzQ5MmE4XkEyXkFqcGdeQXVyODIwMDI1NjM@._V1_Ratio0.6837_AL_.jpg",
          "title": "Theeran Adhigaram Ondru",
          "description": "(2017)",
          "runtimeStr": "157 min",
          "genres": "Action, Crime, Thriller",
          "genreList": [
            {
              "key": "Action",
              "value": "Action"
            },
            {
              "key": "Crime",
              "value": "Crime"
            },
            {
              "key": "Thriller",
              "value": "Thriller"
            }
          ],
          "contentRating": "Not Rated",
          "imDbRating": "8.3",
          "imDbRatingVotes": "13455",
          "metacriticRating": null,
          "plot": "Theeran, a police officer, is entrusted with the task to solve the mystery behind a series of murders. The only clue left behind is that all the murders are committed in the same pattern.",
          "stars": "H. Vinoth, Karthi, Rakul Preet Singh, Abhimanyu Singh, Bose Venkat",
          "starList": [
            {
              "id": "tt7060460",
              "name": "H. Vinoth"
            },
            {
              "id": "tt7060460",
              "name": "Karthi"
            },
            {
              "id": "tt7060460",
              "name": "Rakul Preet Singh"
            },
            {
              "id": "tt7060460",
              "name": "Abhimanyu Singh"
            },
            {
              "id": "tt7060460",
              "name": "Bose Venkat"
            }
          ]
        }
      ],
      "errorMessage": null
    } as ImdbAdvSearchResponce);
  }
}
