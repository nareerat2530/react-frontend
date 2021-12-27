const Validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.description) {
    errors.description = "Description is Required";
  }

  if (!values.price) {
    errors.price = "Required";
  }
  if (!values.imageUrl) {
    errors.imageUrl = "Required";
  }
  if (!values.startDate) {
    errors.startDate = "Required";
  }
  if (!values.endDate) {
    errors.endDate = "Required";
  }
  if (!values.producerId) {
    errors.producerId = "Required";
  }
  if (!values.movieCategory) {
    errors.movieCategory = "Required";
  }
  if (!values.cinemaId) {
    errors.cinemaId = "Required";
  }

  return errors;
};
export default Validate
