import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const bookTickets = (item) => {
    localStorage.setItem("book", JSON.stringify(item));
    navigate("/booktickets");
  };
  const readMore = (item) => {
    localStorage.setItem("movie", JSON.stringify(item));
    navigate("/details");
  };
  const removeTags = (str) => {
    return str.replace(/(<([^>]+)>)/gi, "");
  };
  posts.map((item, index) => removeTags(item.show.summary));
  return (
    <div>
      <div className="container my-3">
        <div className="row row-cols-1 row-cols-sm-3 g-4">
          {posts.map((item, index) => (
            <div className="col">
              <div className="card w-75" key={item.show.id}>
                <img
                  src={item.show.image.medium}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{item.show.name}</h5>
                  <div className="card-text">
                    {removeTags(item.show.summary).slice(0, 105)}
                    <span>
                      ...{" "}
                      <span className="read-more" onClick={()=>readMore(item) }>
                        Read More
                      </span>
                    </span>
                  </div>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      {item.show.genres.map((genre, index) => (
                        <li
                          key={index}
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          {genre}
                        </li>
                      ))}
                    </ol>
                  </nav>
                  <button
                    className="btn btn-primary"
                    onClick={() => bookTickets(item)}
                  >
                    Book Tickets
                  </button>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    Premiered on {item.show.premiered}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
