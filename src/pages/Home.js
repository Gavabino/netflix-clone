import React from "react";
import "./Home.css";
import requests from "../components/Requests";
import Row from "../components/Row";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import { Provider } from "react-redux";
import { store } from "/Users/gavinatkinson/Documents/Code/Netflix-Clone/netflix-clone/src/store.js";

function Home() {
    return (
        <div className="home">
            <Provider store={store}>
                <Nav />
                <Banner />
                <Row
                    title="NETFLIX ORIGINALS"
                    fetchUrl={requests.fetchNetflixOriginals}
                    isLargeRow
                />
                <Row
                    title="Trending Now"
                    fetchUrl={requests.fetchTrending}
                    isLargeRow
                />
                <Row
                    title="Top Rated"
                    fetchUrl={requests.fetchTopRated}
                    isLargeRow
                />
                <Row
                    title="Action Movies"
                    fetchUrl={requests.fetchActionMovies}
                    isLargeRow
                />
                <Row
                    title="Comedy Movies"
                    fetchUrl={requests.fetchComedyMovies}
                    isLargeRow
                />
                <Row
                    title="Horror Movies"
                    fetchUrl={requests.fetchHorrorMovies}
                    isLargeRow
                />
                <Row
                    title="Romance Movies"
                    fetchUrl={requests.fetchRomanceMovies}
                    isLargeRow
                />
                <Row
                    title="Documentaries"
                    fetchUrl={requests.fetchDocumentaries}
                    isLargeRow
                />
            </Provider>
        </div>
    );
}
export default Home;
