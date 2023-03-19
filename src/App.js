import "./App.css";
import { useState } from "react";
//import header component
import Header from "./components/Header";

//import status component
import Status from "./components/Status";

//import Form component
import Form from "./components/Form";

//import list component
import List from "./components/List";

function App() {
  //states
  let [reviews, setReviews] = useState([]);
  let [averageRating, setAverageRating] = useState(0);
  let [sumRating, setSumRating] = useState(0);

  // function to add review and update average
  const getReviews = (review) => {
    //after getting the new review update the states

    setReviews([...reviews, review]);
    setSumRating(sumRating + Number(review.rating));
    setAverageRating(
      ((sumRating + Number(review.rating)) / (reviews.length + 1)).toFixed(1) // fix the avg to 1 decimal
    );
  };

  //delete review
  const deleteReview = (index) => {
    let updatedReviews = reviews.filter((reviewObj, ind) => {
      if (ind != index) return reviewObj;
      else {
        setSumRating(sumRating - Number(reviewObj.rating));
        // if the reviews size is 1 , then after removing that review set avg to 0 else calculate avg
        setAverageRating(
          (reviews.length === 1
            ? 0
            : (sumRating - Number(reviewObj.rating)) / (reviews.length - 1)
          ).toFixed(1) // fix the avg to 1 decimal
        );
      }
    });

    //update the reviews
    setReviews(updatedReviews);
    //set average
  };

  return (
    <div className="App">
      <Header />

      <Form getReviews={getReviews} />

      <Status reviewsCount={reviews.length} averageRating={averageRating} />

      <List reviews={reviews} deleteReview={deleteReview} />
    </div>
  );
}

export default App;
