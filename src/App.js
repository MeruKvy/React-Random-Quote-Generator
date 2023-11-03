import "./App.css";
import colors from "./data";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState, useEffect } from "react";

function App() {
  const [randomColor, setRandomColor] = useState("#5d5d5d");
  const [randomQuote, setRandomQuote] = useState({
    text: "press quote button to start",
    author: "",
  });
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const responce = await fetch("https://type.fit/api/quotes");
      const data = await responce.json();
      setQuotes(data);
    };

    fetchData();
  }, []);

  function getRandomIndex(data) {
    let chosenIndex = Math.floor(Math.random() * data.length);
    return chosenIndex;
  }

  function generateRandomData() {
    setRandomQuote(quotes[getRandomIndex(quotes)]);
    setRandomColor(colors[getRandomIndex(colors)]);
  }

  return (
    <div
      className="App"
      style={{
        backgroundColor: randomColor,
      }}
    >
      <div className="box-wrapper">
        <div className="quote-box">
          <h1
            className="quote"
            style={{
              color: randomColor,
            }}
          >
            {randomQuote.text}
          </h1>
          <div className="author-wrapper">
            <p
              className="author"
              style={{
                color: randomColor,
              }}
            >
              {randomQuote.author.split(",").slice(0, 1) == "type.fit"
                ? "unknown author"
                : randomQuote.author.split(",").slice(0, 1)}
            </p>
          </div>
          <div className="btn-container">
            <div className="social-btns">
              <a
                href="https://www.twitter.com/"
                className="twitter-btn btn btn-primary"
                style={{
                  backgroundColor: randomColor,
                }}
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                href="https://www.tumblr.com/"
                target="_blank"
                className="btn btn-primary tumblr-btn"
                style={{
                  backgroundColor: randomColor,
                }}
              >
                <i className="fa fa-tumblr"></i>
              </a>
            </div>
            <button
              className="new-quote-btn btn btn-primary"
              style={{
                backgroundColor: randomColor,
              }}
              onClick={() => generateRandomData()}
            >
              New Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
