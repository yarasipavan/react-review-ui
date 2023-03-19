//import css
import "./List.css";

//component to display list  of reviews
function List({ reviews, deleteReview }) {
  // this function gets the array of reviews [{desc:"",rating:""}]
  return (
    <div>
      <div className="text-light text-center mt-3">
        {reviews.length ? (
          reviews.map((review, index) => (
            <div className="container mb-2" key={index}>
              <div className="row">
                <div className="col col-10  col-md-6 col-lg-4 offset-1 offset-md-3 offset-lg-4 mb-3 review-container">
                  <div className="rating">{review.rating}</div>
                  <div className="delete" onClick={() => deleteReview(index)}>
                    x
                  </div>
                  <div className="review-description">{review.desc}</div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-danger fw-bold">No reviews</p>
        )}
      </div>
    </div>
  );
}

export default List;
