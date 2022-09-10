import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import "./App.css";
import Loading from "./components/Loading";
import Content from "./layouts/Content";
import Footer from "./layouts/Footer";
import Navbar2 from "./layouts/Navbar2";
import { ContextProvider } from "./reducer/Context";

function App() {
  const { setState, type, posts = [] } = useContext(ContextProvider);
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=60c186c3&s=man&type=${type}`)
      .then((data) => data.json())
      .then((data) => {
        setState(data.Search);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Navbar2 />
      {posts.length ? <Content /> : <Loading />}
      <Footer />
    </div>
  );
}

export default App;
