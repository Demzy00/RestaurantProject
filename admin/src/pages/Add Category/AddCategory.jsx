import { useState } from "react";
import "./AddCategory.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";

const AddCategory = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
  });

  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/foodCategory/list`);
    console.log(response.data);

    if (response.data.success === true) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("image", image);
    console.log(formData);
    const response = await axios.post(`${url}/api/foodCategory/add`, formData);
    console.log(response.data);
    if (response.data.success === "true") {
      setData({
        name: "",
      });
      setImage(false);
      console.log(response.data);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
            />
          </label>

          <input
            onChange={(e) => {
              {
                console.log(e.target.files);
              }
              setImage(e.target.files[0]);
            }}
            type="file"
            id="image"
            name="avatar"
            hidden
            required
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Category Name</p>
          <input
            onChange={onChangeHandler}
            type="text"
            name="name"
            placeholder="Type here"
          />
        </div>

        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
      <br />
      <br />
      <br />
      <hr />
      <br />
      <p>List of category</p>

      {list.map((item, index) => {
        return (
          <div className="list-table-format">
            <p>{item.name}</p>
            <p>{item.image}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AddCategory;
