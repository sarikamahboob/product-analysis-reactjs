import React from "react";
import useReviews from "../../Hooks/useReviews";
import SingleReview from "../SingleReview/SingleReview";

const Reviews = () => {
  const [reviews] = useReviews();
  return (
    <div>
      {reviews.map((review, id) => (
        <SingleReview key={id} review={review}></SingleReview>
      ))}
    </div>
  );
};

export default Reviews;
