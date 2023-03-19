//component function

function Status({ reviewsCount, averageRating }) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3 text-light fw-bold mt-2 p-3">
            <div className="float-start">Reviews: {reviewsCount}</div>
            <div className="float-end">Average:{averageRating}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Status;
