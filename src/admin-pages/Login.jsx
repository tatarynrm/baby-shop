import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { fetchUserData, selectIsAuth } from "../redux/slices/authSlice";
const Login = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const [showPass, setShowPass] = useState(false);
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
      localStorage.setItem("token", data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/admin-panel" />;
  }
  return (
    <div className="admin__login">
      <div className="admin__login-form">
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <FormControl fullWidth={true} variant="standard">
            <InputLabel sx={{ fontSize: "2rem" }}>Email address</InputLabel>
            <Input
              sx={{ color: "white", fontSize: "2rem" }}
              id="my-input"
              type="email"
              {...register("email", { required: "Вкажіть електронну адресу" })}
            />
          </FormControl>
          <FormControl fullWidth={true} variant="standard">
            <InputLabel sx={{ fontSize: "2rem" }} htmlFor="my-input">
              Password
            </InputLabel>
            <Input
              sx={{ color: "white", fontSize: "2rem" }}
              type="password"
              {...register("password", {
                required: "Вкажіть пароль",
              })}
            />
          </FormControl>
          <Button variant="outlined" sx={{ fontSize: "1.2rem" }} type="sumbit">
            Log in
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
