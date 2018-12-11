import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("provide username"),
  password: Yup.string()
    .required("can not be empty")
    .min(6, "min 6 characters"),
  confirmPassword: Yup.string()
    // .required('can not be empty')
    // .min(6, 'min 6 characters')
    .oneOf([Yup.ref("password")], "password doesn't mach")
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.checkConfirmPassword = this.checkConfirmPassword.bind(this);
  }

  checkConfirmPassword(value) {
    console.log(value);
  }

  render() {
    return (
      <div>
        <h1>Login Form</h1>
        <Formik
          initialValues={{
            username: "",
            password: "",
            confirmPassword: ""
          }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            console.log(values);
            actions.setSubmitting(false);
          }}
        >
          {({ values, errors, touched }) => (
            <Form>
              <label htmlFor="username">Username</label>
              <div>
                <Field name="username" type="text" />
                <ErrorMessage name="username" />
              </div>
              <br />
              <label htmlFor="password">Password</label>
              <div>
                <Field name="password" type="text" />
                <ErrorMessage name="password" />
              </div>
              <br />
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div>
                <Field name="confirmPassword" type="text" />
                <ErrorMessage name="confirmPassword" />
              </div>
              <br />
              <div>
                <button type="submit">Login</button>
              </div>
              <br />
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default Login;
