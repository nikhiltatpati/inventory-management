import React from "react";

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <h2>Login</h2>
      <div
        style={{
          height: "40vh",
          width: "40vw",
          border: "2px solid black",
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            localStorage.setItem("auth", "verified");
            window.location.href = "/";
          }}
        >
          <div style={{ margin: "20px" }}>Username:</div>
          <div class="input-group mb-3">
            <input
              style={{ margin: "20px" }}
              className="form-control"
              placeholder="Username"
              aria-label="username"
              aria-describedby="basic-addon1"
              type="text"
              name="name"
            />
          </div>
          <div style={{ margin: "20px" }}>Password:</div>
          <div class="input-group mb-3">
            <input
              style={{ margin: "20px" }}
              className="form-control"
              placeholder="Password"
              aria-label="password"
              aria-describedby="basic-addon1"
              type="password"
              name="category"
            />
          </div>

          <button
            type="button"
            className="submit"
            type="submit"
            style={{
              marginTop: "5%",
              width: "40vw",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
