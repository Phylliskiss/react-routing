import React from "react";
import { Link } from "react-router-dom";
import ServiceDetails from "./ServiceDetails";
import { useState, useEffect } from "react";
import "./Style.css";

const Services = () => {
  const [review, setReview] = useState([]);
  const getReview = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments/"
      );
      const data = await response.json();
      setReview(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getReview();
  });

  const url =
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

  return (
    <div className="cards">
      {review.slice(0, 6).map((review) => (
        <div className="card">
          <img src={url} alt="Avatar" />
          <div className="container">
            <div>
              <h3>English Lessons</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Necessitatibus quaerat aperiam quas, velit temporibus laboriosam{" "}
                <Link to={`/services/${review.id}`}> Read more</Link>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
