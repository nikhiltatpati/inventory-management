import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span
          className="navbar-brand"
          style={{ cursor: "pointer" }}
          onClick={() => {
            window.location.href = "/";
          }}
        >
          HotShotAdz
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {localStorage.getItem("auth") && (
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="d-flex">
              <button
                class="btn btn-outline-success"
                style={{ margin: "2%" }}
                onClick={() => {
                  window.location.href = "/product/add";
                }}
              >
                Add
              </button>
              <button
                class="btn btn-outline-success"
                style={{ margin: "2%", cursor: "pointer" }}
                onClick={() => {
                  window.location.href = "/customers";
                }}
              >
                Customers
              </button>
              <button
                class="btn btn-outline-success"
                style={{ margin: "2%", cursor: "pointer" }}
                onClick={() => {
                  window.location.href = "/about";
                }}
              >
                About
              </button>
              <button
                class="btn btn-outline-success"
                onClick={() => {
                  localStorage.removeItem("auth");
                  window.location.href = "/";
                }}
                style={{ margin: "2%" }}
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
