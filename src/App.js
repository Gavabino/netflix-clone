import React, { useState } from 'react';
import './App.css';
import requests from './Requests';
import Row from './Row';
import Banner from './Banner'
import Nav from './Nav'

function App() {
  const [movieList, setMovieList] = useState([]);
  console.log(movieList);
  return (
    <div className="app">
      <Nav movieList={movieList} movieListChange={setMovieList} />
      <Banner movieList={movieList} movieListChange={setMovieList} />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow movieList={movieList} movieListChange={setMovieList} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow movieList={movieList} movieListChange={setMovieList} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow movieList={movieList} movieListChange={setMovieList} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeRow movieList={movieList} movieListChange={setMovieList} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLargeRow movieList={movieList} movieListChange={setMovieList} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isLargeRow movieList={movieList} movieListChange={setMovieList} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow movieList={movieList} movieListChange={setMovieList} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} isLargeRow movieList={movieList} movieListChange={setMovieList} />
    </div>
  );
}
export default App;