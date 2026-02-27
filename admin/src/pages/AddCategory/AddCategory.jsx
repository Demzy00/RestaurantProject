import { useContext, useState } from "react";
import "./AddCategory.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
import { StoreContext } from "../../context/StoreContext";

const AddCategory = ({ url }) => {
  const [name, setName] = useState("");

  const { category, setCategory, token } = useContext(StoreContext);

  const onClick = async (e) => {
    e.preventDefault();
    
    if (!token) {
      toast.error("Please login first");
      return;
    }

    try {
      const response = await axios.post(`${url}/api/category`, {
        name: name,
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log(response);
      if (response.data.success === true) {
        setName("");
        toast.success("Category added successfully");
      } else {
        toast.error("Error");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to add category");
    }
  };

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
            placeholder="Category (Rice, Drink, Fast Food etc.)"
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
