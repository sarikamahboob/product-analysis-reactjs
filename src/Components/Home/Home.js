import { useNavigate } from "react-router-dom";
import useReviews from "../../Hooks/useReviews";
import SingleReview from "../SingleReview/SingleReview";

import "./Home.css";

const Home = () => {
  const [reviews] = useReviews();
  const navigate = useNavigate();

  return (
    <div>
      <div className="container mx-auto flex justify-between items-center">
        <div className=" ">
          <h1 className="text-blue-700 text-3xl lg:text-5xl font-bold mb-5">
            Explore the Laptop
          </h1>
          <h1 className="text-blue-500 text-3xl lg:text-5xl font-bold mb-5">
            Get the best Performance
          </h1>
          <p className="text-xl lg:text-2xl mb-3 text-gray-600">
            Gives up to 20 hours of battery life
          </p>
          <p className="text-xl lg:text-2xl  mb-3 text-gray-600">
            Has retina display with 500 nits of brightness for vibrant colors
            and incredible detail
          </p>
          <p className=" text-xl lg:text-2xl  mb-3 text-gray-600">
            Provides superfast SSD storage which opens apps and files in an
            instant
          </p>
          <button className="bg-indigo-100 p-3 mt-3 hover:bg-indigo-700 hover:text-indigo-100 ease-in-out duration-300  text-indigo-700 font-bold text-xl rounded-xl">
            Live Demo
          </button>
        </div>
        <div className="image">
          <img
            src={`https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-13-digitalmat-gallery-4-202111?wid=364&hei=333&fmt=png-alpha&.v=1636157948000`}
            alt=""
          />
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-center mb-10">
        {reviews.slice(0, 3).map((review, id) => (
          <SingleReview key={id} review={review}></SingleReview>
        ))}
        <button
          onClick={() => navigate(`/reviews`)}
          className="bg-indigo-100 p-3 mt-3 hover:bg-indigo-700 hover:text-indigo-100 ease-in-out duration-300  text-indigo-700 font-bold text-xl rounded-xl"
        >
          See All the Reviews
        </button>
      </div>
    </div>
  );
};

export default Home;
