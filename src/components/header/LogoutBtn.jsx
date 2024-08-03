import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/config";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = async () => {
    await authService.logout();
    dispatch(logout());
  };

  return <button onClick={logoutHandler}>Logout</button>;
}

export default LogoutBtn;
