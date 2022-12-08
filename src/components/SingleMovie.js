import React from 'react'

function SingleMovie() {
    const movie=JSON.parse(localStorage.getItem('movie'))
    const removeTags = (str) => {
        return str.replace(/(<([^>]+)>)/gi, "");
      };
      console.log(movie)
  return (
    <div className='container my-3'>
        <div className="container about-movie">
        <div className="movie-poster">
          <img src={movie.show.image.original} alt="" width="260px" />
        </div>
        <div className="movie-details">
          <h1 className="movie-name">{movie.show.name}</h1>
          <div className="basic-details">
            <h6 className="detail-heading">
              Language :
              <span className="general-details"> {movie.show.language}</span>
            </h6>
            <h6 className="detail-heading">
              Type :<span className="general-details"> {movie.show.type}</span>
            </h6>
            <h6 className="detail-heading">
            Premiered :<span className="general-details"> {movie.show.premiered}</span>
            </h6>
            <h6 className="detail-heading">
              Official Site :
              <span className="general-details">
                <a href={movie.show.officialSite}> {movie.show.officialSite}</a>
              </span>
            </h6>
          </div>
          <div className="show-times">
            <h6 className="detail-heading">
              Time available :{" "}
              <span className="general-details">
              
                {movie.show.schedule.time}
              </span>
            </h6>
            <h6 className="detail-heading">
              Days available :
              {movie.show.schedule.days.map((item, index) => (
                <span className="general-details" key={index}> {item}</span>
              ))}
            </h6>
            <h6 className="detail-heading">
              Genres :
              {movie.show.genres.map((item, index) => (
                <span className="general-details" key={index}> {item}/</span>
              ))}
            </h6>
          </div>
          <div className="summary">
            <p className="movie-summary">
            {removeTags(movie.show.summary)}
            </p>
          </div>
        </div>
      </div>
      <footer className="bg-light text-center text-lg-start">
  <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2020 Copyright 
    <span className="text-dark"> { movie.show.network.country.name} { movie.show.network.country.code} { movie.show.network.country.timezone}</span>
  </div>
</footer>
    </div>
  )
}

export default SingleMovie