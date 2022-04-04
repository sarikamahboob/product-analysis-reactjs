import "./SingleReview.css";

const SingleReview = ({ review }) => {
  const { name, picture } = review;
  return (
    <div className="flex items-center ">
      <div className="flex">
        <div className="picture">
          <img src={picture} alt="" />
        </div>
        <div>
          <h1 className="font-bold text-blue-700 text-2xl ">{name}</h1>
        </div>
      </div>
    </div>
  );
};
export default SingleReview;
