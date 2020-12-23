import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const [item, setItem] = React.useState([]);

  let { id } = useParams();

  React.useEffect(() => {
    let products = localStorage.getItem("items");
    let parsedProducts = JSON.parse(products);
    const product = parsedProducts.filter((item) => item.id === id);
    setItem(product);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if (e.target[0].value) {
      let newProduct = {};
      newProduct["id"] = id;
      newProduct["name"] = e.target[0].value;
      newProduct["category"] = e.target[1].value;
      newProduct["provider"] = e.target[2].value;
      newProduct["origin"] = e.target[3].value;
      newProduct["units"] = e.target[4].value;
      const itemsJson = localStorage.getItem("items");
      const items = JSON.parse(itemsJson);
      const product = items.filter((item) => item.id !== id);

      localStorage.setItem("items", JSON.stringify([...product, newProduct]));

      e.target[0].value = "";
      e.target[1].value = "";
      e.target[2].value = "";
      e.target[3].value = "";
      e.target[4].value = "";

      window.location.href = "/product";
    } else {
      alert("Name should not be empty!!");

      e.target[0].value = "";
      e.target[1].value = "";
      e.target[2].value = "";
      e.target[3].value = "";
      e.target[4].value = "";
    }
  }

  return (
    <div
      style={{
        margin: 20,
        background: "#d3d3d3",
        padding: 50,
      }}
    >
      <h3>Edit Product</h3>
      {item.length === 1 && (
        <form onSubmit={handleSubmit}>
          <div class="input-group mb-3">
            <input
              className="form-control"
              placeholder="Add name"
              aria-label="Add name"
              aria-describedby="basic-addon1"
              type="text"
              name="name"
              defaultValue={item[0].name}
            />
          </div>
          <div class="input-group mb-3">
            <input
              className="form-control"
              placeholder="Add category"
              aria-label="Add category"
              aria-describedby="basic-addon1"
              type="text"
              name="category"
              defaultValue={item[0].category}
            />
          </div>
          <div class="input-group mb-3">
            <input
              className="form-control"
              placeholder="Add Provider"
              aria-label="Add Provider"
              aria-describedby="basic-addon1"
              type="text"
              name="provider"
              defaultValue={item[0].provider}
            />
          </div>
          <div class="input-group mb-3">
            <input
              className="form-control"
              placeholder="Add origin"
              aria-label="Add origin"
              aria-describedby="basic-addon1"
              type="text"
              name="origin"
              defaultValue={item[0].origin}
            />
          </div>
          <div class="input-group mb-3">
            <input
              className="form-control"
              placeholder="Add units"
              aria-label="Add units"
              aria-describedby="basic-addon1"
              type="number"
              name="units"
              defaultValue={item[0].units}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            type="submit"
            style={{
              width: "2vw",
            }}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default EditProduct;
