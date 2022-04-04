import "./SingleReview.css";

const SingleReview = ({ review }) => {
  const { name, picture, description, ratings } = review;
  return (
    <div className="container mx-auto mt-8">
      <div className="flex mb-10 bg-indigo-100 rounded-lg ">
        <div className="picture">
          <img src={picture} alt="" className="rounded-lg" />
        </div>
        <div className="pt-5">
          <h1 className="font-bold text-blue-700 text-2xl mb-8 ">{name}</h1>
          <p className="text-xl mb-8 text-gray-600">{description}</p>
          <p className="text-xl ">{ratings}</p>
        </div>
      </div>
    </div>
  );
};
export default SingleReview;
