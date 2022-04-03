import React from "react";

const Reviews = ({ review }) => {
  const { name } = review;
  // console.log(review);
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Reviews;
