import React from "react";
import "./home.css";
import Button from "@mui/material/Button";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

function Home() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  function Submitted() {
    navigate("/src/pages/logged.jsx");
  }

  return (
    <div>
      <h2>Email ID (with validation for format xxxx@xxx.com)</h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          for="email"
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        ></input>
        {formik.touched.email && formik.errors.email ? (
          <span>{formik.errors.email}</span>
        ) : null}

        <Button variant="outlined" color="success" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}

export default Home;
