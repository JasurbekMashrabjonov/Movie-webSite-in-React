import React, { useContext } from "react";
import "../styles/Content.css";
// import {useState} from 'react';
import MyLike from "../components/MyLike";
import MyDisLike from "../components/MyDisLike";
import Carousel from "../components/Carousel";
import { ContextProvider } from "../reducer/Context";
// import Loading from "../components/Loading";
// import img1 from "./img/01.png"
function Content(props) {
  const {isCarusel, posts, bgContent, bgCard } = useContext(ContextProvider);
  return (
    <>
      <div className="contentMain">
        {isCarusel?
        
        <Carousel />
      :null}
        <div className={`content ${bgContent}`}>
          {posts &&
            posts.map((item, idx) => {
              return (
                <div className={`card ${bgCard}`} key={idx}>
                  <div className="img">
                    <img src={item.Poster} alt="img" />
                    {/* <div className="title">
                    
                  </div> */}
                  </div>

                  <div className="posts">
                    <h4>{item.Title}</h4>
                    <h5>
                      {item.Type}, in {item.Year}
                    </h5>
                    <hr />
                    <p>
                      <span>
                        <MyLike />
                      </span>
                      <span>
                        <MyDisLike />
                      </span>
                      <span>
                        <i className="fa-regular fa-share-from-square"></i>
                        Share
                      </span>
                      <span>
                        <i className="fa-solid fa-download"></i>
                        Download
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Content;
