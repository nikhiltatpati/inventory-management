import React from "react";
import { v4 as uuidv4 } from "uuid";

const productAdd = () => {
  function handleSubmit(e) {
    e.preventDefault();

    if (e.target[0].value) {
      let newProduct = {};
      newProduct["id"] = uuidv4();
      newProduct["name"] = e.target[0].value;
      newProduct["category"] = e.target[1].value;
      newProduct["provider"] = e.target[2].value;
      newProduct["origin"] = e.target[3].value;
      newProduct["units"] = e.target[4].value;
      const itemsJson = localStorage.getItem("items");
      const items = JSON.parse(itemsJson);
      localStorage.setItem("items", JSON.stringify([...items, newProduct]));

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
      <h3>Add Product</h3>
      <form onSubmit={handleSubmit}>
        <div class="input-group mb-3">
          <input
            className="form-control"
            placeholder="Add name"
            aria-label="Add name"
            aria-describedby="basic-addon1"
            type="text"
            name="name"
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
    </div>
  );
};

export default productAdd;
