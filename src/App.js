import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes, adminRoutes } from "./routers/index";
import Error from "./pages/Error";
import DefaultLayout from "./components/Layout/DefaultLayout";
import DefaultAdmin from "./components/Layout/DefaultAdmin";
import BillLayout from "./components/Layout/BillLayout";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = DefaultLayout;
            const LayoutAdmin = DefaultAdmin;
            const LayoutBill = BillLayout;
            const Page = route.component;
            if (index === 2 || index === 3 || index === 6 || index === 7) {
              return <Route key={index} path={route.path} element={<Page />} />;
            } else if (index >= 8 && index <= 10) {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <LayoutAdmin>
                      <Page />
                    </LayoutAdmin>
                  }
                />
              );
            } else if (index === 11) {
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
  );
}

export default App;
