import React, { useContext, useEffect, useState } from "react";
import { ReviewContext } from "../../App";
import useReviews from "../../Hooks/useReviews";
import SingleReview from "../SingleReview/SingleReview";

import "./Home.css";

const Home = () => {
  const [reviews] = useReviews();

  console.log("reviews home:", reviews);

  return (
    <div>
      <div className="container mx-auto flex justify-between items-center">
        <div className=" ">
          <h1 className="text-blue-700 text-5xl font-bold mb-5">
            Explore the Laptop
          </h1>
          <h1 className="text-blue-500 text-5xl font-bold mb-5">
            Get the best Performance
          </h1>
          <p className="text-2xl mb-3 text-gray-600">
            Gives up to 20 hours of battery life
          </p>
          <p className="text-2xl  mb-3 text-gray-600">
            Has retina display with 500 nits of brightness for vibrant colors
            and incredible detail
          </p>
          <p className="text-2xl  mb-3 text-gray-600">
            Provides superfast SSD storage which opens apps and files in an
            instant
          </p>
        </div>
        <div className="image">
          <img
            src={`https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-13-digitalmat-gallery-4-202111?wid=364&hei=333&fmt=png-alpha&.v=1636157948000`}
            alt=""
          />
        </div>
      </div>
      <div className="container mx-auto flex flex-col ">
        {reviews.slice(0, 3).map((review, id) => (
          <SingleReview key={id} review={review}></SingleReview>
        ))}
      </div>
    </div>
  );
};

export default Home;
