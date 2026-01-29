import { useState } from "react";
import "./AddCategory.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const AddCategory = ({ url }) => {
  const { id } = useParams();
  console.log(id);

  const [name, setName] = useState("");

  const [category, setCategory] = useState([]);

  const onClick = async (e) => {
    e.preventDefault();

    // const response = await axios.post(`${url}/api/food/add`, formData);

    const response = await axios.post(`${url}/api/category/${id}`, {
      name: name,
    });

    console.log(response);
    if (response.data.success === true) {
      setName("");
    } else {
      toast.error("Error");
    }

    // setName("");
  };

  const fetchCategory = async () => {
    const response = await axios.get(url + `/api/category/${id}`);
    console.log(response);
    if (response.data.success === true) {
      setCategory(response.data.data);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, [id]);

  // const onSubmitHandler = async (event) => {
  //   event.preventDefault();
  //   const formData = new FormData();
  //   formData.append("name", data.name);
  //   console.log(formData);
  //   const response = await axios.post(`${url}/api/food/add`, formData);
  //   console.log(response.data);
  //   console.log(response.data.success);
  //   if (response.data.success === true) {
  //     setData({
  //       name: "",
  //     });
  //     toast.success(response.data.message);
  //   } else {
  //     toast.error(response.data.message);
  //   }
  // };

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log("hello");

    const response = await axios.post();
    console.log(response.data);
  };

  console.log(name);
  console.log(category);

  return (
    <div className="add">
      <form onSubmit={onClick}>
        <div className="add-name-input flex-col">
          <p>Category</p>
          <input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Category (Rice, Noodles, Fast Food etc.)"
            required
          />{" "}
          <button>Add</button>
        </div>
      </form>
      <br />
      <form className="flex-col">
        {/* <div className="add-product-name flex-col">
          <p>Category name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
          />
        </div> */}

        <div className="category-list">
          <h3>List of category you currently have</h3>
          <ul className="list">
            {category.map((item, index) => (
              <li key={index}>
                {item.name} <button>Delete</button>
              </li>
            ))}
          </ul>
        </div>

        <button type="submit" className="add-btn">
          Next
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
