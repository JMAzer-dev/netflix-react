import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";
//fetchURL title e id are Row's props
//API is just called in home and main

const Home = () => {
  return (
    <>
      {requests && (
        <>
          <Main />
          <Row rowID="1" title="Popular" fetchURL={requests.requestPopular} />
          <Row
            rowID="2"
            title="Top Rated"
            fetchURL={requests.requestTopRated}
          />
          <Row
            rowID="3"
            title="Up comming"
            fetchURL={requests.requestUpcoming}
          />
          <Row rowID="4" title="Trending" fetchURL={requests.requestTrending} />
          <Row
            rowID="5"
            title="TV Popular"
            fetchURL={requests.requestTVTopRated}
          />
        </>
      )}
    </>
  );
};

export default Home;
