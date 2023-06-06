import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Style.css";


function ServiceDetails() {
  const { id } = useParams();
  //console.log(id);

  const [reviews, setReviews] = useState([]);
  const getReview = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments/")
        const data = await response.json()
        //console.log(data);
        setReviews(data);
    } catch (error) {
        console.error(error)
    }

      
  };

  useEffect(() => {
    getReview();
  },[]);

  return (
    <div>
      <h1>Service Details</h1>
      <div>
        {
            reviews.map((review) => {
                if(review.id === parseInt(id)){
                    return(
                        <div>
                            <p>{review.name}</p>
                            <p>{review.body}</p>
                            <p>{review.body}</p>
                            <p>{review.body}</p>
                            <p>{review.body}</p>
                        </div>
                    )
                }
            })
        }
      </div>
    </div>
  );
}

export default ServiceDetails;
