import axios from "../setup-axios/axios";
import React, { useEffect, useState } from "react";
const UserContext = React.createContext(null);
const defaultData = {
  isLoading: true,
  isAuthenticated: false,
  token: "",
  accout: {},
};
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(defaultData);
  const loginContext = (userData) => {
    setUser({ ...userData, isLoading: false });
  };
  const logoutContext = () => {
    setUser({ ...defaultData, isLoading: false });
  };
  const fetchUserAccount = async () => {
    let res = await axios.get("/employees/account");
    if (res && res.message === "success") {
      let email = res.data.email;
      let roles = res.data;
      let position = roles.role[0].TenViTri;
      let id = roles.role[0].MaNV;
      let data = {
        isAuthenticated: true,
        token: res.access_token,
        accout: { email, roles, id, position },
        isLoading: false,
      };
      setUser(data);
    } else {
      setUser({ ...defaultData, isLoading: false });
    }
  };
  useEffect(() => {
    if (window.location.pathname !== "/admin-login") {
      fetchUserAccount();
    } else {
      setUser({ ...user, isLoading: false });
    }
  }, []);
  return (
    <UserContext.Provider value={{ user, loginContext, logoutContext }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserProvider };
