function StarRating({ rating }) {
  /*
    Here's the markup for a single star:
    
    <img
      alt=""
      className="gold-star"
      src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
    />
    
    Your job is to repeat this element
    based on the `rating` prop.
    If the rating is 4, we need 4 copies.
  */

  // Create an array-like Variable. Set Length to be the value from the rating prop
  const starRatingArray = Array.from({ length: rating });

  return (
    <>
      <div className="star-wrapper">
        {/*Iterate through the array  */}
        {starRatingArray.map((star, index) => (
          <img
            key={index}
            alt="Rating-Star"
            className="gold-star"
            src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
          />
        ))}
      </div>
    </>
  );
}

export default StarRating;
