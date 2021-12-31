
import { useNavigate } from "react-router-dom";
import ProducerService from "../Services/producer-service";
import useInput from "../hooks/use-input";



const AddProducerForm = () => {

    const { value: fullName, bind: bindName, reset: resetName } = useInput("");
    const { value: bio, bind: bindBio, reset: resetBio } = useInput("");

    const {
    value: imageUrl,
    bind: bindImageUrl,
    reset: resetImageUrl,
  } = useInput("");

  const resetForm = () => {
    resetName();
    resetBio();
    resetImageUrl();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let producer = {
      fullName,
      imageUrl,
      bio,
    };
    ProducerService.AddProducer(producer);

    resetForm();
    alert("Submitted Successfully")
  };

  const navigate = useNavigate();
  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Add a new Producer</h2>
        <div className="form-inputs">
          <label htmlFor="form-label">Name</label>
          <input
            className="form-input"
            {...bindName}
            type="text"
            name="name"
            placeholder="Enter Name"
            required={true}
          />

        </div>
        <div className="form-inputs">
          <label htmlFor="form-label">Description</label>
          <textarea
            className="form-input"
            {...bindBio}
            type="text"
            name="description"
            placeholder="Enter Description"
            required={true}
          />

        </div>
        <div className="form-inputs">
          <label htmlFor="form-label">ImageUrl</label>
          <input
            className="form-input"
            {...bindImageUrl}
            type="text"
            name="imageUrl"
            placeholder="Enter Image URL"
            required={true}
          />

        </div>
        <button className="form-input-btn" type="submit">
          Add
        </button>
        <button
          className="form-input-btn"
          type="cancel"
          onClick={() => navigate("/producers")}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};
export default AddProducerForm;