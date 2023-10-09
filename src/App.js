import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes, adminRoutes, privateRoutes } from "./routers/index";
import Error from "./pages/Error";
import DefaultLayout from "./components/Layout/DefaultLayout";
import DefaultAdmin from "./components/Layout/DefaultAdmin";

import { useContext, useEffect, useState } from "react";
import style from "./App.module.scss";
import classNames from "classnames/bind";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BillLayout from "./components/Layout/BillLayout";

import { UserContext } from "./context/UserContext";
import { Audio, Oval } from "react-loader-spinner";
const cx = classNames.bind(style);
function App() {
  const { user } = useContext(UserContext);

  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            {publicRoutes.map((route, index) => {
              const Layout = DefaultLayout;
              const LayoutAdmin = DefaultAdmin;
              
              const LayoutBill =
                BillLayout; /* The line `const Page = route.component;` is assigning
              the value of `route.component` to the variable `Page`.
              This allows us to use the `Page` variable as a component
              in the JSX code later on. */

              const Page = route.component;
              if (index >= 0 && index <= 3) {
                return (
                  <Route key={index} path={route.path} element={ <Page />} />
                );
              } else if (index >= 10) {
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      user && user.isLoading ? (
                        <div className={cx("loading-data")}>
                          <Oval
                            height={150}
                            width={150}
                            color="white"
                            ariaLabel="loading"
                            secondaryColor="black"
                          />
                          <p>Please waiting</p>
                        </div>
                      ) : (
                        <LayoutAdmin>
                          <Page />
                        </LayoutAdmin>
                      )
                    }
                  />
                );
              } else if (index === 5) {
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <LayoutBill>
                        <Page />
                      </LayoutBill>
                    }
                  />
                );
              } else {
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    }
                  />
                );
              }
            })}
          </Routes>
        </div>
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
    </>
  );
}

export default App;
