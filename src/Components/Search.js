import React, { useState, useEffect } from "react";
import axios from "axios";


// query api with search onChange

const Search = () => {
  const [term, setTerm] = useState(" ");
  const [results, setResults] = useState([]);

  console.log(results);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    // without the if statement api call will autorender an error from empty string on initial render
    // timeout set so that api will not rapidly call everychange / cleared to render before every re-render

    const timeoutId = setTimeout(() => {
        if (term) {
            search();
          }
    }, 1000);

    return () => {
        clearTimeout(timeoutId);
    };
  }, [term]);

    //maps over the api results for display

  const renderList = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}>
            Go</a>
            </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="">Enter search Term</label>
          <input
            onChange={(e) => setTerm(e.target.value)}
            value={term}
            type="text"
          />
        </div>
      </div>
      <div className="ui celled list">{renderList}</div>
    </div>
  );
};

export default Search;
