import React from "react";
import { Formik } from "formik";
const CreateProduct = () => {
  return (
    <div className="add__products-form">
      <Formik
        initialValues={{
          name: "",
          price: "",
          categoryId: "",
          description: "",
          _available: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form className="add-product-form" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default CreateProduct;

// price: req.body.price,
// currencyId: req.body.currencyId,
// categoryId: req.body.categoryId,
// picture: req.body.picture,
// name: req.body.name,
// vendor: req.body.vendor,
// vendorCode: req.body.vendorCode,
// description: req.body.description,
// _id: req.body._id,
// _available: req.body._available,
// importedId: req.body.importedId,
// user: req.userId,
