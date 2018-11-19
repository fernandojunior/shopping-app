import axios from "axios"
import Cookies from 'universal-cookie'

export const mockedMovies = [ // eslint-disable-line
  JSON.parse('{"Title":"Blade Runner","Year":"1982","Rated":"R","Released":"25 Jun 1982","Runtime":"117 min","Genre":"Sci-Fi, Thriller","Director":"Ridley Scott","Writer":"Hampton Fancher (screenplay), David Webb Peoples (screenplay), Philip K. Dick (novel)","Actors":"Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos","Plot":"A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.","Language":"English, German, Cantonese, Japanese, Hungarian, Arabic","Country":"USA, Hong Kong","Awards":"Nominated for 2 Oscars. Another 11 wins & 16 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.2/10"},{"Source":"Rotten Tomatoes","Value":"90%"},{"Source":"Metacritic","Value":"89/100"}],"Metascore":"89","imdbRating":"8.2","imdbVotes":"594,601","imdbID":"tt0083658","Type":"movie","DVD":"27 Aug 1997","BoxOffice":"N/A","Production":"Warner Bros. Pictures","Website":"N/A","Response":"True"}'),
  JSON.parse('{"Title":"The Avengers","Year":"2012","Rated":"PG-13","Released":"04 May 2012","Runtime":"143 min","Genre":"Action, Adventure, Sci-Fi","Director":"Joss Whedon","Writer":"Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)","Actors":"Robert Downey Jr., Chris Evans, Scarlett Johansson, Chris Hemsworth","Plot":"Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.","Language":"English, Russian, Hindi","Country":"USA","Awards":"Nominated for 1 Oscar. Another 38 wins & 79 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"8.1","imdbVotes":"1,116,889","imdbID":"tt0848228","Type":"movie","DVD":"25 Sep 2012","BoxOffice":"£623,279,547","Production":"Walt Disney Pictures","Website":"http://marvel.com/avengers_movie","Response":"True"}'),
  JSON.parse('{"Title":"The Avengers","Year":"2012","Rated":"PG-13","Released":"04 May 2012","Runtime":"143 min","Genre":"Action, Adventure, Sci-Fi","Director":"Joss Whedon","Writer":"Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)","Actors":"Robert Downey Jr., Chris Evans, Scarlett Johansson, Chris Hemsworth","Plot":"Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.","Language":"English, Russian, Hindi","Country":"USA","Awards":"Nominated for 1 Oscar. Another 38 wins & 79 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"8.1","imdbVotes":"1,116,889","imdbID":"tt0848228","Type":"movie","DVD":"25 Sep 2012","BoxOffice":"£623,279,547","Production":"Walt Disney Pictures","Website":"http://marvel.com/avengers_movie","Response":"True"}'),
  JSON.parse('{"Title":"Harry Potter and the Deathly Hallows: Part 2","Year":"2011","Rated":"PG-13","Released":"15 Jul 2011","Runtime":"130 min","Genre":"Adventure, Drama, Fantasy","Director":"David Yates","Writer":"Steve Kloves (screenplay), J.K. Rowling (novel)","Actors":"Ralph Fiennes, Michael Gambon, Alan Rickman, Daniel Radcliffe","Plot":"Harry, Ron, and Hermione search for Voldemort\'s remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.","Language":"English","Country":"USA, UK","Awards":"Nominated for 3 Oscars. Another 45 wins & 91 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"96%"},{"Source":"Metacritic","Value":"87/100"}],"Metascore":"87","imdbRating":"8.1","imdbVotes":"654,923","imdbID":"tt1201607","Type":"movie","DVD":"11 Nov 2011","BoxOffice":"£381,000,185","Production":"Warner Bros. Pictures","Website":"http://www.HarryPotter.com/","Response":"True"}'),
  JSON.parse('{"Title":"Blade Runner","Year":"1982","Rated":"R","Released":"25 Jun 1982","Runtime":"117 min","Genre":"Sci-Fi, Thriller","Director":"Ridley Scott","Writer":"Hampton Fancher (screenplay), David Webb Peoples (screenplay), Philip K. Dick (novel)","Actors":"Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos","Plot":"A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.","Language":"English, German, Cantonese, Japanese, Hungarian, Arabic","Country":"USA, Hong Kong","Awards":"Nominated for 2 Oscars. Another 11 wins & 16 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.2/10"},{"Source":"Rotten Tomatoes","Value":"90%"},{"Source":"Metacritic","Value":"89/100"}],"Metascore":"89","imdbRating":"8.2","imdbVotes":"594,601","imdbID":"tt0083658","Type":"movie","DVD":"27 Aug 1997","BoxOffice":"N/A","Production":"Warner Bros. Pictures","Website":"N/A","Response":"True"}'),
  JSON.parse('{"Title":"The Avengers","Year":"2012","Rated":"PG-13","Released":"04 May 2012","Runtime":"143 min","Genre":"Action, Adventure, Sci-Fi","Director":"Joss Whedon","Writer":"Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)","Actors":"Robert Downey Jr., Chris Evans, Scarlett Johansson, Chris Hemsworth","Plot":"Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.","Language":"English, Russian, Hindi","Country":"USA","Awards":"Nominated for 1 Oscar. Another 38 wins & 79 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"8.1","imdbVotes":"1,116,889","imdbID":"tt0848228","Type":"movie","DVD":"25 Sep 2012","BoxOffice":"£623,279,547","Production":"Walt Disney Pictures","Website":"http://marvel.com/avengers_movie","Response":"True"}'),
  JSON.parse('{"Title":"The Avengers","Year":"2012","Rated":"PG-13","Released":"04 May 2012","Runtime":"143 min","Genre":"Action, Adventure, Sci-Fi","Director":"Joss Whedon","Writer":"Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)","Actors":"Robert Downey Jr., Chris Evans, Scarlett Johansson, Chris Hemsworth","Plot":"Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.","Language":"English, Russian, Hindi","Country":"USA","Awards":"Nominated for 1 Oscar. Another 38 wins & 79 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"8.1","imdbVotes":"1,116,889","imdbID":"tt0848228","Type":"movie","DVD":"25 Sep 2012","BoxOffice":"£623,279,547","Production":"Walt Disney Pictures","Website":"http://marvel.com/avengers_movie","Response":"True"}'),
  JSON.parse('{"Title":"Harry Potter and the Deathly Hallows: Part 2","Year":"2011","Rated":"PG-13","Released":"15 Jul 2011","Runtime":"130 min","Genre":"Adventure, Drama, Fantasy","Director":"David Yates","Writer":"Steve Kloves (screenplay), J.K. Rowling (novel)","Actors":"Ralph Fiennes, Michael Gambon, Alan Rickman, Daniel Radcliffe","Plot":"Harry, Ron, and Hermione search for Voldemort\'s remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.","Language":"English","Country":"USA, UK","Awards":"Nominated for 3 Oscars. Another 45 wins & 91 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"96%"},{"Source":"Metacritic","Value":"87/100"}],"Metascore":"87","imdbRating":"8.1","imdbVotes":"654,923","imdbID":"tt1201607","Type":"movie","DVD":"11 Nov 2011","BoxOffice":"£381,000,185","Production":"Warner Bros. Pictures","Website":"http://www.HarryPotter.com/","Response":"True"}'),
  JSON.parse('{"Title":"The Avengers","Year":"2012","Rated":"PG-13","Released":"04 May 2012","Runtime":"143 min","Genre":"Action, Adventure, Sci-Fi","Director":"Joss Whedon","Writer":"Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)","Actors":"Robert Downey Jr., Chris Evans, Scarlett Johansson, Chris Hemsworth","Plot":"Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.","Language":"English, Russian, Hindi","Country":"USA","Awards":"Nominated for 1 Oscar. Another 38 wins & 79 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"8.1","imdbVotes":"1,116,889","imdbID":"tt0848228","Type":"movie","DVD":"25 Sep 2012","BoxOffice":"£623,279,547","Production":"Walt Disney Pictures","Website":"http://marvel.com/avengers_movie","Response":"True"}'),
  JSON.parse('{"Title":"The Avengers","Year":"2012","Rated":"PG-13","Released":"04 May 2012","Runtime":"143 min","Genre":"Action, Adventure, Sci-Fi","Director":"Joss Whedon","Writer":"Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)","Actors":"Robert Downey Jr., Chris Evans, Scarlett Johansson, Chris Hemsworth","Plot":"Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.","Language":"English, Russian, Hindi","Country":"USA","Awards":"Nominated for 1 Oscar. Another 38 wins & 79 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"8.1","imdbVotes":"1,116,889","imdbID":"tt0848228","Type":"movie","DVD":"25 Sep 2012","BoxOffice":"£623,279,547","Production":"Walt Disney Pictures","Website":"http://marvel.com/avengers_movie","Response":"True"}'),
  JSON.parse('{"Title":"Harry Potter and the Deathly Hallows: Part 2","Year":"2011","Rated":"PG-13","Released":"15 Jul 2011","Runtime":"130 min","Genre":"Adventure, Drama, Fantasy","Director":"David Yates","Writer":"Steve Kloves (screenplay), J.K. Rowling (novel)","Actors":"Ralph Fiennes, Michael Gambon, Alan Rickman, Daniel Radcliffe","Plot":"Harry, Ron, and Hermione search for Voldemort\'s remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.","Language":"English","Country":"USA, UK","Awards":"Nominated for 3 Oscars. Another 45 wins & 91 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"96%"},{"Source":"Metacritic","Value":"87/100"}],"Metascore":"87","imdbRating":"8.1","imdbVotes":"654,923","imdbID":"tt1201607","Type":"movie","DVD":"11 Nov 2011","BoxOffice":"£381,000,185","Production":"Warner Bros. Pictures","Website":"http://www.HarryPotter.com/","Response":"True"}'),
  JSON.parse('{"Title":"The Avengers","Year":"2012","Rated":"PG-13","Released":"04 May 2012","Runtime":"143 min","Genre":"Action, Adventure, Sci-Fi","Director":"Joss Whedon","Writer":"Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)","Actors":"Robert Downey Jr., Chris Evans, Scarlett Johansson, Chris Hemsworth","Plot":"Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.","Language":"English, Russian, Hindi","Country":"USA","Awards":"Nominated for 1 Oscar. Another 38 wins & 79 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"8.1","imdbVotes":"1,116,889","imdbID":"tt0848228","Type":"movie","DVD":"25 Sep 2012","BoxOffice":"£623,279,547","Production":"Walt Disney Pictures","Website":"http://marvel.com/avengers_movie","Response":"True"}'),
  JSON.parse('{"Title":"The Avengers","Year":"2012","Rated":"PG-13","Released":"04 May 2012","Runtime":"143 min","Genre":"Action, Adventure, Sci-Fi","Director":"Joss Whedon","Writer":"Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)","Actors":"Robert Downey Jr., Chris Evans, Scarlett Johansson, Chris Hemsworth","Plot":"Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.","Language":"English, Russian, Hindi","Country":"USA","Awards":"Nominated for 1 Oscar. Another 38 wins & 79 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"8.1","imdbVotes":"1,116,889","imdbID":"tt0848228","Type":"movie","DVD":"25 Sep 2012","BoxOffice":"£623,279,547","Production":"Walt Disney Pictures","Website":"http://marvel.com/avengers_movie","Response":"True"}'),
  JSON.parse('{"Title":"Harry Potter and the Deathly Hallows: Part 2","Year":"2011","Rated":"PG-13","Released":"15 Jul 2011","Runtime":"130 min","Genre":"Adventure, Drama, Fantasy","Director":"David Yates","Writer":"Steve Kloves (screenplay), J.K. Rowling (novel)","Actors":"Ralph Fiennes, Michael Gambon, Alan Rickman, Daniel Radcliffe","Plot":"Harry, Ron, and Hermione search for Voldemort\'s remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.","Language":"English","Country":"USA, UK","Awards":"Nominated for 3 Oscars. Another 45 wins & 91 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"96%"},{"Source":"Metacritic","Value":"87/100"}],"Metascore":"87","imdbRating":"8.1","imdbVotes":"654,923","imdbID":"tt1201607","Type":"movie","DVD":"11 Nov 2011","BoxOffice":"£381,000,185","Production":"Warner Bros. Pictures","Website":"http://www.HarryPotter.com/","Response":"True"}'),
  JSON.parse('{"Title":"Blade Runner","Year":"1982","Rated":"R","Released":"25 Jun 1982","Runtime":"117 min","Genre":"Sci-Fi, Thriller","Director":"Ridley Scott","Writer":"Hampton Fancher (screenplay), David Webb Peoples (screenplay), Philip K. Dick (novel)","Actors":"Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos","Plot":"A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.","Language":"English, German, Cantonese, Japanese, Hungarian, Arabic","Country":"USA, Hong Kong","Awards":"Nominated for 2 Oscars. Another 11 wins & 16 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.2/10"},{"Source":"Rotten Tomatoes","Value":"90%"},{"Source":"Metacritic","Value":"89/100"}],"Metascore":"89","imdbRating":"8.2","imdbVotes":"594,601","imdbID":"tt0083658","Type":"movie","DVD":"27 Aug 1997","BoxOffice":"N/A","Production":"Warner Bros. Pictures","Website":"N/A","Response":"True"}'),
  JSON.parse('{"Title":"The Avengers","Year":"2012","Rated":"PG-13","Released":"04 May 2012","Runtime":"143 min","Genre":"Action, Adventure, Sci-Fi","Director":"Joss Whedon","Writer":"Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)","Actors":"Robert Downey Jr., Chris Evans, Scarlett Johansson, Chris Hemsworth","Plot":"Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.","Language":"English, Russian, Hindi","Country":"USA","Awards":"Nominated for 1 Oscar. Another 38 wins & 79 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"8.1","imdbVotes":"1,116,889","imdbID":"tt0848228","Type":"movie","DVD":"25 Sep 2012","BoxOffice":"£623,279,547","Production":"Walt Disney Pictures","Website":"http://marvel.com/avengers_movie","Response":"True"}'),
  JSON.parse('{"Title":"The Avengers","Year":"2012","Rated":"PG-13","Released":"04 May 2012","Runtime":"143 min","Genre":"Action, Adventure, Sci-Fi","Director":"Joss Whedon","Writer":"Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)","Actors":"Robert Downey Jr., Chris Evans, Scarlett Johansson, Chris Hemsworth","Plot":"Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.","Language":"English, Russian, Hindi","Country":"USA","Awards":"Nominated for 1 Oscar. Another 38 wins & 79 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"8.1","imdbVotes":"1,116,889","imdbID":"tt0848228","Type":"movie","DVD":"25 Sep 2012","BoxOffice":"£623,279,547","Production":"Walt Disney Pictures","Website":"http://marvel.com/avengers_movie","Response":"True"}'),
  JSON.parse('{"Title":"Harry Potter and the Deathly Hallows: Part 2","Year":"2011","Rated":"PG-13","Released":"15 Jul 2011","Runtime":"130 min","Genre":"Adventure, Drama, Fantasy","Director":"David Yates","Writer":"Steve Kloves (screenplay), J.K. Rowling (novel)","Actors":"Ralph Fiennes, Michael Gambon, Alan Rickman, Daniel Radcliffe","Plot":"Harry, Ron, and Hermione search for Voldemort\'s remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.","Language":"English","Country":"USA, UK","Awards":"Nominated for 3 Oscars. Another 45 wins & 91 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"96%"},{"Source":"Metacritic","Value":"87/100"}],"Metascore":"87","imdbRating":"8.1","imdbVotes":"654,923","imdbID":"tt1201607","Type":"movie","DVD":"11 Nov 2011","BoxOffice":"£381,000,185","Production":"Warner Bros. Pictures","Website":"http://www.HarryPotter.com/","Response":"True"}'),
  JSON.parse('{"Title":"The Avengers","Year":"2012","Rated":"PG-13","Released":"04 May 2012","Runtime":"143 min","Genre":"Action, Adventure, Sci-Fi","Director":"Joss Whedon","Writer":"Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)","Actors":"Robert Downey Jr., Chris Evans, Scarlett Johansson, Chris Hemsworth","Plot":"Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.","Language":"English, Russian, Hindi","Country":"USA","Awards":"Nominated for 1 Oscar. Another 38 wins & 79 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"8.1","imdbVotes":"1,116,889","imdbID":"tt0848228","Type":"movie","DVD":"25 Sep 2012","BoxOffice":"£623,279,547","Production":"Walt Disney Pictures","Website":"http://marvel.com/avengers_movie","Response":"True"}'),
  JSON.parse('{"Title":"The Avengers","Year":"2012","Rated":"PG-13","Released":"04 May 2012","Runtime":"143 min","Genre":"Action, Adventure, Sci-Fi","Director":"Joss Whedon","Writer":"Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)","Actors":"Robert Downey Jr., Chris Evans, Scarlett Johansson, Chris Hemsworth","Plot":"Earth\'s mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.","Language":"English, Russian, Hindi","Country":"USA","Awards":"Nominated for 1 Oscar. Another 38 wins & 79 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"92%"},{"Source":"Metacritic","Value":"69/100"}],"Metascore":"69","imdbRating":"8.1","imdbVotes":"1,116,889","imdbID":"tt0848228","Type":"movie","DVD":"25 Sep 2012","BoxOffice":"£623,279,547","Production":"Walt Disney Pictures","Website":"http://marvel.com/avengers_movie","Response":"True"}'),
  JSON.parse('{"Title":"Harry Potter and the Deathly Hallows: Part 2","Year":"2011","Rated":"PG-13","Released":"15 Jul 2011","Runtime":"130 min","Genre":"Adventure, Drama, Fantasy","Director":"David Yates","Writer":"Steve Kloves (screenplay), J.K. Rowling (novel)","Actors":"Ralph Fiennes, Michael Gambon, Alan Rickman, Daniel Radcliffe","Plot":"Harry, Ron, and Hermione search for Voldemort\'s remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.","Language":"English","Country":"USA, UK","Awards":"Nominated for 3 Oscars. Another 45 wins & 91 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.1/10"},{"Source":"Rotten Tomatoes","Value":"96%"},{"Source":"Metacritic","Value":"87/100"}],"Metascore":"87","imdbRating":"8.1","imdbVotes":"654,923","imdbID":"tt1201607","Type":"movie","DVD":"11 Nov 2011","BoxOffice":"£381,000,185","Production":"Warner Bros. Pictures","Website":"http://www.HarryPotter.com/","Response":"True"}')
]

const tendencyIds = [
  'tt4154756',
  'tt0417741',
  'tt5164184',
  'tt1219827',
  'tt0238380',
  'tt4547194',
  'tt4975722',
  'tt0443272',
  'tt2527336',
  'tt0081505',
  'tt1798709',
  'tt1431045',
  'tt0848228',
  'tt0241527',
  'tt0068646',
  'tt0119654',
  'tt1677720',
  'tt0120737'
]

const API_URL = 'http://www.omdbapi.com'
const API_KEY = 'f38702dc'


const cookies = new Cookies();
/**
 * Create a request API auth-token based with axios
 */
function createAuthRequestApi(baseURL) {
    const api = axios.create({ baseURL: baseURL })

    api.interceptors.request.use(function (config) {
        const token = cookies.get('token') || null;
        if (token) {
            config.headers['Authorization'] = `JWT ${token}`;
        }

        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    return api
}

class ShoppingService {
  static async find(options) {

    if (!('keyword' in (options || {})) || options.keyword === '') {
      return ShoppingService.findByIds(tendencyIds)
    }

    const { keyword } = options

    const url = `${API_URL}/?s=${keyword}&apikey=${API_KEY}`

    const { Search } = (await (await fetch(url)).json())


    return Search
  }

  static async findById(id) {
    const url = `${API_URL}/?i=${id}&apikey=${API_KEY}`

    return (await fetch(url)).json()
  }

  static async findByIds(ids = []) {
    return Promise.all(ids.map(id => ShoppingService.findById(id)))
  }

  static async login(username, password) {
    const api = createAuthRequestApi('http://127.0.0.1:8000');
    const { data } = await api.post('/login/', { username, password })
    const token = data.token
    cookies.set('token', token, { path: '/' })
    cookies.set('username', username, { path: '/' })
  }

  static async findProducts() {
      await ShoppingService.login('admin', 'password123')
      const api = createAuthRequestApi('http://127.0.0.1:8000');
      const response = await api.get('/product/')
      return response.data
  }

  static async create_products() {
    const current_products = await ShoppingService.findProducts()

    if (current_products.length == 0) {
      const products = await ShoppingService.find()
      const api = createAuthRequestApi('http://127.0.0.1:8000');
      products.forEach(async ({ Title, Year, Poster}) => {
        const data = { name: Title, current_price: Year, image_url: Poster }
        const response = await api.post('/product/', { name: Title, current_price: Year, image_url: Poster })
      })
    }
  }

  static async pay(order) {
    await ShoppingService.login('admin', 'password123')
    const api = createAuthRequestApi('http://127.0.0.1:8000');
    const response = await api.post('/order/', order)
    return response.data
  }

}

export default ShoppingService;