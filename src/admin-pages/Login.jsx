import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { fetchUserData, selectIsAuth } from "../redux/slices/authSlice";
const Login = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchUserData(values));
    if (!data.payload) {
      alert("Невдала спроба авторизації");
    }
    if (data.payload.isAdmin === true) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };

  if (isAuth) {
    {
      return <Navigate to="/admin-panel" />;
    }
  }
  return (
    <div className="admin__login">
      <div className="admin__login-form">
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <div className="form-control">
            <input
              type="email"
              placeholder="E-mail"
              {...register("email", { required: "Вкажіть електронну адресу" })}
            />
          </div>
          <div className="form-control">
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Вкажіть пароль",
              })}
            />
          </div>
          <button className="login-button" type="sumbit">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
