// import css
import "./Form.css";
import { useForm } from "react-hook-form";

function Form(props) {
  let {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (reviewObj) => {
    props.getReviews(reviewObj);
    reset();
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3 ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-12  col-lg-6 pb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Review description"
                    {...register("desc", { required: true })}
                  />
                  {errors.desc?.type === "required" && (
                    <p className="text-danger fw-bold">
                      Enter Review description
                    </p>
                  )}
                </div>
                <div className="col-12 col-sm-8  col-lg-3 pb-2">
                  <select
                    name=""
                    id=""
                    className="form-control"
                    {...register("rating", { required: true })}
                  >
                    <option value="">Select Rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  {errors.rating?.type === "required" && (
                    <p className="text-danger fw-bold">Select rating</p>
                  )}
                </div>
                <div className="col-12 col-sm-4 col-lg-3    ">
                  <button
                    type="submit"
                    className="b d-block form-control"
                    style={{
                      background: "rgb(253, 65, 141,0.7)",
                      border: "none",
                      color: "#fff",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
