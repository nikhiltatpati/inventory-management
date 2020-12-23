import React, { Component } from "react";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";

const Admin = () => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    const productList = localStorage.getItem("items");
    setItems(JSON.parse(productList));
  }, []);

  function removeItem(itemId) {
    let updatedList = items.filter((item) => item.id !== itemId);
    setItems(updatedList);
    localStorage.setItem("items", JSON.stringify(updatedList));
  }

  return (
    <div>
      <div>
        <section>
          <div className="container">
            {items.map((item) => {
              return (
                <div
                  className="card"
                  style={{
                    display: "inline-block",
                    width: "400px",
                    margin: 20,
                  }}
                  key={item.id}
                >
                  <div className="card-body">
                    <h3 className="card-title">
                      <b>{item.name}</b>
                    </h3>

                    <p className="card-text">
                      <b>Category: </b>
                      {item.category}
                    </p>

                    <p className="card-text">
                      <b>Provider: </b>
                      {item.provider}
                    </p>

                    <p className="card-text">
                      <b>Origin: </b>
                      {item.origin}
                    </p>

                    <p className="card-text">
                      <b>Units: </b>
                      {item.units}
                    </p>

                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        removeItem(item.id);
                      }}
                      style={{ margin: "10px" }}
                    >
                      Remove
                    </button>

                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        window.location.href = `/product/edit/${item.id}`;
                      }}
                      style={{ margin: "10px" }}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};
export default Admin;
