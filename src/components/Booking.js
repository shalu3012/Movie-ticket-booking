import React from "react";
import {useState} from 'react'
function Booking() {
  const movie = JSON.parse(localStorage.getItem("book"));
  console.log(movie);
  const [user,setUser]=useState({
    firstname:"",
    lastname:"",
    address:'',
    contactNo:'',
    type:'',
    noOfSeats:''
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
console.log(user)
  return (
    <div className="container my-3">
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
          </div>
        </div>
      </div>
      <div className="container container-sm d-flex justify-content-center flex-column align-items-center my-3">
        <h1>BOOK TICKETS HERE</h1>
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              First Name
            </label>
            <input type="text" className="form-control" id="inputEmail4" name="firstname" onChange={(e)=>handleChange(e)}/>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Last Name
            </label>
            <input type="text" className="form-control" id="inputPassword4" name="lastname" onChange={(e)=>handleChange(e)} />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main Street"
              name="address"
              onChange={(e)=>handleChange(e)} 
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Contact Number
            </label>
            <input type="number" className="form-control" id="inputPassword4" name="contactNo" onChange={(e)=>handleChange(e)} />
          </div>
          <div className="col-md-12">
          <select className="form-select" aria-label="Default select example" name="type" onChange={(e)=>handleChange(e)}>
            <option selected>Seat Type</option>
            <option value="300">Platinum-Rs.300.00</option>
            <option value="200">Gold-Rs.200.00</option>
            <option value="100">Silver-Rs.100.00</option>
          </select>
          </div>
         
          <div className="form-outline">
            <label className="form-label" htmlFor="typeNumber">
              No. of seats
            </label>
            <input type="number" id="typeNumber" className="form-control" name="noOfSeats" onChange={(e)=>handleChange(e)}/>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" htmlFor="gridCheck">
                Check me out
              </label>
            </div>
            <div className="totalbill">Your Total bill : <span>{user.type*user.noOfSeats}</span></div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Book tickets
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Booking;
